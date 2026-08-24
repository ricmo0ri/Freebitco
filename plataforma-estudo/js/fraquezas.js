// Mapa de fraquezas: classifica cada tema (assunto) com base no histórico
// real de respostas, não em um acerto isolado. Usado para colorir temas
// dentro de um território e para priorizar o que entra nas missões.
var Fraquezas = (function () {
  var JANELA = 8; // considera só as últimas N respostas de cada tema

  function agruparRespostas() {
    var respostas = Storage.read(Storage.KEYS.questaoRespostas, []);
    var grupos = {};
    respostas.forEach(function (r) {
      if (!r.disciplinaId) return;
      var tema = r.tema || 'Geral';
      var chave = r.disciplinaId + '::' + tema;
      if (!grupos[chave]) {
        grupos[chave] = { disciplinaId: r.disciplinaId, tema: tema, respostas: [] };
      }
      grupos[chave].respostas.push(r);
    });
    return grupos;
  }

  function classificar(respostas) {
    var recentes = respostas.slice(-JANELA);
    var total = recentes.length;
    var acertos = recentes.filter(function (r) { return r.acertou; }).length;
    var pct = total ? Math.round((acertos / total) * 100) : 0;

    var status;
    if (total < 3) {
      status = 'desenvolvimento';
    } else if (pct < 40) {
      status = 'critico';
    } else if (pct < 65) {
      status = 'fraco';
    } else if (pct < 85 || total < 4) {
      status = 'desenvolvimento';
    } else {
      status = 'dominado';
    }

    return { total: total, acertos: acertos, pct: pct, status: status };
  }

  var STATUS_META = {
    critico: { emoji: '🔴', label: 'Crítico' },
    fraco: { emoji: '🟠', label: 'Fraco' },
    desenvolvimento: { emoji: '🟡', label: 'Em desenvolvimento' },
    dominado: { emoji: '🟢', label: 'Dominado' }
  };

  function getStatusPorTema(disciplinaId) {
    var grupos = agruparRespostas();
    var resultado = [];
    Object.keys(grupos).forEach(function (chave) {
      var grupo = grupos[chave];
      if (grupo.disciplinaId !== disciplinaId) return;
      var info = classificar(grupo.respostas);
      resultado.push(Object.assign({ tema: grupo.tema, disciplinaId: disciplinaId }, info, STATUS_META[info.status]));
    });
    resultado.sort(function (a, b) { return a.pct - b.pct; });
    return resultado;
  }

  function getTemasFracos(limit) {
    var grupos = agruparRespostas();
    var resultado = [];
    Object.keys(grupos).forEach(function (chave) {
      var grupo = grupos[chave];
      var info = classificar(grupo.respostas);
      if (info.status === 'critico' || info.status === 'fraco') {
        resultado.push(Object.assign({ tema: grupo.tema, disciplinaId: grupo.disciplinaId }, info, STATUS_META[info.status]));
      }
    });
    resultado.sort(function (a, b) { return a.pct - b.pct; });
    return limit ? resultado.slice(0, limit) : resultado;
  }

  function getResumoGeral() {
    var grupos = agruparRespostas();
    var itens = Object.keys(grupos).map(function (chave) {
      var grupo = grupos[chave];
      var info = classificar(grupo.respostas);
      return Object.assign({ tema: grupo.tema, disciplinaId: grupo.disciplinaId }, info, STATUS_META[info.status]);
    });
    var maisFraco = itens
      .filter(function (i) { return i.status === 'critico' || i.status === 'fraco'; })
      .sort(function (a, b) { return a.pct - b.pct; })[0] || null;
    var maisForte = itens
      .filter(function (i) { return i.status === 'dominado'; })
      .sort(function (a, b) { return b.pct - a.pct; })[0] || null;
    return { maisFraco: maisFraco, maisForte: maisForte };
  }

  return {
    STATUS_META: STATUS_META,
    getStatusPorTema: getStatusPorTema,
    getTemasFracos: getTemasFracos,
    getResumoGeral: getResumoGeral
  };
})();
