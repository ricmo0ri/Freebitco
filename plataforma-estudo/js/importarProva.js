// Importação de provas em PDF: lê o texto do PDF da prova e do gabarito
// (com pdf.js, vendorizado localmente — funciona offline, inclusive
// abrindo o index.html direto do disco), tenta separar as questões e
// cruzar com o gabarito para achar a resposta certa. Não classifica por
// disciplina sozinho — isso fica pra tela de revisão, onde cada questão
// pode ser incluída/excluída e receber um território antes de salvar.
var ImportarProva = (function () {
  var els = {};
  var questoesExtraidas = [];

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
    return linhas.filter(function (linha) {
      var l = linha.trim();
      if (!l) return false;
      if (/EXAME.*UNIFICADO/i.test(l)) return false;
      if (/Tipo\s+\S+\s*[-–]\s*P[aá]gina/i.test(l)) return false;
      return true;
    });
  }

  function detectarTipo(linhas) {
    var textoInicial = linhas.slice(0, 40).join(' ');
    var m = textoInicial.match(/TIPO\s*(\d)\s*[-–]\s*([A-ZÀ-Ú]+)/i);
    return m ? { numero: m[1], cor: m[2] } : { numero: '1', cor: '' };
  }

  function parseProva(linhas) {
    var candidatos = [];
    linhas.forEach(function (linha, i) {
      var m = linha.trim().match(/^(\d{1,2})$/);
      if (m) candidatos.push({ index: i, numero: parseInt(m[1], 10) });
    });

    var inicios = [];
    var esperado = 1;
    candidatos.forEach(function (c) {
      if (c.numero === esperado) {
        inicios.push(c);
        esperado++;
      }
    });

    var questoes = [];
    inicios.forEach(function (inicio, idx) {
      var fim = idx + 1 < inicios.length ? inicios[idx + 1].index : linhas.length;
      var blocoTexto = linhas.slice(inicio.index + 1, fim).join('\n');
      var partes = blocoTexto.split(/\n?\(([A-E])\)\s*/);

      var enunciado = partes[0].replace(/\s*\n\s*/g, ' ').trim();
      var alternativas = [];
      for (var i = 1; i < partes.length; i += 2) {
        var texto = (partes[i + 1] || '').replace(/\s*\n\s*/g, ' ').trim();
        if (texto) alternativas.push({ letra: partes[i], texto: texto });
      }

      if (enunciado && alternativas.length >= 2) {
        questoes.push({ numero: inicio.numero, enunciado: enunciado, alternativas: alternativas });
      }
    });

    return questoes;
  }

  function parseGabarito(linhas, tipoNumero) {
    var texto = linhas.join('\n');
    var inicioMatch = new RegExp('PROVA\\s*TIPO\\s*' + tipoNumero + '\\b', 'i').exec(texto);
    if (!inicioMatch) return [];
    var resto = texto.slice(inicioMatch.index + inicioMatch[0].length);
    var fimMatch = /PROVA\s*TIPO\s*\d/i.exec(resto);
    var bloco = fimMatch ? resto.slice(0, fimMatch.index) : resto;
    return (bloco.match(/\b[A-E]\b/g) || []).slice(0, 80);
  }

  function combinar(questoesProva, gabaritoLetras) {
    return questoesProva.map(function (q) {
      var letraCorreta = gabaritoLetras[q.numero - 1];
      var respostaCorreta = -1;
      q.alternativas.forEach(function (alt, i) { if (alt.letra === letraCorreta) respostaCorreta = i; });
      return {
        numero: q.numero,
        enunciado: q.enunciado,
        alternativas: q.alternativas,
        respostaCorreta: respostaCorreta,
        letraCorreta: letraCorreta || '?'
      };
    });
  }

  function processar() {
    var provaFile = els.provaInput.files[0];
    var gabaritoFile = els.gabaritoInput.files[0];
    if (!provaFile || !gabaritoFile) {
      els.status.textContent = 'Selecione os dois arquivos (prova e gabarito).';
      return;
    }

    els.status.textContent = 'Lendo PDFs...';
    els.processarBtn.disabled = true;
    els.revisaoPanel.hidden = true;

    Promise.all([lerComoArrayBuffer(provaFile), lerComoArrayBuffer(gabaritoFile)])
      .then(function (buffers) {
        pdfjsLib.GlobalWorkerOptions.workerSrc = 'js/vendor/pdf.worker.min.js';
        return Promise.all([
          pdfjsLib.getDocument({ data: buffers[0], disableWorker: true }).promise.then(extrairLinhas),
          pdfjsLib.getDocument({ data: buffers[1], disableWorker: true }).promise.then(extrairLinhas)
        ]);
      })
      .then(function (resultados) {
        var linhasProvaOriginais = resultados[0];
        var linhasGabarito = resultados[1];

        var tipoDetectado = detectarTipo(linhasProvaOriginais);
        els.tipoInput.value = tipoDetectado.numero;

        var linhasProva = filtrarRuido(linhasProvaOriginais);
        var questoesProva = parseProva(linhasProva);

        if (questoesProva.length === 0) {
          els.status.textContent = 'Não consegui identificar questões nesse PDF — o formato pode ser diferente do esperado, ou é uma prova escaneada (imagem).';
          return;
        }

        var gabaritoLetras = parseGabarito(linhasGabarito, els.tipoInput.value.trim() || tipoDetectado.numero);
        if (gabaritoLetras.length === 0) {
          els.status.textContent = 'Não achei o gabarito do Tipo ' + els.tipoInput.value + ' nesse PDF. Confira o número do tipo.';
          return;
        }

        questoesExtraidas = combinar(questoesProva, gabaritoLetras);
        var semGabarito = questoesExtraidas.filter(function (q) { return q.respostaCorreta < 0; }).length;

        els.status.textContent = questoesExtraidas.length + ' questões encontradas (Tipo ' + tipoDetectado.numero +
          (tipoDetectado.cor ? ' - ' + tipoDetectado.cor : '') + ').' +
          (semGabarito ? ' ' + semGabarito + ' ficaram sem resposta identificada e vêm desmarcadas.' : '') +
          ' Revise abaixo antes de importar.';
        els.provaOrigemInput.value = '46º Exame de Ordem - Tipo ' + (els.tipoInput.value.trim() || tipoDetectado.numero);

        return renderRevisao();
      })
      .catch(function (erro) {
        els.status.textContent = 'Erro ao processar: ' + erro.message;
      })
      .then(function () {
        els.processarBtn.disabled = false;
      });
  }

  function renderRevisao() {
    return DB.getAll('disciplinas').then(function (disciplinas) {
      els.revisaoLista.innerHTML = '';

      questoesExtraidas.forEach(function (q, idx) {
        var li = document.createElement('li');

        var check = document.createElement('input');
        check.type = 'checkbox';
        check.className = 'import-check';
        check.checked = q.respostaCorreta >= 0;
        check.dataset.idx = String(idx);

        var numero = document.createElement('span');
        numero.className = 'import-numero';
        numero.textContent = '#' + q.numero;

        var preview = document.createElement('span');
        preview.className = 'import-preview';
        preview.textContent = q.enunciado.length > 100 ? q.enunciado.slice(0, 100) + '…' : q.enunciado;

        var correta = document.createElement('span');
        correta.className = 'import-correta';
        correta.textContent = q.respostaCorreta >= 0 ? ('Correta: ' + q.letraCorreta) : '⚠️ sem gabarito';

        var select = document.createElement('select');
        select.className = 'import-disciplina';
        var optPadrao = document.createElement('option');
        optPadrao.value = '';
        optPadrao.textContent = '— escolher território —';
        select.appendChild(optPadrao);
        disciplinas.forEach(function (d) {
          var opt = document.createElement('option');
          opt.value = d.id;
          opt.textContent = (d.icone || '📖') + ' ' + (d.territorio || d.nome);
          select.appendChild(opt);
        });

        li.appendChild(check);
        li.appendChild(numero);
        li.appendChild(preview);
        li.appendChild(correta);
        li.appendChild(select);
        els.revisaoLista.appendChild(li);
      });

      els.revisaoPanel.hidden = false;
    });
  }

  function importarSelecionadas() {
    var linhas = Array.prototype.slice.call(els.revisaoLista.querySelectorAll('li'));
    var provaOrigem = els.provaOrigemInput.value.trim();
    var pendentes = [];
    var puladasSemTerritorio = 0;

    linhas.forEach(function (li) {
      var check = li.querySelector('.import-check');
      if (!check.checked) return;
      var q = questoesExtraidas[parseInt(check.dataset.idx, 10)];
      if (q.respostaCorreta < 0) return;

      var disciplinaId = li.querySelector('.import-disciplina').value;
      if (!disciplinaId) { puladasSemTerritorio++; return; }

      pendentes.push(DB.put('questoes', {
        id: Storage.makeId(),
        disciplinaId: disciplinaId,
        provaOrigem: provaOrigem,
        tema: '',
        dificuldade: 'media',
        enunciado: q.enunciado,
        alternativas: q.alternativas,
        respostaCorreta: q.respostaCorreta,
        explicacaoCorreta: '',
        explicacaoErradas: '',
        pegadinha: '',
        regraMemoria: '',
        casoAbsurdo: ''
      }));
    });

    Promise.all(pendentes).then(function () {
      els.status.textContent = pendentes.length + ' questões importadas.' +
        (puladasSemTerritorio ? ' ' + puladasSemTerritorio + ' puladas por falta de território escolhido.' : '');
      els.revisaoPanel.hidden = true;
      if (window.Missao) Missao.renderTerritorios();
    });
  }

  function abrir() {
    document.getElementById('disciplinas-list-view').hidden = true;
    els.view.hidden = false;
  }

  function fechar() {
    els.view.hidden = true;
    document.getElementById('disciplinas-list-view').hidden = false;
  }

  function init() {
    els.abrirBtn = document.getElementById('abrir-importar-prova-btn');
    els.view = document.getElementById('importar-prova-view');
    els.voltarBtn = document.getElementById('importar-prova-voltar');
    els.provaInput = document.getElementById('importar-prova-input');
    els.gabaritoInput = document.getElementById('importar-gabarito-input');
    els.tipoInput = document.getElementById('importar-tipo-input');
    els.processarBtn = document.getElementById('importar-processar-btn');
    els.status = document.getElementById('importar-status');
    els.revisaoPanel = document.getElementById('importar-revisao');
    els.revisaoLista = document.getElementById('importar-revisao-lista');
    els.provaOrigemInput = document.getElementById('importar-prova-origem');
    els.importarBtn = document.getElementById('importar-confirmar-btn');

    els.abrirBtn.addEventListener('click', abrir);
    els.voltarBtn.addEventListener('click', fechar);
    els.processarBtn.addEventListener('click', processar);
    els.importarBtn.addEventListener('click', importarSelecionadas);
  }

  return { init: init };
})();
