// Missões: a barreira de início vira "responda uma questão", missões
// escalam com o tempo disponível, chefões e fraquezas priorizam o que
// aparece, e cada acerto/erro vira XP e feedback imediato.
var Missao = (function () {
  var MINUTOS_PARA_QUESTOES = { 3: 1, 10: 3, 25: 6, 50: 10, 90: 15 };

  var els = {};
  var sessao = null; // estado da missão em andamento
  var preguicaAtual = null; // {questao, selecionado}

  // ---------- utilidades de seleção ----------

  function priorizarQuestoes(questoes, quantidade) {
    if (questoes.length === 0) return [];
    var fracos = Fraquezas.getTemasFracos();
    var fracosSet = {};
    fracos.forEach(function (f) { fracosSet[f.disciplinaId + '::' + f.tema] = true; });

    var pesadas = [];
    questoes.forEach(function (q) {
      var chave = q.disciplinaId + '::' + (q.tema || 'Geral');
      var peso = fracosSet[chave] ? 3 : 1;
      for (var i = 0; i < peso; i++) pesadas.push(q);
    });

    for (var i = pesadas.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = pesadas[i]; pesadas[i] = pesadas[j]; pesadas[j] = tmp;
    }

    var vistos = {};
    var resultado = [];
    pesadas.forEach(function (q) {
      if (resultado.length >= quantidade || vistos[q.id]) return;
      vistos[q.id] = true;
      resultado.push(q);
    });

    var i2 = 0;
    while (resultado.length < quantidade && questoes.length > 0 && i2 < 200) {
      resultado.push(questoes[i2 % questoes.length]);
      i2++;
    }
    return resultado;
  }

  function jaErrouAntes(questaoId) {
    var respostas = Storage.read(Storage.KEYS.questaoRespostas, []);
    return respostas.some(function (r) { return r.questaoId === questaoId && !r.acertou; });
  }

  var CHANCE_GOLPE_CRITICO = 0.15; // recompensa variável: XP incerto motiva mais que XP fixo

  function calcularXp(questao, acertou) {
    if (!acertou) return { xp: 0, critico: false };
    var base = jaErrouAntes(questao.id) ? 25 : (questao.dificuldade === 'dificil' ? 20 : 10);
    var critico = Math.random() < CHANCE_GOLPE_CRITICO;
    return { xp: critico ? base * 2 : base, critico: critico };
  }

  function registrarResposta(questao, acertou, resultado) {
    var respostas = Storage.read(Storage.KEYS.questaoRespostas, []);
    respostas.push({
      date: Storage.todayStr(),
      questaoId: questao.id,
      disciplinaId: questao.disciplinaId,
      tema: questao.tema || 'Geral',
      dificuldade: questao.dificuldade || 'media',
      acertou: acertou,
      xp: resultado.xp,
      critico: resultado.critico
    });
    Storage.write(Storage.KEYS.questaoRespostas, respostas);
    Storage.recordActivity();
    if (resultado.xp > 0) Perfil.addXp(resultado.xp);
    if (window.Progress) Progress.refresh();
    if (window.App) App.refreshStreakBadge();
  }

  // ---------- renderização do território picker ----------

  function renderTerritorios() {
    return DB.getAll('disciplinas').then(function (disciplinas) {
      els.territoriosList.innerHTML = '';
      if (disciplinas.length === 0) {
        var vazio = document.createElement('p');
        vazio.className = 'empty-state';
        vazio.textContent = 'Nenhum território ainda. Crie uma disciplina na aba Território.';
        els.territoriosList.appendChild(vazio);
        return;
      }
      disciplinas.forEach(function (d) {
        var status = Fraquezas.getStatusPorTema(d.id);
        var temFraco = status.some(function (s) { return s.status === 'critico' || s.status === 'fraco'; });
        var dominado = status.length > 0 && status.every(function (s) { return s.status === 'dominado'; });

        var li = document.createElement('li');
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'item-text territorio-pick-btn';

        var medalha = document.createElement('span');
        medalha.className = 'icon-medalha';
        medalha.textContent = d.icone || '📖';
        if (d.cor) medalha.style.setProperty('--accent-territorio', d.cor);
        var dot = temFraco ? ' 🔴' : (dominado ? ' 🟢' : '');
        var label = document.createElement('span');
        label.textContent = (d.territorio || d.nome) + dot;
        btn.appendChild(medalha);
        btn.appendChild(label);

        btn.addEventListener('click', function () { iniciarMissao(d.id, d.territorio || d.nome); });
        li.appendChild(btn);
        els.territoriosList.appendChild(li);
      });
    });
  }

  // ---------- missão principal ----------

  function iniciarMissao(disciplinaId, label) {
    var carregar = disciplinaId ? DB.getAllByIndex('questoes', 'disciplinaId', disciplinaId) : DB.getAll('questoes');

    carregar.then(function (questoes) {
      if (questoes.length === 0) {
        alert('Ainda não há questões cadastradas aí. Adicione algumas na aba Território antes de encarar essa missão.');
        return;
      }

      var minutos = Timer.getSelectedMinutes();
      var quantidade = MINUTOS_PARA_QUESTOES[minutos] || 6;
      var fila = priorizarQuestoes(questoes, quantidade);

      sessao = {
        label: label,
        fila: fila,
        indice: 0,
        combo: 0,
        xpTotal: 0,
        acertos: 0,
        respondidas: 0,
        disciplinasTocadas: {},
        pegadinhaAprendida: null,
        selecionado: null
      };

      els.picker.hidden = true;
      els.relatorio.hidden = true;
      els.battle.hidden = false;
      renderQuestaoAtual();
    });
  }

  function refsMissao() {
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

  function renderQuestaoAtual() {
    if (!sessao || sessao.indice >= sessao.fila.length) {
      finalizarMissao();
      return;
    }
    var questao = sessao.fila[sessao.indice];
    sessao.selecionado = null;
    els.progresso.textContent = 'Questão ' + (sessao.indice + 1) + ' de ' + sessao.fila.length + ' — ' + sessao.label;
    els.proximaBtn.hidden = true;

    QuestaoCard.render(refsMissao(), questao, function (i) {
      sessao.selecionado = i;
      els.confirmBtn.disabled = false;
    });

    els.confirmBtn.onclick = function () { confirmarQuestaoAtual(questao); };
    els.proximaBtn.onclick = function () {
      sessao.indice += 1;
      renderQuestaoAtual();
    };

    updateComboBadge();
  }

  function confirmarQuestaoAtual(questao) {
    if (sessao.selecionado === null) return;
    var acertou = sessao.selecionado === questao.respostaCorreta;
    var resultado = calcularXp(questao, acertou);

    registrarResposta(questao, acertou, resultado);

    sessao.xpTotal += resultado.xp;
    sessao.respondidas += 1;
    sessao.combo = acertou ? sessao.combo + 1 : 0;
    if (acertou) sessao.acertos += 1;
    sessao.disciplinasTocadas[questao.disciplinaId] = true;
    if (!acertou && questao.pegadinha && !sessao.pegadinhaAprendida) {
      sessao.pegadinhaAprendida = questao.pegadinha;
    }

    QuestaoCard.showFeedback(refsMissao(), questao, sessao.selecionado, resultado.critico);
    els.proximaBtn.hidden = false;
    updateComboBadge();
  }

  function updateComboBadge() {
    var combo = sessao ? sessao.combo : 0;
    if (combo >= 10) {
      els.combo.hidden = false;
      els.combo.textContent = '☠️ MODO ADVOGADO IMPLACÁVEL — combo x' + combo;
    } else if (combo >= 5) {
      els.combo.hidden = false;
      els.combo.textContent = '🔥🔥 COMBO x' + combo;
    } else if (combo >= 3) {
      els.combo.hidden = false;
      els.combo.textContent = '🔥 COMBO x' + combo;
    } else {
      els.combo.hidden = true;
    }
  }

  function encerrarMissaoAgora() {
    if (!sessao) return;
    finalizarMissao();
  }

  function finalizarMissao() {
    var bonusConclusao = 0;
    var numRespondidas = sessao.respondidas;
    if (numRespondidas > 0) {
      bonusConclusao = 50;
      Perfil.addXp(bonusConclusao);
    }

    var aproveitamento = numRespondidas > 0 ? Math.round((sessao.acertos / numRespondidas) * 100) : 0;
    var resumo = Fraquezas.getResumoGeral();

    var itens = [];
    itens.push('🏆 XP ganho: ' + (sessao.xpTotal + bonusConclusao));
    itens.push('📚 Território: ' + sessao.label);
    itens.push('🎯 Questões respondidas: ' + numRespondidas);
    itens.push('📈 Aproveitamento: ' + aproveitamento + '%');
    itens.push('🔴 Principal fraqueza: ' + (resumo.maisFraco ? resumo.maisFraco.tema + ' (' + resumo.maisFraco.pct + '%)' : 'nenhuma detectada ainda'));
    itens.push('🟢 Principal evolução: ' + (resumo.maisForte ? resumo.maisForte.tema + ' (' + resumo.maisForte.pct + '%)' : 'continue respondendo para revelar'));
    itens.push('⚠️ Pegadinha aprendida: ' + (sessao.pegadinhaAprendida || 'nenhuma armadilha nova desta vez'));
    itens.push('🔥 Próxima missão: ' + (resumo.maisFraco ? 'ataque o tema "' + resumo.maisFraco.tema + '"' : 'escolha qualquer território e continue'));

    els.relatorioConteudo.innerHTML = '';
    itens.forEach(function (texto) {
      var li = document.createElement('li');
      li.textContent = texto;
      els.relatorioConteudo.appendChild(li);
    });

    els.battle.hidden = true;
    els.relatorio.hidden = false;
    sessao = null;
  }

  function voltarParaPicker() {
    els.relatorio.hidden = true;
    els.battle.hidden = true;
    els.picker.hidden = false;
    renderTerritorios();
  }

  // ---------- modo preguiça ----------

  function refsPreguica() {
    return {
      casoAbsurdo: els.pCaso,
      origem: els.pOrigem,
      enunciado: els.pEnunciado,
      altList: els.pAltList,
      confirmBtn: els.pConfirmBtn,
      feedback: els.pFeedback,
      metodo: els.pMetodo
    };
  }

  function iniciarModoPreguica() {
    DB.getAll('questoes').then(function (questoes) {
      if (questoes.length === 0) {
        alert('Ainda não há nenhuma questão cadastrada em nenhum território. Adicione ao menos uma para o Modo Preguiça funcionar.');
        return;
      }
      els.picker.hidden = true;
      els.battle.hidden = true;
      els.relatorio.hidden = true;
      els.preguicaPanel.hidden = false;
      proximaQuestaoPreguica(questoes);
    });
  }

  function proximaQuestaoPreguica(questoes) {
    var questao = priorizarQuestoes(questoes, 1)[0];
    preguicaAtual = { questao: questao, selecionado: null };

    els.pContinuar.hidden = true;
    els.pConfirmBtn.hidden = false;

    QuestaoCard.render(refsPreguica(), questao, function (i) {
      preguicaAtual.selecionado = i;
      els.pConfirmBtn.disabled = false;
    });

    els.pConfirmBtn.onclick = function () { confirmarPreguica(questoes); };
  }

  function confirmarPreguica(questoes) {
    if (preguicaAtual.selecionado === null) return;
    var questao = preguicaAtual.questao;
    var acertou = preguicaAtual.selecionado === questao.respostaCorreta;
    var xp = calcularXp(questao, acertou);
    registrarResposta(questao, acertou, xp);

    QuestaoCard.showFeedback(refsPreguica(), questao, preguicaAtual.selecionado);
    els.pContinuar.hidden = false;

    els.pSimBtn.onclick = function () { proximaQuestaoPreguica(questoes); };
    els.pNaoBtn.onclick = function () {
      els.preguicaPanel.hidden = true;
      els.picker.hidden = false;
      renderTerritorios();
    };
  }

  function init() {
    els.picker = document.getElementById('missao-picker');
    els.territoriosList = document.getElementById('missao-territorios-list');
    els.aleatorioBtn = document.getElementById('missao-aleatorio-btn');
    els.preguicaBtn = document.getElementById('modo-preguica-btn');

    els.battle = document.getElementById('missao-battle');
    els.progresso = document.getElementById('missao-progresso');
    els.combo = document.getElementById('missao-combo');
    els.origem = document.getElementById('missao-origem');
    els.caso = document.getElementById('missao-caso');
    els.enunciado = document.getElementById('missao-enunciado');
    els.altList = document.getElementById('missao-alternativas');
    els.confirmBtn = document.getElementById('missao-confirmar');
    els.feedback = document.getElementById('missao-feedback');
    els.metodo = document.getElementById('missao-metodo');
    els.proximaBtn = document.getElementById('missao-proxima');
    els.encerrarBtn = document.getElementById('missao-encerrar');

    els.relatorio = document.getElementById('missao-relatorio');
    els.relatorioConteudo = document.getElementById('relatorio-conteudo');
    els.novaMissaoBtn = document.getElementById('relatorio-nova-missao');

    els.preguicaPanel = document.getElementById('missao-preguica-panel');
    els.pOrigem = document.getElementById('preguica-origem');
    els.pCaso = document.getElementById('preguica-caso');
    els.pEnunciado = document.getElementById('preguica-enunciado');
    els.pAltList = document.getElementById('preguica-alternativas');
    els.pConfirmBtn = document.getElementById('preguica-confirmar');
    els.pFeedback = document.getElementById('preguica-feedback');
    els.pMetodo = document.getElementById('preguica-metodo');
    els.pContinuar = document.getElementById('preguica-continuar');
    els.pSimBtn = document.getElementById('preguica-sim');
    els.pNaoBtn = document.getElementById('preguica-nao');

    els.aleatorioBtn.addEventListener('click', function () { iniciarMissao(null, 'Missão Aleatória'); });
    els.preguicaBtn.addEventListener('click', iniciarModoPreguica);
    els.encerrarBtn.addEventListener('click', encerrarMissaoAgora);
    els.novaMissaoBtn.addEventListener('click', voltarParaPicker);

    renderTerritorios();
  }

  return {
    init: init,
    renderTerritorios: renderTerritorios,
    calcularXp: calcularXp,
    registrarResposta: registrarResposta
  };
})();
