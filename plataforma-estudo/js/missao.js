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

  function renderMetaDiariaMini() {
    if (!els.metaDiariaMini) return;
    var feitas = Storage.getQuestoesRespondidasHoje();
    var meta = Storage.getMetaDiariaQuestoes();
    var texto = '🎯 Meta de hoje: ' + feitas + ' / ' + meta + ' questões';
    if (feitas >= meta) texto += ' — concluída! 🎉';
    els.metaDiariaMini.textContent = texto;
  }

  function renderContinuarMissao() {
    if (!els.continuarBox) return;
    var ultima = Storage.read(Storage.KEYS.ultimaMissao, null);
    if (!ultima || ultima.indice >= ultima.filaIds.length) {
      els.continuarBox.hidden = true;
      return;
    }
    els.continuarBox.hidden = false;
    els.continuarBtn.textContent = '▶️ Continuar: ' + ultima.label + ' (questão ' + (ultima.indice + 1) + ' de ' + ultima.filaIds.length + ')';
    els.continuarBtn.onclick = retomarMissao;
  }

  function retomarMissao() {
    var ultima = Storage.read(Storage.KEYS.ultimaMissao, null);
    if (!ultima) return;
    DB.getAll('questoes').then(function (todas) {
      var porId = {};
      todas.forEach(function (q) { porId[q.id] = q; });
      var fila = ultima.filaIds.map(function (id) { return porId[id]; }).filter(Boolean);
      if (fila.length === 0) {
        Storage.write(Storage.KEYS.ultimaMissao, null);
        renderContinuarMissao();
        return;
      }
      sessao = {
        label: ultima.label,
        fila: fila,
        indice: ultima.indice,
        combo: ultima.combo || 0,
        xpTotal: ultima.xpTotal || 0,
        acertos: ultima.acertos || 0,
        respondidas: ultima.respondidas || 0,
        disciplinasTocadas: {},
        pegadinhaAprendida: ultima.pegadinhaAprendida || null,
        selecionado: null,
        minutosTotais: ultima.minutosTotais || Timer.getSelectedMinutes()
      };
      els.picker.hidden = true;
      els.relatorio.hidden = true;
      els.battle.hidden = false;
      renderQuestaoAtual();
    });
  }

  function salvarProgressoMissao() {
    if (!sessao) return;
    Storage.write(Storage.KEYS.ultimaMissao, {
      label: sessao.label,
      filaIds: sessao.fila.map(function (q) { return q.id; }),
      indice: sessao.indice,
      combo: sessao.combo,
      xpTotal: sessao.xpTotal,
      acertos: sessao.acertos,
      respondidas: sessao.respondidas,
      pegadinhaAprendida: sessao.pegadinhaAprendida,
      minutosTotais: sessao.minutosTotais
    });
  }

  function limparProgressoMissao() {
    Storage.write(Storage.KEYS.ultimaMissao, null);
  }

  function renderTerritorios() {
    renderMetaDiariaMini();
    renderContinuarMissao();
    if (window.Revisao) Revisao.render();
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

  function iniciarComFila(fila, label, minutosTotais) {
    if (fila.length === 0) {
      alert('Ainda não há questões cadastradas aí. Adicione algumas na aba Território antes de encarar essa missão.');
      return;
    }
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
      selecionado: null,
      minutosTotais: minutosTotais || Timer.getSelectedMinutes()
    };

    els.picker.hidden = true;
    els.relatorio.hidden = true;
    els.battle.hidden = false;
    renderQuestaoAtual();
  }

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
      iniciarComFila(fila, label, minutos);
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

  function estimarMinutosRestantes() {
    if (!sessao) return 0;
    var minutosPlanejados = sessao.minutosTotais || Timer.getSelectedMinutes();
    var totalPlanejado = sessao.fila.length || 1;
    var restantes = sessao.fila.length - sessao.indice;
    return Math.max(1, Math.round((minutosPlanejados / totalPlanejado) * restantes));
  }

  function renderQuestaoAtual() {
    if (!sessao || sessao.indice >= sessao.fila.length) {
      finalizarMissao();
      return;
    }
    var questao = sessao.fila[sessao.indice];
    sessao.selecionado = null;
    els.progresso.textContent = 'Questão ' + (sessao.indice + 1) + ' de ' + sessao.fila.length + ' — ' + sessao.label +
      ' · ≈' + estimarMinutosRestantes() + ' min restantes';
    if (els.progressFill) {
      els.progressFill.style.width = Math.round((sessao.indice / sessao.fila.length) * 100) + '%';
    }
    els.proximaBtn.hidden = true;
    if (els.pularBtn) els.pularBtn.hidden = false;

    QuestaoCard.render(refsMissao(), questao, function (i) {
      sessao.selecionado = i;
      els.confirmBtn.disabled = false;
    });

    els.confirmBtn.onclick = function () { confirmarQuestaoAtual(questao); };
    els.proximaBtn.onclick = function () {
      sessao.indice += 1;
      salvarProgressoMissao();
      renderQuestaoAtual();
    };

    updateComboBadge();
  }

  function pularQuestaoAtual() {
    if (!sessao) return;
    var questao = sessao.fila[sessao.indice];
    var revisar = Storage.read(Storage.KEYS.revisarDepois, []);
    if (revisar.indexOf(questao.id) === -1) revisar.push(questao.id);
    Storage.write(Storage.KEYS.revisarDepois, revisar);

    sessao.indice += 1;
    salvarProgressoMissao();
    renderQuestaoAtual();
  }

  function confirmarQuestaoAtual(questao) {
    if (sessao.selecionado === null) return;
    var acertou = sessao.selecionado === questao.respostaCorreta;
    var comboAntes = sessao.combo;
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

    if (window.Bemestar) {
      if (resultado.critico) {
        Bemestar.tocarConquistaGrande();
      } else if ([3, 5, 10].indexOf(sessao.combo) !== -1 && sessao.combo !== comboAntes) {
        Bemestar.tocarConquista();
      }
    }

    salvarProgressoMissao();
    if (els.pularBtn) els.pularBtn.hidden = true;
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
    limparProgressoMissao();
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
    if (els.pPularBtn) els.pPularBtn.hidden = false;

    QuestaoCard.render(refsPreguica(), questao, function (i) {
      preguicaAtual.selecionado = i;
      els.pConfirmBtn.disabled = false;
    });

    els.pConfirmBtn.onclick = function () { confirmarPreguica(questoes); };
    if (els.pPularBtn) {
      els.pPularBtn.onclick = function () {
        var revisar = Storage.read(Storage.KEYS.revisarDepois, []);
        if (revisar.indexOf(questao.id) === -1) revisar.push(questao.id);
        Storage.write(Storage.KEYS.revisarDepois, revisar);
        proximaQuestaoPreguica(questoes);
      };
    }
  }

  function confirmarPreguica(questoes) {
    if (preguicaAtual.selecionado === null) return;
    var questao = preguicaAtual.questao;
    var acertou = preguicaAtual.selecionado === questao.respostaCorreta;
    var xp = calcularXp(questao, acertou);
    registrarResposta(questao, acertou, xp);

    QuestaoCard.showFeedback(refsPreguica(), questao, preguicaAtual.selecionado);
    els.pContinuar.hidden = false;
    if (els.pPularBtn) els.pPularBtn.hidden = true;

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
    els.metaDiariaMini = document.getElementById('meta-diaria-mini');
    els.continuarBox = document.getElementById('continuar-missao-box');
    els.continuarBtn = document.getElementById('continuar-missao-btn');

    els.battle = document.getElementById('missao-battle');
    els.progresso = document.getElementById('missao-progresso');
    els.progressFill = document.getElementById('missao-progress-fill');
    els.combo = document.getElementById('missao-combo');
    els.origem = document.getElementById('missao-origem');
    els.caso = document.getElementById('missao-caso');
    els.enunciado = document.getElementById('missao-enunciado');
    els.altList = document.getElementById('missao-alternativas');
    els.confirmBtn = document.getElementById('missao-confirmar');
    els.pularBtn = document.getElementById('missao-pular');
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
    els.pPularBtn = document.getElementById('preguica-pular');
    els.pFeedback = document.getElementById('preguica-feedback');
    els.pMetodo = document.getElementById('preguica-metodo');
    els.pContinuar = document.getElementById('preguica-continuar');
    els.pSimBtn = document.getElementById('preguica-sim');
    els.pNaoBtn = document.getElementById('preguica-nao');

    els.aleatorioBtn.addEventListener('click', function () { iniciarMissao(null, 'Missão Aleatória'); });
    els.preguicaBtn.addEventListener('click', iniciarModoPreguica);
    els.encerrarBtn.addEventListener('click', encerrarMissaoAgora);
    els.novaMissaoBtn.addEventListener('click', voltarParaPicker);
    if (els.pularBtn) els.pularBtn.addEventListener('click', pularQuestaoAtual);

    renderTerritorios();
  }

  return {
    init: init,
    renderTerritorios: renderTerritorios,
    calcularXp: calcularXp,
    registrarResposta: registrarResposta,
    iniciarComFila: iniciarComFila
  };
})();
