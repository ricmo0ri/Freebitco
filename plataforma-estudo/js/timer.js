// Timer de foco em sessões curtas, pensado para reduzir sobrecarga (SRD/TDAH).
var Timer = (function () {
  var DEFAULT_MINUTES = 25;
  var selectedMinutes = DEFAULT_MINUTES;
  var remainingSeconds = DEFAULT_MINUTES * 60;
  var intervalId = null;
  var soundOn = true;

  var els = {};

  function formatClock(totalSeconds) {
    var m = Math.floor(totalSeconds / 60);
    var s = totalSeconds % 60;
    return (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
  }

  function updateClockDisplay() {
    els.clock.textContent = formatClock(remainingSeconds);
  }

  function selectDuration(minutes) {
    selectedMinutes = minutes;
    remainingSeconds = minutes * 60;
    updateClockDisplay();
    els.durationButtons.forEach(function (btn) {
      btn.classList.toggle('selected', Number(btn.dataset.minutes) === minutes);
    });
    els.message.textContent = '';
  }

  function playChime() {
    if (!soundOn) return;
    try {
      var ctx = new (window.AudioContext || window.webkitAudioContext)();
      [523.25, 659.25, 783.99].forEach(function (freq, i) {
        var osc = ctx.createOscillator();
        var gain = ctx.createGain();
        osc.frequency.value = freq;
        osc.connect(gain);
        gain.connect(ctx.destination);
        var start = ctx.currentTime + i * 0.18;
        gain.gain.setValueAtTime(0.0001, start);
        gain.gain.exponentialRampToValueAtTime(0.2, start + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.3);
        osc.start(start);
        osc.stop(start + 0.32);
      });
    } catch (e) { /* áudio indisponível: silencioso */ }
  }

  function tick() {
    remainingSeconds -= 1;
    updateClockDisplay();
    if (remainingSeconds <= 0) {
      completeSession();
    }
  }

  function start() {
    if (intervalId) return;
    els.startBtn.hidden = true;
    els.pauseBtn.hidden = false;
    els.message.textContent = '';
    intervalId = setInterval(tick, 1000);
  }

  function pause() {
    clearInterval(intervalId);
    intervalId = null;
    els.startBtn.hidden = false;
    els.pauseBtn.hidden = true;
  }

  function reset() {
    clearInterval(intervalId);
    intervalId = null;
    remainingSeconds = selectedMinutes * 60;
    updateClockDisplay();
    els.startBtn.hidden = false;
    els.pauseBtn.hidden = true;
    els.message.textContent = '';
  }

  function completeSession() {
    clearInterval(intervalId);
    intervalId = null;
    els.startBtn.hidden = false;
    els.pauseBtn.hidden = true;
    els.message.textContent = 'Sessão concluída! Faça uma pequena pausa.';
    playChime();

    var sessions = Storage.read(Storage.KEYS.sessions, []);
    sessions.push({ date: Storage.todayStr(), minutes: selectedMinutes });
    Storage.write(Storage.KEYS.sessions, sessions);
    Storage.recordActivity();

    if (window.Progress) Progress.refresh();
    if (window.App) App.refreshStreakBadge();

    remainingSeconds = selectedMinutes * 60;
    updateClockDisplay();
  }

  function toggleSound() {
    soundOn = !soundOn;
    els.muteBtn.textContent = soundOn ? 'Som: ligado' : 'Som: desligado';
    els.muteBtn.setAttribute('aria-pressed', String(!soundOn));
  }

  function init() {
    els.clock = document.getElementById('timer-clock');
    els.message = document.getElementById('timer-message');
    els.startBtn = document.getElementById('timer-start');
    els.pauseBtn = document.getElementById('timer-pause');
    els.resetBtn = document.getElementById('timer-reset');
    els.muteBtn = document.getElementById('timer-mute');
    els.durationButtons = Array.prototype.slice.call(document.querySelectorAll('.duration-btn'));

    els.durationButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (intervalId) return; // não troca duração com sessão em andamento
        selectDuration(Number(btn.dataset.minutes));
      });
    });

    els.startBtn.addEventListener('click', start);
    els.pauseBtn.addEventListener('click', pause);
    els.resetBtn.addEventListener('click', reset);
    els.muteBtn.addEventListener('click', toggleSound);

    selectDuration(DEFAULT_MINUTES);
  }

  return { init: init, getSelectedMinutes: function () { return selectedMinutes; } };
})();
