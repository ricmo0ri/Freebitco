// "Seu próximo passo": em vez de escolher um território às cegas — ou pior,
// ver duas sugestões concorrentes (revisão + território novo) empilhadas
// com a lista inteira de territórios logo abaixo — a plataforma aponta UMA
// única coisa pra fazer agora. A ordem de prioridade é:
//   1. Trilha OAB 48 (TrilhaOab48.getProximoItem) — a fila única de 114
//      assuntos que o próprio usuário priorizou pensando na prova; sempre
//      que ela tiver um próximo item (não dominado), é ele que manda.
//   2. Revisão inteligente (Revisao.getRecomendacao) — cobre fraquezas
//      fora da trilha (ex: território criado pelo próprio usuário).
//   3. Próximo território por fraqueza (Fraquezas.getMapaTerritorios) —
//      fallback genérico, só entra em cena se as duas anteriores não
//      tiverem nada a sugerir.
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
    critico: function (item) { return 'Você está tendo bastante dificuldade aqui (' + item.pct + '% de acerto nas últimas ' + item.total + ' questões). Um bom lugar pra focar agora.'; },
    fraco: function (item) { return 'Ainda não está redondo (' + item.pct + '% de acerto nas últimas ' + item.total + ' questões). Um empurrão aqui já ajuda bastante.'; },
    sem_dados: function () { return 'Você ainda não visitou este reino. Bom lugar pra começar!'; },
    desenvolvimento: function (item) { return 'Está no caminho certo (' + item.pct + '% de acerto nas últimas ' + item.total + ' questões), mas ainda dá pra evoluir.'; }
  };

  function escolherTerritorio(mapa, ordemPorId) {
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

  function renderTrilha(item) {
    els.lista.hidden = true;
    els.lista.innerHTML = '';

    els.titulo.innerHTML = '';
    els.titulo.appendChild(document.createTextNode(item.nivelInfo.emoji + ' Sua trilha OAB: ' + item.territorio + ' — ' + item.assunto + ' '));
    var posicao = document.createElement('span');
    posicao.className = 'trilha-posicao-badge';
    posicao.textContent = item.posicao + '/' + item.total114;
    els.titulo.appendChild(posicao);
    if (window.PrioridadeOab) {
      var badgePrioridade = PrioridadeOab.criarBadge(PrioridadeOab.getPrioridadeTerritorio(item.territorio));
      if (badgePrioridade) els.titulo.appendChild(badgePrioridade);
    }

    els.texto.textContent = item.texto;
    els.btn.hidden = false;
    els.btn.textContent = '▶️ Estudar agora';
    els.btn.onclick = function () {
      Missao.iniciarMissaoPorTemas(item.disciplinaId, item.temas, item.territorio + ' — ' + item.assunto);
    };

    if (els.ajustarToggle) {
      els.ajustarToggle.hidden = false;
      if (els.ajustarInput) els.ajustarInput.value = item.posicao;
    }
  }

  // Esconde o ajuste de posição da trilha quando ela não é a fonte da
  // sugestão atual (revisão inteligente ou fallback por fraqueza) — não
  // faz sentido "pular posição" de algo que não é a trilha fixa de 114.
  function esconderAjusteTrilha() {
    if (els.ajustarToggle) els.ajustarToggle.hidden = true;
    if (els.ajustarForm) els.ajustarForm.hidden = true;
  }

  function renderRevisao(recomendacao) {
    esconderAjusteTrilha();
    els.lista.hidden = false;
    els.lista.innerHTML = '';
    recomendacao.fracos.forEach(function (f) {
      var li = document.createElement('li');
      li.className = 'revisao-item';
      li.textContent = f.emoji + ' ' + f.tema + ' — ' + f.pct + '%';
      els.lista.appendChild(li);
    });

    els.titulo.textContent = '🧠 Seu próximo passo: revisar';
    els.texto.textContent = 'Antes de avançar, vale reforçar o que ainda está errando — uma sessão curta, focada só nisso.';
    els.btn.hidden = false;
    els.btn.textContent = '▶️ Revisar agora — ' + recomendacao.minutos + ' min';
    els.btn.onclick = function () {
      Missao.iniciarComFila(recomendacao.fila, '🧠 Revisão inteligente', recomendacao.minutos);
    };
  }

  function renderNovoTerritorio(escolhido) {
    esconderAjusteTrilha();
    els.lista.hidden = true;
    els.lista.innerHTML = '';

    els.titulo.innerHTML = '';
    els.titulo.appendChild(document.createTextNode((escolhido.icone || '📍') + ' Seu próximo passo: ' + escolhido.nome + ' '));
    if (window.PrioridadeOab) {
      var badge = PrioridadeOab.criarBadge(PrioridadeOab.getPrioridadeTerritorio(escolhido.nome));
      if (badge) els.titulo.appendChild(badge);
    }

    var gerarTexto = TEXTO_STATUS[escolhido.status] || function () { return ''; };
    els.texto.textContent = gerarTexto(escolhido);
    els.btn.hidden = false;
    els.btn.textContent = '▶️ Ir para ' + escolhido.nome;
    els.btn.onclick = function () {
      Missao.iniciarMissao(escolhido.disciplinaId, escolhido.nome);
    };
  }

  function renderFallback(disciplinas) {
    if (disciplinas.length === 0) { els.card.hidden = true; return; }

    var ordemPorId = {};
    disciplinas.forEach(function (d) {
      var idx = ORDEM_SUGERIDA.indexOf(d.nome);
      ordemPorId[d.id] = idx === -1 ? 999 : idx;
    });

    var mapa = Fraquezas.getMapaTerritorios(disciplinas);
    var escolhido = escolherTerritorio(mapa, ordemPorId);

    els.card.hidden = false;
    if (!escolhido) {
      esconderAjusteTrilha();
      els.lista.hidden = true;
      els.titulo.textContent = '🏆 Todos os reinos dominados!';
      els.texto.textContent = 'Continue revisando de vez em quando pra não enferrujar.';
      els.btn.hidden = true;
      return;
    }

    renderNovoTerritorio(escolhido);
  }

  function render() {
    if (!els.card) return;
    DB.getAll('disciplinas').then(function (disciplinas) {
      var itemTrilha = window.TrilhaOab48 ? TrilhaOab48.getProximoItem(disciplinas) : null;
      if (itemTrilha) {
        els.card.hidden = false;
        renderTrilha(itemTrilha);
        return;
      }

      var recomendacaoRevisao = window.Revisao ? Revisao.getRecomendacao() : Promise.resolve(null);
      recomendacaoRevisao.then(function (recomendacao) {
        if (recomendacao) {
          els.card.hidden = false;
          renderRevisao(recomendacao);
          return;
        }
        renderFallback(disciplinas);
      });
    });
  }

  function init() {
    els.card = document.getElementById('proximo-passo-card');
    els.titulo = document.getElementById('proximo-passo-titulo');
    els.lista = document.getElementById('proximo-passo-lista');
    els.texto = document.getElementById('proximo-passo-texto');
    els.btn = document.getElementById('proximo-passo-btn');
    els.ajustarToggle = document.getElementById('trilha-ajustar-toggle');
    els.ajustarForm = document.getElementById('trilha-ajustar-form');
    els.ajustarInput = document.getElementById('trilha-ajustar-input');
    els.ajustarSalvar = document.getElementById('trilha-ajustar-salvar');
    if (!els.card) return;

    if (els.ajustarToggle) {
      els.ajustarToggle.addEventListener('click', function () {
        els.ajustarForm.hidden = !els.ajustarForm.hidden;
      });
    }
    if (els.ajustarSalvar) {
      els.ajustarSalvar.addEventListener('click', function () {
        var valor = parseInt(els.ajustarInput.value, 10);
        if (!valor || valor < 1 || valor > 114) {
          alert('Digite uma posição entre 1 e 114.');
          return;
        }
        Storage.write(Storage.KEYS.trilhaOab48PosicaoInicio, valor);
        els.ajustarForm.hidden = true;
        render();
      });
    }

    render();
  }

  return { init: init, render: render };
})();
