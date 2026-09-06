// Resumo Fácil: leitura leve, "modo explica pra uma criança de 5 anos",
// de cada assunto do território — porta de entrada antes de encarar
// questões e lei seca. É só leitura (como Doutrina), não entra nas
// missões nem no mapa de fraquezas.
var ResumoFacil = (function () {
  var els = {};
  var disciplinaId = null;

  function loadTodos() {
    if (!disciplinaId) return Promise.resolve([]);
    return DB.getAllByIndex('resumoFacil', 'disciplinaId', disciplinaId);
  }

  function renderList() {
    return loadTodos().then(function (resumos) {
      els.empty.hidden = resumos.length > 0;
      els.list.innerHTML = '';

      resumos.forEach(function (r) {
        var item = document.createElement('details');
        item.className = 'resumo-facil-item';

        var summary = document.createElement('summary');
        summary.textContent = r.subtema;
        item.appendChild(summary);

        var texto = document.createElement('p');
        texto.className = 'resumo-facil-texto';
        texto.textContent = r.resumoSimples;
        item.appendChild(texto);

        if (r.exemplo) {
          var exemplo = document.createElement('p');
          exemplo.className = 'resumo-facil-exemplo';
          exemplo.textContent = '💡 ' + r.exemplo;
          item.appendChild(exemplo);
        }

        els.list.appendChild(item);
      });
    });
  }

  function setDisciplina(id) {
    disciplinaId = id;
    renderList();
  }

  function init() {
    els.empty = document.getElementById('resumo-facil-empty');
    els.list = document.getElementById('resumo-facil-list');
  }

  return { init: init, setDisciplina: setDisciplina };
})();
