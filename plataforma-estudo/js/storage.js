// Camada de persistência local (localStorage) e registro de atividade/sequência.
var Storage = (function () {
  var KEYS = {
    tasks: 'estudoTdah.tasks',
    cards: 'estudoTdah.cards',
    sessions: 'estudoTdah.sessions',
    cardReviews: 'estudoTdah.cardReviews',
    questaoRespostas: 'estudoTdah.questaoRespostas',
    activity: 'estudoTdah.activity',
    settings: 'estudoTdah.settings',
    perfilXp: 'estudoTdah.perfilXp',
    chefoesDerrotados: 'estudoTdah.chefoesDerrotados',
    territoriosSeedVersion: 'estudoTdah.territoriosSeedVersion',
    lowStim: 'estudoTdah.lowStim'
  };

  function read(key, fallback) {
    try {
      var raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) {
      return fallback;
    }
  }

  function write(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function todayStr() {
    return new Date().toISOString().slice(0, 10);
  }

  function makeId() {
    return Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 8);
  }

  function recordActivity() {
    var days = read(KEYS.activity, []);
    var today = todayStr();
    if (days.indexOf(today) === -1) {
      days.push(today);
      write(KEYS.activity, days);
    }
  }

  function getActivityDays() {
    return read(KEYS.activity, []);
  }

  function getStreaks() {
    var days = getActivityDays().slice().sort();
    if (days.length === 0) return { current: 0, best: 0 };

    var daySet = {};
    days.forEach(function (d) { daySet[d] = true; });

    // Sequência atual: conta dias consecutivos terminando hoje ou ontem.
    var current = 0;
    var cursor = new Date();
    var todayKey = todayStr();
    if (!daySet[todayKey]) {
      cursor.setDate(cursor.getDate() - 1);
    }
    while (true) {
      var key = cursor.toISOString().slice(0, 10);
      if (daySet[key]) {
        current += 1;
        cursor.setDate(cursor.getDate() - 1);
      } else {
        break;
      }
    }

    // Melhor sequência: maior trecho de dias consecutivos no histórico.
    var best = 0, run = 0, prevDate = null;
    days.forEach(function (d) {
      var date = new Date(d + 'T00:00:00');
      if (prevDate) {
        var diffDays = Math.round((date - prevDate) / 86400000);
        run = diffDays === 1 ? run + 1 : 1;
      } else {
        run = 1;
      }
      best = Math.max(best, run);
      prevDate = date;
    });

    return { current: current, best: best };
  }

  function getLastNDaysCounts(n) {
    var days = getActivityDays();
    var sessions = read(KEYS.sessions, []);
    var reviews = read(KEYS.cardReviews, []);
    var questaoRespostas = read(KEYS.questaoRespostas, []);
    var tasks = read(KEYS.tasks, []);

    var countByDay = {};
    function bump(dateStr) {
      countByDay[dateStr] = (countByDay[dateStr] || 0) + 1;
    }
    sessions.forEach(function (s) { bump(s.date); });
    reviews.forEach(function (r) { bump(r.date); });
    questaoRespostas.forEach(function (r) { bump(r.date); });
    tasks.forEach(function (t) { if (t.done && t.completedAt) bump(t.completedAt); });

    var result = [];
    for (var i = n - 1; i >= 0; i--) {
      var d = new Date();
      d.setDate(d.getDate() - i);
      var key = d.toISOString().slice(0, 10);
      result.push({
        date: key,
        label: d.toLocaleDateString('pt-BR', { weekday: 'short' }).slice(0, 3),
        count: countByDay[key] || 0
      });
    }
    return result;
  }

  return {
    KEYS: KEYS,
    read: read,
    write: write,
    todayStr: todayStr,
    makeId: makeId,
    recordActivity: recordActivity,
    getStreaks: getStreaks,
    getLastNDaysCounts: getLastNDaysCounts
  };
})();
