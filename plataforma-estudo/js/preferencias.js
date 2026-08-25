// Preferências globais do app: modo baixo estímulo (reduz cor e animação
// para dias de sobrecarga sensorial) e o tema visual (claro/escuro/sistema).
var Preferencias = (function () {
  var els = {};

  function isBaixoEstimuloAtivo() {
    return Storage.read(Storage.KEYS.lowStim, false);
  }

  function aplicarBaixoEstimulo(ativo) {
    document.body.classList.toggle('low-stim', ativo);
    if (els.toggleBtn) {
      els.toggleBtn.textContent = '🌫️ Modo baixo estímulo: ' + (ativo ? 'ligado' : 'desligado');
      els.toggleBtn.setAttribute('aria-pressed', String(ativo));
    }
  }

  function alternarBaixoEstimulo() {
    var novoValor = !isBaixoEstimuloAtivo();
    Storage.write(Storage.KEYS.lowStim, novoValor);
    aplicarBaixoEstimulo(novoValor);
  }

  function getTema() {
    return Storage.read(Storage.KEYS.tema, 'sistema');
  }

  function aplicarTema(tema) {
    if (tema === 'light' || tema === 'dark') {
      document.documentElement.setAttribute('data-theme', tema);
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    els.temaBotoes.forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.tema === tema);
    });
  }

  function escolherTema(tema) {
    Storage.write(Storage.KEYS.tema, tema);
    aplicarTema(tema);
  }

  function init() {
    els.toggleBtn = document.getElementById('low-stim-toggle');
    els.toggleBtn.addEventListener('click', alternarBaixoEstimulo);
    aplicarBaixoEstimulo(isBaixoEstimuloAtivo());

    els.temaBotoes = Array.prototype.slice.call(document.querySelectorAll('.tema-btn'));
    els.temaBotoes.forEach(function (btn) {
      btn.addEventListener('click', function () { escolherTema(btn.dataset.tema); });
    });
    aplicarTema(getTema());
  }

  return { init: init };
})();
