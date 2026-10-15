// Questionário inédito estilo FGV: questões originais (não tiradas de provas
// reais), em nível médio/difícil, pensadas no que pode cair no 48º Exame.
// Reaproveita o QuestaoCard (mesmo visual) e o XP/Fraquezas do Missao, mas
// fica num banco separado (store 'questionario') pra não se misturar com o
// banco de questões de provas reais usado pela Missão e pelos Chefões.
var Questionario = (function () {
  var els = {};
  var disciplinaId = null;
  var todasQuestoes = [];
  var fila = [];
  var indice = 0;
  var atual = null;
  var sessao = { respondidas: 0, acertos: 0, xpTotal: 0 };

  function embaralhar(array) {
    var copia = array.slice();
    for (var i = copia.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = copia[i]; copia[i] = copia[j]; copia[j] = tmp;
    }
    return copia;
  }

  function carregarQuestoes() {
    if (!disciplinaId) return Promise.resolve([]);
    return DB.getAllByIndex('questionario', 'disciplinaId', disciplinaId);
  }

  function agruparPorTema(itens) {
    var contagem = {};
    itens.forEach(function (item) {
      var t = item.tema || 'Geral';
      contagem[t] = (contagem[t] || 0) + 1;
    });
    return Object.keys(contagem).sort().map(function (t) {
      return { tema: t, total: contagem[t] };
    });
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
    els.progresso.textContent = 'Questão ' + (indice + 1) + ' de ' + fila.length +
      ' · ' + sessao.respondidas + ' respondidas nesta sessão (' + pct + '% de acerto)';
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

    var questao = fila[indice];
    atual = { questao: questao, selecionado: null };

    QuestaoCard.render(refs(), questao, function (i) {
      atual.selecionado = i;
      els.confirmBtn.disabled = false;
    });

    atualizarProgresso();
  }

  function confirmar() {
    if (!atual || atual.selecionado === null || atual.selecionado === undefined) return;
    var questao = atual.questao;
    var acertou = atual.selecionado === QuestaoCard.respostaCorreta(questao);
    var resultado = Missao.calcularXp(questao, acertou);
    Missao.registrarResposta(questao, acertou, resultado);

    sessao.respondidas += 1;
    if (acertou) sessao.acertos += 1;
    sessao.xpTotal += resultado.xp;

    QuestaoCard.showFeedback(refs(), questao, atual.selecionado, resultado.critico);
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

  function renderPicker() {
    if (!els.picker) return;
    els.pickerLista.innerHTML = '';

    if (todasQuestoes.length === 0) {
      els.picker.hidden = true;
      els.empty.hidden = false;
      els.card.hidden = true;
      if (els.progresso) els.progresso.textContent = '';
      return;
    }

    els.empty.hidden = true;
    els.card.hidden = true;
    els.picker.hidden = false;
    if (els.progresso) els.progresso.textContent = '';

    var btnTodos = document.createElement('button');
    btnTodos.type = 'button';
    btnTodos.className = 'tema-btn';
    btnTodos.textContent = '🎯 Todos os assuntos (' + todasQuestoes.length + ')';
    btnTodos.addEventListener('click', function () { iniciarPratica(null); });
    els.pickerLista.appendChild(btnTodos);

    agruparPorTema(todasQuestoes).forEach(function (grupo) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'tema-btn';
      btn.textContent = grupo.tema + ' (' + grupo.total + ')';
      btn.addEventListener('click', function () { iniciarPratica(grupo.tema); });
      els.pickerLista.appendChild(btn);
    });
  }

  function iniciarPratica(tema) {
    var itens = tema
      ? todasQuestoes.filter(function (q) { return (q.tema || 'Geral') === tema; })
      : todasQuestoes;

    sessao = { respondidas: 0, acertos: 0, xpTotal: 0 };
    fila = embaralhar(itens);
    indice = 0;

    els.picker.hidden = true;
    if (els.trocarBtn) els.trocarBtn.hidden = false;
    renderAtual();
  }

  function voltarParaEscolha() {
    if (els.trocarBtn) els.trocarBtn.hidden = true;
    els.card.hidden = true;
    renderPicker();
  }

  function setDisciplina(id) {
    disciplinaId = id;
    if (els.trocarBtn) els.trocarBtn.hidden = true;
    carregarQuestoes().then(function (itens) {
      todasQuestoes = itens;
      renderPicker();
    });
  }

  function init() {
    els.empty = document.getElementById('questionario-empty');
    els.card = document.getElementById('questionario-card');
    els.caso = document.getElementById('questionario-caso');
    els.origem = document.getElementById('questionario-origem');
    els.enunciado = document.getElementById('questionario-enunciado');
    els.altList = document.getElementById('questionario-alternativas');
    els.confirmBtn = document.getElementById('questionario-confirmar');
    els.feedback = document.getElementById('questionario-feedback');
    els.metodo = document.getElementById('questionario-metodo');
    els.proximaBtn = document.getElementById('questionario-proxima');
    els.progresso = document.getElementById('questionario-progresso');
    els.picker = document.getElementById('questionario-picker');
    els.pickerLista = document.getElementById('questionario-tema-lista');
    els.trocarBtn = document.getElementById('questionario-trocar-assunto');

    els.confirmBtn.addEventListener('click', confirmar);
    els.proximaBtn.addEventListener('click', proximo);
    if (els.trocarBtn) els.trocarBtn.addEventListener('click', voltarParaEscolha);
  }

  return { init: init, setDisciplina: setDisciplina };
})();
