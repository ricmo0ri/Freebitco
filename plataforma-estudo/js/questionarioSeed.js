// Questionário inédito: questões originais, no estilo FGV (enunciado +
// A/B/C/D), nível médio/difícil, pensadas a partir do que tende a cair no
// 48º Exame — não são tiradas de provas reais (isso já existe em
// questoesSeed.js). Mesmo padrão de seed versionado e idempotente dos outros
// bancos: reconcilia por território+enunciado, respeita correcaoManual e
// explicacaoManual, e remove quem sair da lista (ex.: questão trocada por
// ficar desatualizada).
var QuestionarioSeed = (function () {
  var SEED_VERSION_ATUAL = 1;
  var PROVA_ORIGEM = 'Questionário Inédito — Preparação 48º Exame';

  var QUESTOES = [
    {
      "territorio": "Ética",
      "tema": "Teste de integração",
      "dificuldade": "media",
      "enunciado": "Questão de teste — será substituída pelo conteúdo real.",
      "alternativas": [
        { "letra": "A", "texto": "Alternativa A" },
        { "letra": "B", "texto": "Alternativa B" },
        { "letra": "C", "texto": "Alternativa C" },
        { "letra": "D", "texto": "Alternativa D" }
      ],
      "respostaCorreta": 0,
      "explicacaoCorreta": "Texto de teste.",
      "explicacaoErradas": "Texto de teste.",
      "pegadinha": "Texto de teste.",
      "regraMemoria": "Texto de teste.",
      "seedVersion": 1
    }
  ];

  function atualizarConteudoPedagogico() {
    return DB.getAll('questionario').then(function (existentes) {
      var porChave = {};
      existentes.forEach(function (r) {
        porChave[r.provaOrigem + '::' + r.enunciado] = r;
      });

      var atualizacoes = [];
      QUESTOES.forEach(function (q) {
        var existente = porChave[PROVA_ORIGEM + '::' + q.enunciado];
        if (!existente) return;
        var mudou = false;

        var explicacaoManual = existente.explicacaoManual || {};
        if (typeof explicacaoManual.explicacaoCorreta !== 'string' &&
            q.explicacaoCorreta && q.explicacaoCorreta !== existente.explicacaoCorreta) {
          existente.explicacaoCorreta = q.explicacaoCorreta;
          mudou = true;
        }
        if (typeof explicacaoManual.explicacaoErradas !== 'string' &&
            q.explicacaoErradas && q.explicacaoErradas !== existente.explicacaoErradas) {
          existente.explicacaoErradas = q.explicacaoErradas;
          mudou = true;
        }
        if (q.pegadinha && q.pegadinha !== existente.pegadinha) {
          existente.pegadinha = q.pegadinha;
          mudou = true;
        }
        if (q.regraMemoria && q.regraMemoria !== existente.regraMemoria) {
          existente.regraMemoria = q.regraMemoria;
          mudou = true;
        }
        if (q.tema && q.tema !== existente.tema) {
          existente.tema = q.tema;
          mudou = true;
        }
        if (!existente.correcaoManual && typeof q.respostaCorreta === 'number' && q.respostaCorreta !== existente.respostaCorreta) {
          existente.respostaCorreta = q.respostaCorreta;
          mudou = true;
        }
        if (mudou) atualizacoes.push(DB.put('questionario', existente));
      });

      // Remove questões que saíram da lista (ex.: substituídas por ficarem
      // desatualizadas ou por pedido do usuário).
      var chavesValidas = {};
      QUESTOES.forEach(function (q) {
        chavesValidas[PROVA_ORIGEM + '::' + q.enunciado] = true;
      });
      existentes.forEach(function (r) {
        var chave = r.provaOrigem + '::' + r.enunciado;
        if (!chavesValidas[chave]) atualizacoes.push(DB.remove('questionario', r.id));
      });

      return Promise.all(atualizacoes);
    });
  }

  function seedar() {
    var versaoAplicada = Storage.read(Storage.KEYS.questionarioSeedVersion, 0);
    if (versaoAplicada >= SEED_VERSION_ATUAL) return Promise.resolve();

    return DB.getAll('disciplinas').then(function (disciplinas) {
      var idPorNome = {};
      disciplinas.forEach(function (d) { idPorNome[d.nome] = d.id; });

      var pendentes = [];
      QUESTOES.forEach(function (q) {
        if (q.seedVersion <= versaoAplicada) return;
        var disciplinaId = idPorNome[q.territorio];
        if (!disciplinaId) return;
        pendentes.push(DB.put('questionario', {
          id: Storage.makeId(),
          disciplinaId: disciplinaId,
          provaOrigem: PROVA_ORIGEM,
          tema: q.tema || '',
          dificuldade: q.dificuldade || 'media',
          enunciado: q.enunciado,
          alternativas: q.alternativas,
          respostaCorreta: q.respostaCorreta,
          explicacaoCorreta: q.explicacaoCorreta || '',
          explicacaoErradas: q.explicacaoErradas || '',
          pegadinha: q.pegadinha || '',
          regraMemoria: q.regraMemoria || '',
          casoAbsurdo: ''
        }));
      });

      return Promise.all(pendentes).then(function () {
        return atualizarConteudoPedagogico();
      }).then(function () {
        Storage.write(Storage.KEYS.questionarioSeedVersion, SEED_VERSION_ATUAL);
      });
    });
  }

  return { seedar: seedar };
})();
