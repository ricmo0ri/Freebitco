// Tela de progresso: estatísticas simples e feedback visual de sequência,
// pensada para dar reforço positivo imediato.
var Progress = (function () {
  var els = {};

  function refresh() {
    var sessions = Storage.read(Storage.KEYS.sessions, []);
    var tasks = Storage.read(Storage.KEYS.tasks, []);
    var reviews = Storage.read(Storage.KEYS.cardReviews, []);
    var questaoRespostas = Storage.read(Storage.KEYS.questaoRespostas, []);

    var totalMinutes = sessions.reduce(function (sum, s) { return sum + s.minutes; }, 0);
    var completedTasks = tasks.filter(function (t) { return t.done; }).length;

    els.sessions.textContent = String(sessions.length);
    els.minutes.textContent = String(totalMinutes);
    els.tasks.textContent = String(completedTasks);
    els.cards.textContent = String(reviews.length);
    els.questoes.textContent = String(questaoRespostas.length);

    var streaks = Storage.getStreaks();
    els.streakCurrent.textContent = String(streaks.current);
    els.streakBest.textContent = String(streaks.best);

    renderWeekChart();
    renderMetaDiaria();
  }

  function renderMetaDiaria() {
    var feitas = Storage.getQuestoesRespondidasHoje();
    var meta = Storage.getMetaDiariaQuestoes();
    var pct = Math.min(100, Math.round((feitas / meta) * 100));
    els.metaProgresso.textContent = feitas + ' / ' + meta + ' hoje' + (feitas >= meta ? ' — concluída! 🎉' : '');
    els.metaFill.style.width = pct + '%';
    if (document.activeElement !== els.metaInput) els.metaInput.value = meta;
  }

  function salvarMeta() {
    Storage.setMetaDiariaQuestoes(els.metaInput.value);
    renderMetaDiaria();
    if (window.Missao) Missao.renderTerritorios();
  }

  function renderWeekChart() {
    var days = Storage.getLastNDaysCounts(7);
    var maxCount = Math.max(1, Math.max.apply(null, days.map(function (d) { return d.count; })));

    els.chart.innerHTML = '';
    days.forEach(function (d) {
      var col = document.createElement('div');
      col.className = 'day-bar';

      var fill = document.createElement('div');
      fill.className = 'bar-fill';
      var heightPct = Math.round((d.count / maxCount) * 80) + 4;
      fill.style.height = heightPct + 'px';

      var label = document.createElement('span');
      label.className = 'bar-label';
      label.textContent = d.label;

      col.appendChild(fill);
      col.appendChild(label);
      els.chart.appendChild(col);
    });
  }

  function init() {
    els.sessions = document.getElementById('stat-sessions');
    els.minutes = document.getElementById('stat-minutes');
    els.tasks = document.getElementById('stat-tasks');
    els.cards = document.getElementById('stat-cards');
    els.questoes = document.getElementById('stat-questoes');
    els.streakCurrent = document.getElementById('streak-current');
    els.streakBest = document.getElementById('streak-best');
    els.chart = document.getElementById('week-chart');
    els.metaProgresso = document.getElementById('meta-diaria-progresso');
    els.metaFill = document.getElementById('meta-diaria-fill');
    els.metaInput = document.getElementById('meta-diaria-input');
    els.metaSalvarBtn = document.getElementById('meta-diaria-salvar');
    if (els.metaSalvarBtn) els.metaSalvarBtn.addEventListener('click', salvarMeta);

    refresh();
  }

  return { init: init, refresh: refresh };
})();
