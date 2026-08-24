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

  function init() {
    els.streakBadge = document.getElementById('streak-badge');
    els.tabButtons = document.querySelectorAll('.tab-btn');

    els.tabButtons.forEach(function (btn) {
      btn.addEventListener('click', function () { showView(btn.dataset.view); });
    });

    Perfil.init();
    Timer.init();
    Flashcards.init();
    Questoes.init();
    Chefoes.init();
    Doutrina.init();
    ImportarProva.init();
    Missao.init();
    Tasks.init();
    Progress.init();
    Preferencias.init();

    Disciplinas.init().then(function () {
      if (window.Missao) Missao.renderTerritorios();
    });

    showView('missao');
    refreshStreakBadge();
  }

  return { init: init, refreshStreakBadge: refreshStreakBadge };
})();

document.addEventListener('DOMContentLoaded', App.init);
