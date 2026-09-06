// Lei seca: treino de reconhecimento da redação literal de dispositivos
// legais, no formato "qual das redações abaixo é a literal" — a banca da
// OAB adora trocar uma palavra/prazo/verbo da lei para confundir, então
// treinar exatamente esse "olho" é o complemento natural das questões de
// aplicação de caso concreto. Reaproveita o QuestaoCard (mesmo visual e
// atalhos de teclado das outras telas de questão).
var LeiSeca = (function () {
  var els = {};
  var disciplinaId = null;
  var fila = [];
  var indice = 0;
  var atual = null; // { item, questao, corretaIndex }
  var sessao = { respondidas: 0, acertos: 0 };

  function embaralhar(array) {
    var copia = array.slice();
    for (var i = copia.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = copia[i]; copia[i] = copia[j]; copia[j] = tmp;
    }
    return copia;
  }

  function carregarItens() {
    if (!disciplinaId) return Promise.resolve([]);
    return DB.getAllByIndex('leiSeca', 'disciplinaId', disciplinaId);
  }

  // Monta um objeto no formato que o QuestaoCard já sabe renderizar,
  // embaralhando as 3 redações (1 literal + 2 variações) a cada rodada.
  function montarQuestao(item) {
    var opcoes = embaralhar([
      { texto: item.textoCorreto, correta: true },
      { texto: item.versaoErrada1, correta: false },
      { texto: item.versaoErrada2, correta: false }
    ]);
    var corretaIndex = -1;
    var alternativas = opcoes.map(function (op, i) {
      if (op.correta) corretaIndex = i;
      return { letra: String.fromCharCode(65 + i), texto: op.texto };
    });

    return {
      casoAbsurdo: '',
      tema: item.dispositivo,
      provaOrigem: item.lei,
      enunciado: 'Qual das redações abaixo corresponde ao texto literal do dispositivo indicado?',
      alternativas: alternativas,
      respostaCorreta: corretaIndex,
      explicacaoCorreta: 'Essa é a redação literal do dispositivo.',
      explicacaoErradas: item.explicacaoDiferenca,
      pegadinha: '',
      regraMemoria: item.regraMemoria
    };
  }

  function refs() {
    return {
      casoAbsurdo: els.caso,
      origem: els.origem,
      enunciado: els.enunciado,
      altList: els.altList,
      confirmBtn: els.confirmBtn,
      feedback: els.feedback,
      metodo: els.metodo
    };
  }

  function atualizarProgresso() {
    if (!els.progresso) return;
    if (fila.length === 0) { els.progresso.textContent = ''; return; }
    var pct = sessao.respondidas ? Math.round((sessao.acertos / sessao.respondidas) * 100) : 0;
    els.progresso.textContent = 'Dispositivo ' + (indice + 1) + ' de ' + fila.length +
      ' · ' + sessao.respondidas + ' respondidos nesta sessão (' + pct + '% de acerto)';
  }

  function renderAtual() {
    if (fila.length === 0) {
      els.empty.hidden = false;
      els.card.hidden = true;
      atualizarProgresso();
      return;
    }

    els.empty.hidden = true;
    els.card.hidden = false;
    els.proximaBtn.hidden = true;

    var item = fila[indice];
    var questao = montarQuestao(item);
    atual = { item: item, questao: questao };

    QuestaoCard.render(refs(), questao, function (i) {
      atual.selecionado = i;
      els.confirmBtn.disabled = false;
    });

    atualizarProgresso();
  }

  function confirmar() {
    if (!atual || atual.selecionado === undefined || atual.selecionado === null) return;
    var acertou = atual.selecionado === atual.questao.respostaCorreta;

    sessao.respondidas += 1;
    if (acertou) sessao.acertos += 1;

    var respostas = Storage.read(Storage.KEYS.leiSecaRespostas, []);
    respostas.push({
      date: Storage.todayStr(),
      disciplinaId: disciplinaId,
      dispositivo: atual.item.dispositivo,
      acertou: acertou
    });
    Storage.write(Storage.KEYS.leiSecaRespostas, respostas);
    Storage.recordActivity();

    QuestaoCard.showFeedback(refs(), atual.questao, atual.selecionado, false);
    els.proximaBtn.hidden = false;
    atualizarProgresso();
  }

  function proximo() {
    indice += 1;
    if (indice >= fila.length) {
      fila = embaralhar(fila);
      indice = 0;
    }
    renderAtual();
  }

  function setDisciplina(id) {
    disciplinaId = id;
    sessao = { respondidas: 0, acertos: 0 };
    carregarItens().then(function (itens) {
      fila = embaralhar(itens);
      indice = 0;
      renderAtual();
    });
  }

  function init() {
    els.empty = document.getElementById('leiseca-empty');
    els.card = document.getElementById('leiseca-card');
    els.caso = document.getElementById('leiseca-caso');
    els.origem = document.getElementById('leiseca-origem');
    els.enunciado = document.getElementById('leiseca-enunciado');
    els.altList = document.getElementById('leiseca-alternativas');
    els.confirmBtn = document.getElementById('leiseca-confirmar');
    els.feedback = document.getElementById('leiseca-feedback');
    els.metodo = document.getElementById('leiseca-metodo');
    els.proximaBtn = document.getElementById('leiseca-proxima');
    els.progresso = document.getElementById('leiseca-progresso');

    els.confirmBtn.addEventListener('click', confirmar);
    els.proximaBtn.addEventListener('click', proximo);
  }

  return { init: init, setDisciplina: setDisciplina };
})();
