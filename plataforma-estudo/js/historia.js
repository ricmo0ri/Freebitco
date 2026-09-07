// Enredo: um fio narrativo leve por cima dos territórios existentes, pra
// dar contexto emocional ("por que estudar isso") além do "o que" estudar.
// Não cria nenhuma nova regra de progresso — só observa marcos que já
// existem (primeira visita a um território, um território 100% dominado,
// todos os territórios dominados) e comenta sobre eles.
var Historia = (function () {
  var els = {};

  function abrirOverlay(titulo, texto, textoBotao, aoFechar) {
    if (!els.overlay) return;
    els.titulo.textContent = titulo;
    els.texto.textContent = texto;
    els.botao.textContent = textoBotao || 'Continuar';
    els.overlay.hidden = false;
    els.botao.onclick = function () {
      els.overlay.hidden = true;
      if (aoFechar) aoFechar();
    };
  }

  function mostrarIntroGlobal() {
    if (Storage.read(Storage.KEYS.historiaIntroVista, false)) return;
    var intro = HistoriaSeed.INTRO;
    abrirOverlay(intro.titulo, intro.texto, intro.botao, function () {
      Storage.write(Storage.KEYS.historiaIntroVista, true);
    });
  }

  // Chamado ao abrir um território (aba Território) — mostra o "porquê"
  // daquele assunto na primeira visita, e nunca mais depois disso.
  function mostrarLoreTerritorio(disciplina) {
    if (!disciplina) return;
    var vistos = Storage.read(Storage.KEYS.historiaTerritoriosVistos, []);
    if (vistos.indexOf(disciplina.id) !== -1) return;

    var lore = HistoriaSeed.LORE[disciplina.nome];
    vistos.push(disciplina.id);
    Storage.write(Storage.KEYS.historiaTerritoriosVistos, vistos);
    if (!lore) return;

    var nomeExibicao = disciplina.territorio || disciplina.nome;
    abrirOverlay('📜 ' + nomeExibicao, lore.abertura, 'Entendi, vamos estudar!');
  }

  // Chamado depois de qualquer resposta que leve um tema a "Dominado"
  // (ver missao.js:celebrarDominio). Verifica se ISSO fez o território
  // inteiro virar dominado e, em caso positivo, comemora uma única vez.
  function celebrarReinoLibertado(disciplinaId, disciplinas) {
    var libertados = Storage.read(Storage.KEYS.reinosLibertados, []);
    if (libertados.indexOf(disciplinaId) !== -1) return;

    var d = disciplinas.find(function (x) { return x.id === disciplinaId; });
    if (!d) return;

    var status = window.Fraquezas ? Fraquezas.getStatusPorTema(disciplinaId) : [];
    var dominado = status.length > 0 && status.every(function (s) { return s.status === 'dominado'; });
    if (!dominado) return;

    libertados.push(disciplinaId);
    Storage.write(Storage.KEYS.reinosLibertados, libertados);

    var lore = HistoriaSeed.LORE[d.nome];
    var nomeExibicao = d.territorio || d.nome;
    var mensagem = '🗺️ Reino libertado: ' + nomeExibicao + '! ' + (lore ? lore.liberado : '');
    if (window.Bemestar) Bemestar.mostrarToastConquista(mensagem);

    verificarJornadaCompleta(disciplinas, libertados);
  }

  function verificarJornadaCompleta(disciplinas, libertados) {
    if (Storage.read(Storage.KEYS.historiaFinalVista, false)) return;
    if (disciplinas.length === 0) return;
    var todasLibertadas = disciplinas.every(function (d) { return libertados.indexOf(d.id) !== -1; });
    if (!todasLibertadas) return;

    var final = HistoriaSeed.FINAL;
    abrirOverlay(final.titulo, final.texto, 'Continuar estudando', function () {
      Storage.write(Storage.KEYS.historiaFinalVista, true);
    });
  }

  function init() {
    els.overlay = document.getElementById('historia-overlay');
    els.titulo = document.getElementById('historia-titulo');
    els.texto = document.getElementById('historia-texto');
    els.botao = document.getElementById('historia-botao');
    if (!els.overlay) return;
    mostrarIntroGlobal();
  }

  return {
    init: init,
    mostrarLoreTerritorio: mostrarLoreTerritorio,
    celebrarReinoLibertado: celebrarReinoLibertado
  };
})();
