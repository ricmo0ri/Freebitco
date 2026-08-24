// Preferências globais do app. Por enquanto só o modo baixo estímulo:
// reduz cor e animação para dias de sobrecarga sensorial.
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

  function init() {
    els.toggleBtn = document.getElementById('low-stim-toggle');
    els.toggleBtn.addEventListener('click', alternarBaixoEstimulo);
    aplicarBaixoEstimulo(isBaixoEstimuloAtivo());
  }

  return { init: init };
})();
