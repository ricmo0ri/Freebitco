// Chefões: um por tema dentro do território (ou um único "Geral" quando
// as questões não têm tema definido). Vencer exige 5 acertos acumulados —
// errar não reseta o progresso, o chefão só volta para ser enfrentado de novo.
var Chefoes = (function () {
  var NECESSARIO_PARA_VENCER = 5;
  var els = {};
  var disciplinaId = null;
  var batalhaAtual = null; // { bossKey, questoes, questaoAtual, selecionado }

  function bossKey(discId, tema) {
    return discId + '::' + (tema || '__geral__');
  }

  function getProgresso() {
    return Storage.read(Storage.KEYS.chefoesDerrotados, {});
  }

  function salvarProgresso(mapa) {
    Storage.write(Storage.KEYS.chefoesDerrotados, mapa);
  }

  function agruparPorTema(questoes) {
    var grupos = {};
    questoes.forEach(function (q) {
      var tema = q.tema || null;
      var chave = tema || '__geral__';
      if (!grupos[chave]) grupos[chave] = { tema: tema, questoes: [] };
      grupos[chave].questoes.push(q);
    });
    return grupos;
  }

  function renderList() {
    if (!disciplinaId) return Promise.resolve();
    return DB.getAllByIndex('questoes', 'disciplinaId', disciplinaId).then(function (questoes) {
      els.list.innerHTML = '';
      if (questoes.length === 0) {
        els.list.innerHTML = '<p class="empty-state">Cadastre questões nesta disciplina para desbloquear chefões.</p>';
        return;
      }

      var grupos = agruparPorTema(questoes);
      var progresso = getProgresso();

      Object.keys(grupos).forEach(function (chave) {
        var grupo = grupos[chave];
        var key = bossKey(disciplinaId, grupo.tema);
        var estado = progresso[key] || { corretas: 0, derrotado: false };

        var li = document.createElement('li');
        li.className = 'boss-item';

        var info = document.createElement('div');
        info.className = 'boss-info';
        var medalha = document.createElement('span');
        medalha.className = 'icon-medalha icon-medalha--boss';
        medalha.textContent = '👹';
        var nome = document.createElement('span');
        nome.className = 'item-text';
        nome.textContent = (grupo.tema || 'Geral') + (estado.derrotado ? ' — 🏆 derrotado' : '');
        var barra = document.createElement('div');
        barra.className = 'boss-bar';
        var fill = document.createElement('div');
        fill.className = 'boss-bar-fill';
        var pct = Math.min(100, Math.round((estado.corretas / NECESSARIO_PARA_VENCER) * 100));
        fill.style.width = pct + '%';
        barra.appendChild(fill);
        var contagem = document.createElement('span');
        contagem.className = 'boss-contagem';
        contagem.textContent = Math.min(estado.corretas, NECESSARIO_PARA_VENCER) + '/' + NECESSARIO_PARA_VENCER;

        info.appendChild(medalha);
        info.appendChild(nome);
        info.appendChild(barra);
        info.appendChild(contagem);

        var desafiarBtn = document.createElement('button');
        desafiarBtn.className = 'btn btn-primary';
        desafiarBtn.textContent = estado.derrotado ? 'Treinar de novo' : 'Desafiar';
        desafiarBtn.addEventListener('click', function () { iniciarBatalha(key, grupo); });

        li.appendChild(info);
        li.appendChild(desafiarBtn);
        els.list.appendChild(li);
      });
    });
  }

  function refsBatalha() {
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

  function iniciarBatalha(key, grupo) {
    batalhaAtual = { bossKey: key, questoes: grupo.questoes, tema: grupo.tema, selecionado: null };
    els.list.parentElement.hidden = true;
    els.battle.hidden = false;
    proximoGolpe();
  }

  function proximoGolpe() {
    var questoes = batalhaAtual.questoes;
    var questao = questoes[Math.floor(Math.random() * questoes.length)];
    batalhaAtual.questaoAtual = questao;
    batalhaAtual.selecionado = null;

    var progresso = getProgresso();
    var estado = progresso[batalhaAtual.bossKey] || { corretas: 0, derrotado: false };
    els.progresso.textContent = '👹 ' + (batalhaAtual.tema || 'Geral') + ' — ' + Math.min(estado.corretas, NECESSARIO_PARA_VENCER) + '/' + NECESSARIO_PARA_VENCER;
    els.proximoBtn.hidden = true;

    QuestaoCard.render(refsBatalha(), questao, function (i) {
      batalhaAtual.selecionado = i;
      els.confirmBtn.disabled = false;
    });

    els.confirmBtn.onclick = confirmarGolpe;
    els.proximoBtn.onclick = proximoGolpe;
  }

  function confirmarGolpe() {
    if (!batalhaAtual || batalhaAtual.selecionado === null) return;
    var questao = batalhaAtual.questaoAtual;
    var acertou = batalhaAtual.selecionado === questao.respostaCorreta;
    var xp = Missao.calcularXp(questao, acertou);
    Missao.registrarResposta(questao, acertou, xp);

    var progresso = getProgresso();
    var estado = progresso[batalhaAtual.bossKey] || { corretas: 0, derrotado: false };
    if (acertou && !estado.derrotado) {
      estado.corretas += 1;
      if (estado.corretas >= NECESSARIO_PARA_VENCER) {
        estado.derrotado = true;
        estado.derrotadoEm = Storage.todayStr();
      }
    }
    progresso[batalhaAtual.bossKey] = estado;
    salvarProgresso(progresso);

    QuestaoCard.showFeedback(refsBatalha(), questao, batalhaAtual.selecionado);
    if (estado.derrotado && acertou && estado.corretas === NECESSARIO_PARA_VENCER) {
      els.feedback.textContent += ' 🏆 CHEFÃO DERROTADO!';
    }
    els.proximoBtn.hidden = false;
  }

  function voltar() {
    els.battle.hidden = true;
    els.list.parentElement.hidden = false;
    batalhaAtual = null;
    renderList();
  }

  function setDisciplina(id) {
    disciplinaId = id;
    if (els.battle) els.battle.hidden = true;
    if (els.list && els.list.parentElement) els.list.parentElement.hidden = false;
    renderList();
  }

  function init() {
    els.list = document.getElementById('chefao-list');
    els.battle = document.getElementById('chefao-battle');
    els.voltarBtn = document.getElementById('chefao-voltar');
    els.progresso = document.getElementById('chefao-progresso');
    els.origem = document.getElementById('chefao-origem');
    els.caso = document.getElementById('chefao-caso');
    els.enunciado = document.getElementById('chefao-enunciado');
    els.altList = document.getElementById('chefao-alternativas');
    els.confirmBtn = document.getElementById('chefao-confirmar');
    els.feedback = document.getElementById('chefao-feedback');
    els.metodo = document.getElementById('chefao-metodo');
    els.proximoBtn = document.getElementById('chefao-proximo');

    els.voltarBtn.addEventListener('click', voltar);
  }

  return { init: init, setDisciplina: setDisciplina };
})();
