// Recursos de bem-estar pensados para TDAH: pausa guiada obrigatória ao fim
// do timer, aviso gentil de hiperfoco, e um "tin" curto de conquista em
// marcos (combo, crítico) — tudo opcional e silenciável.
var Bemestar = (function () {
  var els = {};
  var vigiaIniciado = false;
  var jaAvisouHiperfoco = false;
  var LIMITE_HIPERFOCO_MIN = 50;

  function isSomLigado() {
    return Storage.read(Storage.KEYS.somConquistas, true);
  }

  function tocarTom(freqs) {
    if (!isSomLigado()) return;
    try {
      var ctx = new (window.AudioContext || window.webkitAudioContext)();
      freqs.forEach(function (freq, i) {
        var osc = ctx.createOscillator();
        var gain = ctx.createGain();
        osc.frequency.value = freq;
        osc.connect(gain);
        gain.connect(ctx.destination);
        var start = ctx.currentTime + i * 0.09;
        gain.gain.setValueAtTime(0.0001, start);
        gain.gain.exponentialRampToValueAtTime(0.15, start + 0.015);
        gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.16);
        osc.start(start);
        osc.stop(start + 0.18);
      });
    } catch (e) { /* áudio indisponível: silencioso */ }
  }

  function tocarConquista() {
    tocarTom([784, 988]);
  }

  function tocarConquistaGrande() {
    tocarTom([659, 880, 1175]);
  }

  // ---------- overlay genérico ----------

  function fecharOverlay() {
    els.overlay.hidden = true;
    els.overlay.classList.remove('overlay-pausa');
    if (els._timer) { clearInterval(els._timer); els._timer = null; }
  }

  function mostrarOverlay(opts) {
    els.overlay.classList.remove('overlay-pausa');
    els.titulo.textContent = opts.titulo;
    els.mensagem.textContent = opts.mensagem;
    els.acaoPrincipal.textContent = opts.textoAcaoPrincipal;
    els.acaoPrincipal.disabled = false;
    els.acaoSecundaria.textContent = opts.textoSecundario || '';
    els.acaoSecundaria.hidden = !opts.textoSecundario;

    els.acaoPrincipal.onclick = function () {
      fecharOverlay();
      if (opts.aoConfirmar) opts.aoConfirmar();
    };
    els.acaoSecundaria.onclick = function () {
      fecharOverlay();
      if (opts.aoFechar) opts.aoFechar();
    };

    els.overlay.hidden = false;
  }

  // ---------- pausa guiada (fim do timer de foco) ----------

  function mostrarPausaGuiada() {
    var segundos = 20;
    els.overlay.classList.add('overlay-pausa');
    els.titulo.textContent = '🌿 Pausa guiada';
    els.mensagem.textContent = 'Respire fundo, alongue o pescoço e os ombros. Solte o celular por alguns segundos.';
    els.acaoSecundaria.textContent = 'Pular pausa';
    els.acaoSecundaria.hidden = false;
    els.acaoPrincipal.textContent = 'Continuar (' + segundos + ')';
    els.acaoPrincipal.disabled = true;

    els.acaoSecundaria.onclick = function () { fecharOverlay(); };
    els.acaoPrincipal.onclick = null;

    els._timer = setInterval(function () {
      segundos -= 1;
      if (segundos <= 0) {
        clearInterval(els._timer);
        els._timer = null;
        els.acaoPrincipal.textContent = 'Continuar';
        els.acaoPrincipal.disabled = false;
        els.acaoPrincipal.onclick = function () { fecharOverlay(); };
      } else {
        els.acaoPrincipal.textContent = 'Continuar (' + segundos + ')';
      }
    }, 1000);

    els.overlay.hidden = false;
  }

  // ---------- vigia de hiperfoco ----------

  function iniciarVigiaHiperfoco() {
    if (vigiaIniciado) return;
    vigiaIniciado = true;
    var inicio = Date.now();
    setInterval(function () {
      if (jaAvisouHiperfoco) return;
      var minutosAtivos = (Date.now() - inicio) / 60000;
      if (minutosAtivos >= LIMITE_HIPERFOCO_MIN) {
        jaAvisouHiperfoco = true;
        mostrarOverlay({
          titulo: '🧠 Aviso de hiperfoco',
          mensagem: 'Você está nessa tela há bastante tempo sem pausa. Isso pode ser hiperfoco — vale a pena parar um pouco?',
          textoAcaoPrincipal: 'Continuar estudando',
          textoSecundario: 'Vou fazer uma pausa'
        });
      }
    }, 60000);
  }

  function init() {
    els.overlay = document.getElementById('bemestar-overlay');
    els.titulo = document.getElementById('bemestar-titulo');
    els.mensagem = document.getElementById('bemestar-mensagem');
    els.acaoPrincipal = document.getElementById('bemestar-acao-principal');
    els.acaoSecundaria = document.getElementById('bemestar-acao-secundaria');
  }

  return {
    init: init,
    mostrarOverlay: mostrarOverlay,
    mostrarPausaGuiada: mostrarPausaGuiada,
    iniciarVigiaHiperfoco: iniciarVigiaHiperfoco,
    tocarConquista: tocarConquista,
    tocarConquistaGrande: tocarConquistaGrande
  };
})();
