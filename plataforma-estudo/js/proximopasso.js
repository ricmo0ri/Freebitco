// "Seu próximo passo": em vez de escolher um território às cegas, a
// plataforma aponta pra onde vale mais a pena ir agora. Usa o mapa por
// território (Fraquezas.getMapaTerritorios) — já existia, mas não tinha
// nenhum consumidor até esta feature.
var ProximoPasso = (function () {
  var els = {};

  // Quanto menor, mais urgente. 'dominado' nunca é recomendado (fica de fora
  // do candidato antes mesmo de chegar aqui).
  var PRIORIDADE_STATUS = { critico: 0, fraco: 1, sem_dados: 2, desenvolvimento: 3 };

  // Ordem sugerida de primeiro contato com cada território (mesma ordem do
  // seed em disciplinas.js). Usada só como desempate entre territórios
  // "sem_dados": DB.getAll() devolve as disciplinas ordenadas pelo id
  // (timestamp+aleatório), não pela ordem em que foram pensadas pra
  // estudar, então sem isso o primeiro território sugerido seria
  // essencialmente aleatório em vez de seguir uma progressão com sentido.
  var ORDEM_SUGERIDA = [
    'Ética', 'Direito Constitucional', 'Direito Penal', 'Processo Penal',
    'Direito Civil', 'Direito do Trabalho', 'Direito Tributário', 'Direito Empresarial',
    'Direito Administrativo', 'Processo Civil', 'Processo do Trabalho', 'Direitos Humanos',
    'Direito Ambiental', 'Direito do Consumidor', 'Direito da Criança e do Adolescente',
    'Direito Internacional', 'Filosofia do Direito', 'Direito Eleitoral',
    'Direito Financeiro', 'Direito Previdenciário'
  ];

  var TEXTO_STATUS = {
    critico: function (item) { return 'Você está tendo bastante dificuldade aqui (' + item.pct + '% de acerto). Um bom lugar pra focar agora.'; },
    fraco: function (item) { return 'Ainda não está redondo (' + item.pct + '% de acerto). Um empurrão aqui já ajuda bastante.'; },
    sem_dados: function () { return 'Você ainda não visitou este reino. Bom lugar pra começar!'; },
    desenvolvimento: function (item) { return 'Está no caminho certo (' + item.pct + '%), mas ainda dá pra evoluir.'; }
  };

  function escolher(mapa, ordemPorId) {
    var candidatos = mapa.filter(function (m) { return m.status !== 'dominado'; });
    if (candidatos.length === 0) return null;
    candidatos.sort(function (a, b) {
      var pa = PRIORIDADE_STATUS[a.status];
      var pb = PRIORIDADE_STATUS[b.status];
      if (pa !== pb) return pa - pb;
      if (a.status === 'sem_dados') {
        var oa = ordemPorId[a.disciplinaId];
        var ob = ordemPorId[b.disciplinaId];
        if (oa !== ob) return oa - ob;
      }
      return (a.pct || 0) - (b.pct || 0);
    });
    return candidatos[0];
  }

  function render() {
    if (!els.card) return;
    DB.getAll('disciplinas').then(function (disciplinas) {
      if (disciplinas.length === 0) { els.card.hidden = true; return; }

      var ordemPorId = {};
      disciplinas.forEach(function (d) {
        var idx = ORDEM_SUGERIDA.indexOf(d.nome);
        ordemPorId[d.id] = idx === -1 ? 999 : idx;
      });

      var mapa = Fraquezas.getMapaTerritorios(disciplinas);
      var escolhido = escolher(mapa, ordemPorId);

      els.card.hidden = false;
      if (!escolhido) {
        els.titulo.textContent = '🏆 Todos os reinos dominados!';
        els.texto.textContent = 'Continue revisando de vez em quando pra não enferrujar.';
        els.btn.hidden = true;
        return;
      }

      els.titulo.textContent = (escolhido.icone || '📍') + ' Seu próximo passo: ' + escolhido.nome;
      var gerarTexto = TEXTO_STATUS[escolhido.status] || function () { return ''; };
      els.texto.textContent = gerarTexto(escolhido);
      els.btn.hidden = false;
      els.btn.textContent = '▶️ Ir para ' + escolhido.nome;
      els.btn.onclick = function () {
        Missao.iniciarMissao(escolhido.disciplinaId, escolhido.nome);
      };
    });
  }

  function init() {
    els.card = document.getElementById('proximo-passo-card');
    els.titulo = document.getElementById('proximo-passo-titulo');
    els.texto = document.getElementById('proximo-passo-texto');
    els.btn = document.getElementById('proximo-passo-btn');
    if (!els.card) return;
    render();
  }

  return { init: init, render: render };
})();
