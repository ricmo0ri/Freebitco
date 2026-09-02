// Ponto de entrada: navegação entre abas e badge de sequência no cabeçalho.
var App = (function () {
  var els = {};

  function showView(name) {
    document.querySelectorAll('.view').forEach(function (view) {
      view.classList.toggle('active', view.dataset.view === name);
    });
    document.querySelectorAll('.tab-btn').forEach(function (btn) {
      var active = btn.dataset.view === name;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-pressed', String(active));
    });
    if (name === 'progresso' && window.Progress) Progress.refresh();
  }

  function refreshStreakBadge() {
    var streaks = Storage.getStreaks();
    els.streakBadge.textContent = 'Sequência: ' + streaks.current + (streaks.current === 1 ? ' dia' : ' dias');
  }

  // Atalhos de teclado nas telas de questão (missão, modo preguiça, chefões,
  // revisão livre): 1-4 escolhe a alternativa, Enter confirma ou avança.
  // Reduz a quantidade de cliques/decisões motoras necessárias por questão.
  function isVisivel(el) {
    return !!(el && el.offsetParent !== null);
  }

  function elementoAtivo(id) {
    var el = document.getElementById(id);
    return isVisivel(el) ? el : null;
  }

  function initAtalhosTeclado() {
    document.addEventListener('keydown', function (e) {
      var alvo = e.target;
      if (alvo && (alvo.tagName === 'INPUT' || alvo.tagName === 'TEXTAREA' || alvo.isContentEditable)) return;

      var listaAtiva = null;
      var listas = document.querySelectorAll('.alternativas-list');
      for (var i = 0; i < listas.length; i++) {
        if (isVisivel(listas[i])) { listaAtiva = listas[i]; break; }
      }
      if (!listaAtiva) return;

      if (['1', '2', '3', '4', '5'].indexOf(e.key) !== -1) {
        var opcoes = listaAtiva.querySelectorAll('.alt-option');
        var idx = Number(e.key) - 1;
        if (opcoes[idx]) { e.preventDefault(); opcoes[idx].click(); }
        return;
      }

      if (e.key === 'Enter') {
        var prefixo = listaAtiva.id.replace(/-alternativas$/, '');
        var confirmar = elementoAtivo(prefixo + '-confirmar');
        var proxima = elementoAtivo(prefixo + '-proxima') || elementoAtivo(prefixo + '-proximo');
        if (confirmar && !confirmar.disabled) {
          e.preventDefault();
          confirmar.click();
        } else if (proxima) {
          e.preventDefault();
          proxima.click();
        } else {
          var container = listaAtiva.closest('.flashcard, .card-panel');
          var acaoPrimaria = container && container.querySelector('.btn-primary:not([hidden])');
          if (acaoPrimaria && isVisivel(acaoPrimaria)) { e.preventDefault(); acaoPrimaria.click(); }
        }
      }
    });
  }

  function init() {
    els.streakBadge = document.getElementById('streak-badge');
    els.tabButtons = document.querySelectorAll('.tab-btn');

    els.tabButtons.forEach(function (btn) {
      btn.addEventListener('click', function () { showView(btn.dataset.view); });
    });

    if (window.Bemestar) Bemestar.init();
    Perfil.init();
    Timer.init();
    Flashcards.init();
    Questoes.init();
    Chefoes.init();
    Doutrina.init();
    ImportarProva.init();
    ImportarDoutrina.init();
    Missao.init();
    Tasks.init();
    Progress.init();
    Preferencias.init();
    initAtalhosTeclado();
    if (window.Bemestar) Bemestar.iniciarVigiaHiperfoco();

    Disciplinas.init().then(function () {
      return QuestoesSeed.seedar();
    }).then(function () {
      if (window.Missao) Missao.renderTerritorios();
    });

    showView('missao');
    refreshStreakBadge();
  }

  return { init: init, refreshStreakBadge: refreshStreakBadge };
})();

document.addEventListener('DOMContentLoaded', App.init);
