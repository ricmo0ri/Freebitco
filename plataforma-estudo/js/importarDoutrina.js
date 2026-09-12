// Importação de doutrina em PDF: lê apostilas com texto selecionável e tenta
// dividi-las automaticamente em tópicos — por títulos numerados, quando o PDF
// tem essa estrutura de forma confiável, ou por tamanho de texto quando não
// tem (índice sem estrutura clara, apostila corrida, etc.). Sempre passa pela
// revisão antes de salvar, com título editável e opção de desmarcar tópicos,
// pra não precisar digitar a doutrina matéria por matéria na mão.
var ImportarDoutrina = (function () {
  var els = {};
  var topicosExtraidos = [];

  function lerComoArrayBuffer(file) {
    return new Promise(function (resolve, reject) {
      var reader = new FileReader();
      reader.onload = function () { resolve(reader.result); };
      reader.onerror = function () { reject(reader.error); };
      reader.readAsArrayBuffer(file);
    });
  }

  function extrairLinhas(pdf) {
    var promessas = [];
    for (var p = 1; p <= pdf.numPages; p++) {
      promessas.push(pdf.getPage(p).then(function (page) {
        return page.getTextContent().then(function (content) {
          var linhas = [];
          var atual = '';
          content.items.forEach(function (item) {
            atual += item.str;
            if (item.hasEOL) {
              linhas.push(atual);
              atual = '';
            }
          });
          if (atual) linhas.push(atual);
          return linhas;
        });
      }));
    }
    return Promise.all(promessas).then(function (paginas) {
      var todas = [];
      paginas.forEach(function (linhasPagina) { todas = todas.concat(linhasPagina); });
      return todas;
    });
  }

  function filtrarRuido(linhas) {
    return linhas.filter(function (linha) { return linha.trim().length > 0; });
  }

  // Candidato a título: "1. Conceito", "2.1 Princípios"... Descarta linhas
  // com "..." (típico de sumário com pontilhado antes do número da página).
  var REGEX_TITULO = /^(\d{1,2}(?:\.\d{1,2})?)\.?\s+([A-Za-zÀ-ÿ][^.]{2,80})$/;

  function acharCandidatosTitulo(linhas) {
    var candidatos = [];
    linhas.forEach(function (linha, i) {
      var l = linha.trim();
      if (l.indexOf('...') !== -1) return;
      var m = l.match(REGEX_TITULO);
      if (m) candidatos.push({ index: i, titulo: l.replace(/\.$/, '') });
    });
    return candidatos;
  }

  // Sumários sem pontilhado (só "1 Introdução .... texto seguinte") geram
  // candidatos "falsos" bem próximos uns dos outros (o conteúdo entre eles é
  // curtíssimo, porque na real é só o índice). Medir a proporção de gaps
  // pequenos entre candidatos distingue isso de títulos reais no corpo do texto.
  function calcularProporcaoGapsPequenos(candidatos, linhas) {
    if (candidatos.length < 2) return 1;
    var pequenos = 0;
    for (var i = 0; i < candidatos.length - 1; i++) {
      var trecho = linhas.slice(candidatos[i].index + 1, candidatos[i + 1].index).join(' ');
      if (trecho.trim().length < 80) pequenos++;
    }
    return pequenos / (candidatos.length - 1);
  }

  function dividirPorTitulos(candidatos, linhas) {
    var topicos = [];
    candidatos.forEach(function (c, idx) {
      var fim = idx + 1 < candidatos.length ? candidatos[idx + 1].index : linhas.length;
      var conteudo = linhas.slice(c.index + 1, fim).join(' ').replace(/\s+/g, ' ').trim();
      if (conteudo.length >= 40) {
        topicos.push({ titulo: c.titulo, conteudo: conteudo });
      }
    });
    return topicos;
  }

  var TAMANHO_BLOCO = 1400;

  function dividirPorTamanho(linhas) {
    var textoCompleto = linhas.join(' ').replace(/\s+/g, ' ').trim();
    var topicos = [];
    var pos = 0;
    while (pos < textoCompleto.length) {
      var fim = Math.min(pos + TAMANHO_BLOCO, textoCompleto.length);
      if (fim < textoCompleto.length) {
        var corte = textoCompleto.lastIndexOf('. ', fim);
        if (corte > pos + TAMANHO_BLOCO * 0.5) fim = corte + 1;
      }
      var bloco = textoCompleto.slice(pos, fim).trim();
      if (bloco) {
        var tituloAuto = bloco.length > 70 ? bloco.slice(0, 70).trim() + '…' : bloco;
        topicos.push({ titulo: tituloAuto, conteudo: bloco });
      }
      pos = fim;
    }
    return topicos;
  }

  function extrairTopicos(linhas) {
    var candidatos = acharCandidatosTitulo(linhas);
    var proporcaoPequenos = calcularProporcaoGapsPequenos(candidatos, linhas);
    var confiavel = candidatos.length >= 3 && proporcaoPequenos < 0.3;
    return confiavel ? dividirPorTitulos(candidatos, linhas) : dividirPorTamanho(linhas);
  }

  function processar() {
    var file = els.input.files[0];
    if (!file) {
      els.status.textContent = 'Selecione um PDF.';
      return;
    }
    var disciplinaId = Doutrina.getDisciplinaId();
    if (!disciplinaId) {
      els.status.textContent = 'Abra um território antes de importar.';
      return;
    }

    els.status.textContent = 'Lendo PDF...';
    els.processarBtn.disabled = true;
    els.revisaoPanel.hidden = true;

    lerComoArrayBuffer(file)
      .then(function (buffer) {
        pdfjsLib.GlobalWorkerOptions.workerSrc = 'js/vendor/pdf.worker.min.js';
        return pdfjsLib.getDocument({ data: buffer, disableWorker: true }).promise.then(extrairLinhas);
      })
      .then(function (linhasOriginais) {
        var linhas = filtrarRuido(linhasOriginais);
        topicosExtraidos = extrairTopicos(linhas);

        if (topicosExtraidos.length === 0) {
          els.status.textContent = 'Não consegui identificar texto nesse PDF — pode ser uma apostila escaneada (imagem).';
          return;
        }

        els.status.textContent = topicosExtraidos.length + ' tópicos encontrados. Revise os títulos e o conteúdo antes de importar.';
        renderRevisao();
      })
      .catch(function (erro) {
        els.status.textContent = 'Erro ao processar: ' + erro.message;
      })
      .then(function () {
        els.processarBtn.disabled = false;
      });
  }

  function renderRevisao() {
    els.revisaoLista.innerHTML = '';

    topicosExtraidos.forEach(function (t, idx) {
      var li = document.createElement('li');
      li.className = 'import-dout-item';

      var check = document.createElement('input');
      check.type = 'checkbox';
      check.className = 'import-check';
      check.checked = true;
      check.dataset.idx = String(idx);

      var titulo = document.createElement('input');
      titulo.type = 'text';
      titulo.className = 'import-disciplina import-dout-titulo';
      titulo.value = t.titulo;

      var preview = document.createElement('span');
      preview.className = 'import-preview';
      preview.textContent = t.conteudo.length > 150 ? t.conteudo.slice(0, 150) + '…' : t.conteudo;

      li.appendChild(check);
      li.appendChild(titulo);
      li.appendChild(preview);
      els.revisaoLista.appendChild(li);
    });

    els.revisaoPanel.hidden = false;
  }

  function importarSelecionadas() {
    var disciplinaId = Doutrina.getDisciplinaId();
    if (!disciplinaId) return;

    var itens = Array.prototype.slice.call(els.revisaoLista.querySelectorAll('li'));
    var pendentes = [];

    itens.forEach(function (li) {
      var check = li.querySelector('.import-check');
      if (!check.checked) return;
      var t = topicosExtraidos[parseInt(check.dataset.idx, 10)];
      var titulo = li.querySelector('.import-dout-titulo').value.trim();
      if (!titulo) return;

      pendentes.push(DB.put('doutrinas', {
        id: Storage.makeId(),
        disciplinaId: disciplinaId,
        titulo: titulo,
        tema: '',
        conteudo: t.conteudo,
        createdAt: Storage.todayStr()
      }));
    });

    Promise.all(pendentes).then(function (salvas) {
      els.status.textContent = salvas.length + ' doutrinas importadas.';
      els.revisaoPanel.hidden = true;
      fechar();
      Doutrina.setDisciplina(disciplinaId);
    });
  }

  function abrir() {
    document.getElementById('doutrina-list-view').hidden = true;
    els.view.hidden = false;
  }

  function fechar() {
    els.view.hidden = true;
    document.getElementById('doutrina-list-view').hidden = false;
  }

  function init() {
    els.abrirBtn = document.getElementById('abrir-importar-doutrina-btn');
    els.view = document.getElementById('importar-doutrina-view');
    els.voltarBtn = document.getElementById('importar-doutrina-voltar');
    els.input = document.getElementById('importar-doutrina-input');
    els.processarBtn = document.getElementById('importar-doutrina-processar-btn');
    els.status = document.getElementById('importar-doutrina-status');
    els.revisaoPanel = document.getElementById('importar-doutrina-revisao');
    els.revisaoLista = document.getElementById('importar-doutrina-revisao-lista');
    els.importarBtn = document.getElementById('importar-doutrina-confirmar-btn');

    els.abrirBtn.addEventListener('click', abrir);
    els.voltarBtn.addEventListener('click', fechar);
    els.processarBtn.addEventListener('click', processar);
    els.importarBtn.addEventListener('click', importarSelecionadas);
  }

  return { init: init };
})();
