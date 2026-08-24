// Doutrina: resumos/teoria da matéria, guardados por território.
// É material de referência (leitura), separado de flashcards e questões
// (que são para prática ativa) — por isso não entra nas missões.
var Doutrina = (function () {
  var els = {};
  var disciplinaId = null;

  function loadTodas() {
    if (!disciplinaId) return Promise.resolve([]);
    return DB.getAllByIndex('doutrinas', 'disciplinaId', disciplinaId);
  }

  function addDoutrina(evt) {
    evt.preventDefault();
    var titulo = els.tituloInput.value.trim();
    var tema = els.temaInput.value.trim();
    var conteudo = els.conteudoInput.value.trim();
    if (!titulo || !conteudo || !disciplinaId) return;

    var doutrina = {
      id: Storage.makeId(),
      disciplinaId: disciplinaId,
      titulo: titulo,
      tema: tema,
      conteudo: conteudo,
      createdAt: Storage.todayStr()
    };

    DB.put('doutrinas', doutrina).then(function () {
      els.form.reset();
      renderList();
    });
  }

  function deleteDoutrina(id) {
    DB.remove('doutrinas', id).then(renderList);
  }

  function renderList() {
    return loadTodas().then(function (doutrinas) {
      els.empty.hidden = doutrinas.length > 0;
      els.list.innerHTML = '';

      doutrinas.forEach(function (d) {
        var item = document.createElement('details');
        item.className = 'doutrina-item';

        var summary = document.createElement('summary');
        summary.textContent = (d.tema ? '[' + d.tema + '] ' : '') + d.titulo;
        item.appendChild(summary);

        var conteudo = document.createElement('p');
        conteudo.className = 'doutrina-conteudo';
        conteudo.textContent = d.conteudo;
        item.appendChild(conteudo);

        var del = document.createElement('button');
        del.className = 'delete-btn';
        del.textContent = 'Remover';
        del.addEventListener('click', function () { deleteDoutrina(d.id); });
        item.appendChild(del);

        els.list.appendChild(item);
      });
    });
  }

  function setDisciplina(id) {
    disciplinaId = id;
    renderList();
  }

  function init() {
    els.empty = document.getElementById('doutrina-empty');
    els.list = document.getElementById('doutrina-list');
    els.form = document.getElementById('doutrina-form');
    els.tituloInput = document.getElementById('doutrina-titulo');
    els.temaInput = document.getElementById('doutrina-tema');
    els.conteudoInput = document.getElementById('doutrina-conteudo');

    els.form.addEventListener('submit', addDoutrina);
  }

  return { init: init, setDisciplina: setDisciplina };
})();
