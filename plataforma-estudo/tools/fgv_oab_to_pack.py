#!/usr/bin/env python3
"""Converte uma prova objetiva FGV/OAB e seu gabarito em content pack.

Uso:
  python tools/fgv_oab_to_pack.py \
    --exam XLVI --year 2026 --type 1 \
    --proof prova_tipo_1.pdf --key gabarito_definitivo.pdf \
    --output conteudo/oab-xlvi-tipo-1.json \
    --discipline-map tools/discipline-map-xlvi.json

O parser é deliberadamente conservador: ele falha quando não consegue
identificar exatamente a quantidade esperada de questões/respostas, em vez
de gerar um pacote silenciosamente incorreto. A classificação por disciplina
é configurável porque a FGV não publica, no PDF da prova, uma marcação
confiável de disciplina para cada questão.
"""
from __future__ import annotations

import argparse
import hashlib
import json
import re
import sys
from datetime import date
from pathlib import Path
from typing import Any

try:
    import fitz  # PyMuPDF
except ImportError as exc:  # pragma: no cover
    raise SystemExit("Instale a dependência com: python -m pip install pymupdf") from exc

LETTERS = set("ABCDE")
DEFAULT_DISCIPLINE = "nao-classificada"


def sha256(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as fh:
        for block in iter(lambda: fh.read(1024 * 1024), b""):
            digest.update(block)
    return digest.hexdigest()


def pdf_text(path: Path) -> str:
    """Extrai texto em ordem de leitura para páginas com duas colunas."""
    pages = []
    with fitz.open(path) as document:
        for page in document:
            width = page.rect.width
            blocks = page.get_text("blocks")
            columns = {0: [], 1: []}
            for block in blocks:
                x0, y0, _x1, _y1, text = block[:5]
                if text.strip():
                    columns[0 if x0 < width / 2 else 1].append((y0, x0, text))
            ordered = []
            for column in (0, 1):
                ordered.extend(text for _y, _x, text in sorted(columns[column], key=lambda item: (item[0], item[1])))
            pages.append("\n".join(ordered))
    return "\n".join(pages)


def normalize(text: str) -> str:
    text = text.replace("\u00a0", " ")
    text = re.sub(r"[ \t]+", " ", text)
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip()


def parse_questions(text: str, expected: int) -> list[dict[str, Any]]:
    """Extrai questões agrupando marcadores (A)-(D)/(E) em sequência.

    Em PDFs da FGV, a ordem visual é frequentemente formada por duas colunas.
    Depois de `pdf_text()` ordenar as colunas, cada questão é delimitada por
    quatro ou cinco marcadores de alternativa. O número é atribuído pela
    posição do bloco, e não por uma busca global de linhas numéricas.
    """
    markers = list(re.finditer(r"\(([A-E])\)\s*", text))
    if len(markers) < expected * 4:
        raise ValueError(f"Esperados pelo menos {expected * 4} marcadores de alternativa; encontrados {len(markers)}")
    if len(markers) % expected not in (0, 1, 2, 3, 4):
        raise ValueError("Quantidade de marcadores incompatível com o número de questões")

    questions = []
    cursor = 0
    for number in range(1, expected + 1):
        remaining_questions = expected - number + 1
        remaining_markers = len(markers) - cursor
        per_question = 5 if remaining_markers >= remaining_questions * 5 and remaining_markers - remaining_questions * 5 <= remaining_questions else 4
        end_marker = min(cursor + per_question, len(markers))
        group = markers[cursor:end_marker]
        if len(group) < 4 or group[0].group(1) != "A":
            raise ValueError(f"Questão {number}: sequência de alternativas inválida")
        block_start = markers[cursor - 1].end() if cursor else 0
        block_end = markers[end_marker].start() if end_marker < len(markers) else len(text)
        statement = normalize(text[block_start:markers[cursor].start()])
        statement = re.sub(r"(?:^|\n)\s*\d{1,3}\s*$", "", statement).strip()
        alternatives = []
        for index, marker in enumerate(group):
            alt_end = group[index + 1].start() if index + 1 < len(group) else block_end
            alternatives.append({"letter": marker.group(1), "text": normalize(text[marker.end():alt_end])})
        questions.append({"number": number, "statement": statement, "alternatives": alternatives})
        cursor = end_marker
    if cursor != len(markers):
        raise ValueError(f"Marcadores não consumidos após a questão {expected}")
    return questions


def parse_answer_key(text: str, exam: str, proof_type: int, expected: int) -> dict[int, str]:
    """Lê o bloco 'PROVA TIPO N' e as quatro linhas de 20 respostas."""
    type_pattern = re.compile(rf"PROVA\s+TIPO\s+{proof_type}\b", re.I)
    match = type_pattern.search(text)
    if not match:
        raise ValueError(f"Bloco da prova tipo {proof_type} não encontrado no gabarito")
    block = text[match.end():]
    next_type = re.search(r"PROVA\s+TIPO\s+[1-4]\b", block, re.I)
    if next_type:
        block = block[:next_type.start()]

    rows = []
    for line in block.splitlines():
        tokens = re.findall(r"\b[A-E]\b", line.upper())
        if len(tokens) >= 10:
            rows.append(tokens)
    # Linhas de respostas têm normalmente 20 letras. Captura também quebra
    # de linha em PDFs que comprimem a tabela.
    letters = [letter for row in rows for letter in row]
    if len(letters) < expected:
        letters = re.findall(r"(?<![A-Z])[A-E](?![A-Z])", block.upper())
    if len(letters) != expected:
        raise ValueError(f"Gabarito tipo {proof_type}: esperadas {expected} respostas, encontradas {len(letters)}")
    return {number: letters[number - 1] for number in range(1, expected + 1)}


def load_discipline_map(path: Path | None, expected: int) -> dict[int, str]:
    if not path:
        return {n: DEFAULT_DISCIPLINE for n in range(1, expected + 1)}
    data = json.loads(path.read_text(encoding="utf-8"))
    result = {int(k): str(v) for k, v in data.items()}
    return {n: result.get(n, DEFAULT_DISCIPLINE) for n in range(1, expected + 1)}


def build_pack(args: argparse.Namespace) -> dict[str, Any]:
    proof = Path(args.proof)
    key = Path(args.key)
    proof_text = pdf_text(proof)
    key_text = pdf_text(key)
    questions = parse_questions(proof_text, args.count)
    answers = parse_answer_key(key_text, args.exam, args.type, args.count)
    disciplines = load_discipline_map(Path(args.discipline_map) if args.discipline_map else None, args.count)
    accessed = date.today().isoformat()
    proof_url = args.proof_url or ""
    key_url = args.key_url or ""
    items = []
    discipline_keys = sorted(set(disciplines.values()))
    for question in questions:
        number = question["number"]
        item = {
            "contentId": f"oab-{args.exam.lower()}-tipo-{args.type}-q{number:02d}",
            "kind": "question",
            "disciplineKey": disciplines[number],
            "theme": "Questão objetiva",
            "origin": f"{args.exam}º Exame de Ordem — prova tipo {args.type} — questão {number}",
            "difficulty": "media",
            "statement": question["statement"],
            "alternatives": question["alternatives"],
            "correctAnswer": answers[number],
            "source": {"kind": "official-pdf", "name": "FGV/OAB", "url": proof_url, "accessedAt": accessed},
            "legalReferences": [],
            "status": "draft",
            "updatedAt": f"{accessed}T00:00:00Z",
            "metadata": {"exam": args.exam, "year": args.year, "proofType": args.type, "questionNumber": number, "keyUrl": key_url},
        }
        items.append(item)
    return {
        "format": "estudo-tdah-content", "schemaVersion": 1,
        "packId": f"oab-{args.exam.lower()}-tipo-{args.type}", "packVersion": 1,
        "title": f"{args.exam}º Exame de Ordem — Tipo {args.type}",
        "description": "Questões convertidas de PDF oficial; classificação por disciplina requer revisão editorial.",
        "source": {"kind": "official-pdf", "name": "FGV/OAB", "url": proof_url, "accessedAt": accessed, "license": "uso pessoal; verificar condições da fonte"},
        "disciplines": [{"key": key_name, "name": ("Não classificada" if key_name == DEFAULT_DISCIPLINE else key_name.replace("-", " ").title())} for key_name in discipline_keys],
        "items": items,
        "assets": {"proof": {"path": str(proof), "sha256": sha256(proof)}, "answerKey": {"path": str(key), "sha256": sha256(key)}},
    }


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--exam", required=True, help="Ex.: XLVI")
    parser.add_argument("--year", type=int, required=True)
    parser.add_argument("--type", type=int, choices=(1, 2, 3, 4), default=1)
    parser.add_argument("--count", type=int, default=80)
    parser.add_argument("--proof", required=True, type=Path)
    parser.add_argument("--key", required=True, type=Path)
    parser.add_argument("--proof-url")
    parser.add_argument("--key-url")
    parser.add_argument("--discipline-map", type=Path)
    parser.add_argument("--output", required=True, type=Path)
    args = parser.parse_args()
    try:
        pack = build_pack(args)
    except (OSError, ValueError, json.JSONDecodeError) as exc:
        print(f"ERRO: {exc}", file=sys.stderr)
        return 2
    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text(json.dumps(pack, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Pacote criado: {args.output} ({len(pack['items'])} questões)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
