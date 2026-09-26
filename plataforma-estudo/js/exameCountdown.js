// Cronograma e contagem regressiva do 48º Exame de Ordem — cartão fixo no
// topo da tela de Missão (a tela padrão ao abrir o app), pra manter a data-
// alvo sempre visível durante o estudo.
var ExameCountdown = (function () {
  var MARCOS = [
    { label: 'Publicação do Edital', data: '2026-09-21' },
    { label: 'Início das Inscrições', data: '2026-09-28' },
    { label: 'Fim das Inscrições', data: '2026-10-05', nota: 'Taxa de inscrição: R$ 350,00' },
    { label: '1ª Fase — Prova Objetiva', data: '2027-01-10' },
    { label: '2ª Fase — Prova Prático-Profissional', data: '2027-02-28' }
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
    var proximo = null;
    for (var i = 0; i < MARCOS.length; i++) {
      var data = parseData(MARCOS[i].data);
      if (data >= hj) { proximo = { marco: MARCOS[i], data: data }; break; }
    }

    refs.destaque.innerHTML = '';
    var numero = document.createElement('p');
    numero.className = 'exame-countdown-numero';
    var legenda = document.createElement('p');
    legenda.className = 'exame-countdown-legenda';

    if (proximo) {
      var dias = diasEntre(hj, proximo.data);
      numero.textContent = dias === 0 ? 'É HOJE!' : (dias + (dias === 1 ? ' dia' : ' dias'));
      legenda.textContent = (dias === 0 ? 'É o dia de: ' : 'até ') + proximo.marco.label;
    } else {
      numero.textContent = '🏁';
      legenda.textContent = 'Cronograma do 48º Exame concluído.';
    }
    refs.destaque.appendChild(numero);
    refs.destaque.appendChild(legenda);

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
