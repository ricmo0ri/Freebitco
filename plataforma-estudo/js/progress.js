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

    renderDesempenhoHero(questaoRespostas, totalMinutes);
    renderWeekChart();
    renderAcertoChart(questaoRespostas);
    renderMapaOab();
    renderMetaDiaria();
  }

  function formatarTempo(minutos) {
    if (minutos < 60) return minutos + 'min';
    var h = Math.floor(minutos / 60);
    var m = minutos % 60;
    return h + 'h' + (m > 0 ? (m < 10 ? '0' : '') + m : '');
  }

  function renderDesempenhoHero(questaoRespostas, totalMinutes) {
    var total = questaoRespostas.length;
    var acertos = questaoRespostas.filter(function (r) { return r.acertou; }).length;
    var pct = total > 0 ? Math.round((acertos / total) * 100) : 0;

    els.desQuestoes.textContent = String(total);
    els.desAcerto.textContent = pct + '%';
    els.desTempo.textContent = formatarTempo(totalMinutes);
  }

  function renderAcertoChart(questaoRespostas) {
    if (!els.acertoChart) return;
    var porDia = {};
    questaoRespostas.forEach(function (r) {
      if (!porDia[r.date]) porDia[r.date] = { total: 0, acertos: 0 };
      porDia[r.date].total += 1;
      if (r.acertou) porDia[r.date].acertos += 1;
    });

    els.acertoChart.innerHTML = '';
    for (var i = 6; i >= 0; i--) {
      var d = new Date();
      d.setDate(d.getDate() - i);
      var key = d.toISOString().slice(0, 10);
      var dados = porDia[key];
      var pct = dados ? Math.round((dados.acertos / dados.total) * 100) : null;

      var col = document.createElement('div');
      col.className = 'day-bar';

      var fill = document.createElement('div');
      fill.className = 'bar-fill' + (pct === null ? ' bar-fill-vazia' : '');
      var heightPct = pct === null ? 4 : Math.round((pct / 100) * 80) + 4;
      fill.style.height = heightPct + 'px';
      fill.title = pct === null ? 'Sem questões nesse dia' : pct + '% de acerto';

      var label = document.createElement('span');
      label.className = 'bar-label';
      label.textContent = d.toLocaleDateString('pt-BR', { weekday: 'short' }).slice(0, 3);

      col.appendChild(fill);
      col.appendChild(label);
      els.acertoChart.appendChild(col);
    }
  }

  function renderMapaOab() {
    if (!els.mapaLista || !window.DB) return;
    DB.getAll('disciplinas').then(function (disciplinas) {
      var mapa = Fraquezas.getMapaTerritorios(disciplinas);
      mapa.sort(function (a, b) { return b.pct - a.pct; });

      els.mapaLista.innerHTML = '';
      mapa.forEach(function (item) {
        var li = document.createElement('li');
        li.className = 'mapa-oab-item';
        var texto = item.total > 0 ? item.nome + ' — ' + item.pct + '%' : item.nome + ' — sem dados ainda';
        li.textContent = item.emoji + ' ' + texto;
        els.mapaLista.appendChild(li);
      });
    });
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

    els.desQuestoes = document.getElementById('desempenho-questoes');
    els.desAcerto = document.getElementById('desempenho-acerto');
    els.desTempo = document.getElementById('desempenho-tempo');
    els.acertoChart = document.getElementById('acerto-chart');
    els.mapaLista = document.getElementById('mapa-oab-lista');

    refresh();
  }

  return { init: init, refresh: refresh };
})();
