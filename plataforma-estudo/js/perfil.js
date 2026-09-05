// Personagem: XP acumulado e nível, exibidos no cabeçalho do app.
var Perfil = (function () {
  var NIVEIS = [
    { titulo: 'Bacharel Perdido', min: 0 },
    { titulo: 'Estagiário', min: 100 },
    { titulo: 'Jurista em Formação', min: 250 },
    { titulo: 'Advogado Aprendiz', min: 500 },
    { titulo: 'Defensor da Constituição', min: 900 },
    { titulo: 'Mestre das Leis', min: 1500 },
    { titulo: 'Guardião da OAB', min: 2500 }
  ];

  var els = {};
  var RING_CIRCUMFERENCE = 106.8; // 2 * PI * 17 (raio do anel de nível)

  function getXp() {
    return Storage.read(Storage.KEYS.perfilXp, 0);
  }

  function getNivelInfo(xp) {
    var idx = 0;
    for (var i = 0; i < NIVEIS.length; i++) {
      if (xp >= NIVEIS[i].min) idx = i;
    }
    var atual = NIVEIS[idx];
    var proximo = NIVEIS[idx + 1];
    var progressoPct = proximo
      ? Math.round(((xp - atual.min) / (proximo.min - atual.min)) * 100)
      : 100;
    return {
      numero: idx + 1,
      titulo: atual.titulo,
      xp: xp,
      proximoXp: proximo ? proximo.min : null,
      progressoPct: Math.max(0, Math.min(100, progressoPct))
    };
  }

  function addXp(quantidade) {
    var xpAntes = getXp();
    var infoAntes = getNivelInfo(xpAntes);
    var xpDepois = xpAntes + quantidade;
    Storage.write(Storage.KEYS.perfilXp, xpDepois);
    var infoDepois = getNivelInfo(xpDepois);
    refresh();
    return { subiuNivel: infoDepois.numero > infoAntes.numero, nivelInfo: infoDepois, xpGanho: quantidade };
  }

  function refresh() {
    var info = getNivelInfo(getXp());
    els.nivelLabel.textContent = info.titulo;
    els.nivelNumero.textContent = String(info.numero);
    els.nivelRingFill.style.strokeDashoffset = String(RING_CIRCUMFERENCE * (1 - info.progressoPct / 100));
    els.xpLabel.textContent = info.proximoXp !== null
      ? info.xp + ' / ' + info.proximoXp + ' XP'
      : info.xp + ' XP (nível máximo)';
    els.xpBarFill.style.width = info.progressoPct + '%';
    return info;
  }

  function init() {
    els.nivelLabel = document.getElementById('perfil-nivel');
    els.nivelNumero = document.getElementById('nivel-numero');
    els.nivelRingFill = document.getElementById('nivel-ring-fill');
    els.xpLabel = document.getElementById('perfil-xp-label');
    els.xpBarFill = document.getElementById('perfil-xp-bar-fill');
    refresh();
  }

  return { init: init, refresh: refresh, addXp: addXp, getXp: getXp, getNivelInfo: getNivelInfo };
})();
