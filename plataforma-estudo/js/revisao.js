// Revisão inteligente: em vez do usuário ter que lembrar "preciso revisar
// aquilo de 12 dias atrás", a plataforma observa erros, aproveitamento por
// território, tempo desde o último contato e dificuldade, e já monta uma
// sessão curta e pronta pra clicar.
var Revisao = (function () {
  var els = {};
  var TAMANHO_ALVO = 8;
  var PESO_DIFICULDADE = { dificil: 2, media: 1, facil: 0 };

  function estatisticasPorQuestao(respostas) {
    var mapa = {};
    respostas.forEach(function (r) {
      if (!mapa[r.questaoId]) mapa[r.questaoId] = { erros: 0, ultimaData: '' };
      if (!r.acertou) mapa[r.questaoId].erros += 1;
      if (r.date > mapa[r.questaoId].ultimaData) mapa[r.questaoId].ultimaData = r.date;
    });
    return mapa;
  }

  function montarFila(questoesTodas, respostas, fracos) {
    var idsFracos = {};
    fracos.forEach(function (f) { idsFracos[f.disciplinaId] = true; });

    var candidatas = questoesTodas.filter(function (q) { return idsFracos[q.disciplinaId]; });
    var stats = estatisticasPorQuestao(respostas);

    candidatas.sort(function (a, b) {
      var sa = stats[a.id] || { erros: 0, ultimaData: '' };
      var sb = stats[b.id] || { erros: 0, ultimaData: '' };
      if (sb.erros !== sa.erros) return sb.erros - sa.erros; // mais errada primeiro
      if (sa.ultimaData !== sb.ultimaData) return (sa.ultimaData || '').localeCompare(sb.ultimaData || ''); // contato mais antigo primeiro
      var pa = PESO_DIFICULDADE[a.dificuldade] || 0;
      var pb = PESO_DIFICULDADE[b.dificuldade] || 0;
      return pb - pa; // entre empates, prioriza a mais difícil
    });

    return candidatas.slice(0, TAMANHO_ALVO);
  }

  function estimarMinutos(quantidade) {
    return Math.max(3, Math.round(quantidade * 1));
  }

  function render() {
    if (!els.card) return;
    var fracos = Fraquezas.getTemasFracos(3);

    if (fracos.length === 0) {
      els.card.hidden = false;
      els.lista.innerHTML = '';
      els.titulo.textContent = '🎉 Nenhuma fraqueza detectada por enquanto';
      els.agoraBtn.hidden = true;
      return;
    }

    els.card.hidden = false;
    els.titulo.textContent = '📚 Você precisa revisar';
    els.lista.innerHTML = '';
    fracos.forEach(function (f) {
      var li = document.createElement('li');
      li.className = 'revisao-item';
      li.textContent = f.emoji + ' ' + f.tema + ' — ' + f.pct + '%';
      els.lista.appendChild(li);
    });

    Promise.all([DB.getAll('questoes')]).then(function (resultados) {
      var questoesTodas = resultados[0];
      var respostas = Storage.read(Storage.KEYS.questaoRespostas, []);
      var fila = montarFila(questoesTodas, respostas, fracos);

      if (fila.length === 0) {
        els.agoraBtn.hidden = true;
        return;
      }
      var minutos = estimarMinutos(fila.length);
      els.agoraBtn.hidden = false;
      els.agoraBtn.textContent = '▶️ Revisar agora — ' + minutos + ' min';
      els.agoraBtn.onclick = function () {
        Missao.iniciarComFila(fila, '🧠 Revisão inteligente', minutos);
      };
    });
  }

  function init() {
    els.card = document.getElementById('revisao-inteligente-card');
    els.titulo = document.getElementById('revisao-titulo');
    els.lista = document.getElementById('revisao-lista');
    els.agoraBtn = document.getElementById('revisao-agora-btn');
    if (!els.card) return;
    render();
  }

  return { init: init, render: render };
})();
