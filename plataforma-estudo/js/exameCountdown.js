// Cronograma e contagem regressiva do 48º Exame de Ordem — cartão fixo no
// topo da tela de Missão (a tela padrão ao abrir o app), pra manter a data-
// alvo sempre visível durante o estudo. O destaque principal é sempre
// "faltam quantos dias para a PROVA" (não pro próximo marco administrativo
// mais próximo) — é o número que importa pro usuário se situar no tempo de
// estudo; inscrição/edital aparecem como aviso secundário quando ainda
// estiverem por vir, e sempre na lista completa abaixo.
var ExameCountdown = (function () {
  var MARCOS = [
    { label: 'Publicação do Edital', data: '2026-09-21' },
    { label: 'Início das Inscrições', data: '2026-09-28' },
    { label: 'Fim das Inscrições', data: '2026-10-05', nota: 'Taxa de inscrição: R$ 350,00' },
    { label: '1ª Fase — Prova Objetiva', data: '2027-01-10', prova: true },
    { label: '2ª Fase — Prova Prático-Profissional', data: '2027-02-28', prova: true }
  ];

  function hoje() {
    var d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }

  function parseData(iso) {
    var partes = iso.split('-').map(Number);
    return new Date(partes[0], partes[1] - 1, partes[2]);
  }

  function diasEntre(a, b) {
    var MS_DIA = 24 * 60 * 60 * 1000;
    return Math.round((b - a) / MS_DIA);
  }

  function formatarData(d) {
    return d.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });
  }

  function render(refs) {
    var hj = hoje();
    var proximaProva = null;
    var proximoAdministrativo = null;
    MARCOS.forEach(function (m) {
      var data = parseData(m.data);
      if (data < hj) return;
      if (m.prova && !proximaProva) proximaProva = { marco: m, data: data };
      if (!m.prova && !proximoAdministrativo) proximoAdministrativo = { marco: m, data: data };
    });

    refs.destaque.innerHTML = '';
    var numero = document.createElement('p');
    numero.className = 'exame-countdown-numero';
    var legenda = document.createElement('p');
    legenda.className = 'exame-countdown-legenda';

    if (proximaProva) {
      var dias = diasEntre(hj, proximaProva.data);
      numero.textContent = dias === 0 ? 'É HOJE!' : (dias + (dias === 1 ? ' dia' : ' dias'));
      legenda.textContent = (dias === 0 ? 'É o dia de: ' : 'até a ') + proximaProva.marco.label;
    } else {
      numero.textContent = '🏁';
      legenda.textContent = 'As duas fases do 48º Exame já ficaram para trás.';
    }
    refs.destaque.appendChild(numero);
    refs.destaque.appendChild(legenda);

    // Aviso secundário: se houver um marco administrativo (inscrição etc.)
    // ainda mais próximo do que a prova em si, mostra separado, pra não se
    // perder o prazo de inscrição por estar de olho só na prova.
    if (proximoAdministrativo && (!proximaProva || proximoAdministrativo.data < proximaProva.data)) {
      var diasAdm = diasEntre(hj, proximoAdministrativo.data);
      var aviso = document.createElement('p');
      aviso.className = 'exame-countdown-aviso';
      aviso.textContent = '⚠️ Antes disso: ' + proximoAdministrativo.marco.label + ' ' +
        (diasAdm === 0 ? 'é hoje!' : ('em ' + diasAdm + (diasAdm === 1 ? ' dia' : ' dias')));
      refs.destaque.appendChild(aviso);
    }

    refs.lista.innerHTML = '';
    MARCOS.forEach(function (m) {
      var data = parseData(m.data);
      var passou = data < hj;
      var li = document.createElement('li');
      li.className = 'exame-countdown-item' + (passou ? ' passou' : '');
      var texto = (passou ? '✅ ' : '⏳ ') + m.label + ': ' + formatarData(data);
      if (m.nota) texto += ' · ' + m.nota;
      li.textContent = texto;
      refs.lista.appendChild(li);
    });
  }

  function init() {
    var destaque = document.getElementById('exame-countdown-destaque');
    var lista = document.getElementById('exame-countdown-lista');
    if (!destaque || !lista) return;
    render({ destaque: destaque, lista: lista });
  }

  return { init: init };
})();
