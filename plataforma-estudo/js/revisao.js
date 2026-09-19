// Revisão inteligente: em vez do usuário ter que lembrar "preciso revisar
// aquilo de 12 dias atrás", calcula uma sessão curta e pronta a partir dos
// erros, aproveitamento por território, tempo desde o último contato e
// dificuldade. Não renderiza nada sozinho — ProximoPasso consome
// getRecomendacao() pra decidir a ÚNICA recomendação mostrada na tela de
// missão (revisão vs. território novo), em vez de duas sugestões
// concorrentes.
var Revisao = (function () {
  var TAMANHO_ALVO = 8;
  var PESO_DIFICULDADE = { dificil: 2, media: 1, facil: 0 };

  function estatisticasPorQuestao(respostas) {
    var mapa = {};
    respostas.forEach(function (r) {
      if (!mapa[r.questaoId]) mapa[r.questaoId] = { erros: 0, ultimaData: '' };
      if (!r.acertou) mapa[r.questaoId].erros += 1;
      if (r.date > mapa[r.questaoId].ultimaData) mapa[r.questaoId].ultimaData = r.date;
    });
    return mapa;
  }

  function montarFila(questoesTodas, respostas, fracos) {
    var idsFracos = {};
    fracos.forEach(function (f) { idsFracos[f.disciplinaId] = true; });

    var candidatas = questoesTodas.filter(function (q) { return idsFracos[q.disciplinaId]; });
    var stats = estatisticasPorQuestao(respostas);

    candidatas.sort(function (a, b) {
      var sa = stats[a.id] || { erros: 0, ultimaData: '' };
      var sb = stats[b.id] || { erros: 0, ultimaData: '' };
      if (sb.erros !== sa.erros) return sb.erros - sa.erros; // mais errada primeiro
      if (sa.ultimaData !== sb.ultimaData) return (sa.ultimaData || '').localeCompare(sb.ultimaData || ''); // contato mais antigo primeiro
      var pa = PESO_DIFICULDADE[a.dificuldade] || 0;
      var pb = PESO_DIFICULDADE[b.dificuldade] || 0;
      return pb - pa; // entre empates, prioriza a mais difícil
    });

    return candidatas.slice(0, TAMANHO_ALVO);
  }

  function estimarMinutos(quantidade) {
    return Math.max(3, Math.round(quantidade * 1));
  }

  // Retorna uma Promise que resolve para { fracos, fila, minutos } quando há
  // uma revisão válida pra sugerir, ou null quando não há fraqueza nenhuma
  // ou nenhuma questão correspondente pra montar a fila.
  function getRecomendacao() {
    var fracos = Fraquezas.getTemasFracos(3);
    if (fracos.length === 0) return Promise.resolve(null);

    return DB.getAll('questoes').then(function (questoesTodas) {
      var respostas = Storage.read(Storage.KEYS.questaoRespostas, []);
      var fila = montarFila(questoesTodas, respostas, fracos);
      if (fila.length === 0) return null;
      return { fracos: fracos, fila: fila, minutos: estimarMinutos(fila.length) };
    });
  }

  return { getRecomendacao: getRecomendacao };
})();
