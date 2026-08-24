// Disciplinas (territórios): agrupam flashcards, questões e chefões, e
// controlam a navegação entre a lista de territórios e o conteúdo de um
// território selecionado.
var Disciplinas = (function () {
  var TERRITORIOS_PADRAO = [
    { nome: 'Ética', territorio: 'Ordem dos Advogados', icone: '⚖️' },
    { nome: 'Direito Constitucional', territorio: 'Reino da Constituição', icone: '🏛️' },
    { nome: 'Direito Penal', territorio: 'Território Penal', icone: '⚔️' },
    { nome: 'Processo Penal', territorio: 'Tribunal das Sombras', icone: '🕵️' },
    { nome: 'Direito Civil', territorio: 'Reino das Relações Privadas', icone: '📜' },
    { nome: 'Direito do Trabalho', territorio: 'Reino Trabalhista', icone: '💼' },
    { nome: 'Direito Tributário', territorio: 'Cofre dos Tributos', icone: '💰' },
    { nome: 'Direito Empresarial', territorio: 'República Empresarial', icone: '🏢' }
  ];

  var els = {};

  function loadAll() {
    return DB.getAll('disciplinas');
  }

  function seedTerritoriosPadrao() {
    return loadAll().then(function (existentes) {
      if (existentes.length > 0) return;
      return Promise.all(TERRITORIOS_PADRAO.map(function (t) {
        return DB.put('disciplinas', {
          id: Storage.makeId(),
          nome: t.nome,
          territorio: t.territorio,
          icone: t.icone,
          createdAt: Storage.todayStr()
        });
      }));
    });
  }

  function create(nome) {
    var disciplina = {
      id: Storage.makeId(),
      nome: nome,
      territorio: nome,
      icone: '📖',
      createdAt: Storage.todayStr()
    };
    return DB.put('disciplinas', disciplina).then(renderList);
  }

  function remove(disciplina) {
    return Promise.all([
      DB.remove('disciplinas', disciplina.id),
      DB.removeAllByIndex('flashcards', 'disciplinaId', disciplina.id),
      DB.removeAllByIndex('questoes', 'disciplinaId', disciplina.id)
    ]).then(renderList);
  }

  function renderList() {
    return loadAll().then(function (disciplinas) {
      els.list.innerHTML = '';
      if (disciplinas.length === 0) {
        var empty = document.createElement('p');
        empty.className = 'empty-state';
        empty.textContent = 'Nenhum território ainda. Adicione o primeiro acima.';
        els.list.appendChild(empty);
        return;
      }
      disciplinas.forEach(function (disciplina) {
        var li = document.createElement('li');

        var open = document.createElement('button');
        open.type = 'button';
        open.className = 'item-text disciplina-open-btn';
        open.textContent = (disciplina.icone || '📖') + ' ' + (disciplina.territorio || disciplina.nome);
        open.addEventListener('click', function () { openDisciplina(disciplina); });

        var del = document.createElement('button');
        del.className = 'delete-btn';
        del.textContent = 'Remover';
        del.addEventListener('click', function (evt) {
          evt.stopPropagation();
          if (confirm('Remover "' + disciplina.nome + '" e todo o conteúdo dela (flashcards, questões e chefões)?')) {
            remove(disciplina);
          }
        });

        li.appendChild(open);
        li.appendChild(del);
        els.list.appendChild(li);
      });
    });
  }

  function openDisciplina(disciplina) {
    els.listView.hidden = true;
    els.detailView.hidden = false;
    els.detailTitle.textContent = (disciplina.icone || '📖') + ' ' + (disciplina.territorio || disciplina.nome);
    Flashcards.setDisciplina(disciplina.id);
    Questoes.setDisciplina(disciplina.id);
    Chefoes.setDisciplina(disciplina.id);
    showSubtab('flashcards');
  }

  function backToList() {
    els.detailView.hidden = true;
    els.listView.hidden = false;
    renderList();
    if (window.Missao) Missao.renderTerritorios();
  }

  function showSubtab(name) {
    els.subtabButtons.forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.subtab === name);
    });
    els.subviewFlashcards.classList.toggle('active', name === 'flashcards');
    els.subviewQuestoes.classList.toggle('active', name === 'questoes');
    els.subviewChefao.classList.toggle('active', name === 'chefao');
  }

  function init() {
    els.listView = document.getElementById('disciplinas-list-view');
    els.detailView = document.getElementById('disciplina-detail-view');
    els.detailTitle = document.getElementById('disciplina-detail-title');
    els.list = document.getElementById('disciplinas-list');
    els.form = document.getElementById('disciplina-form');
    els.input = document.getElementById('disciplina-input');
    els.backBtn = document.getElementById('back-to-disciplinas');
    els.subtabButtons = Array.prototype.slice.call(document.querySelectorAll('.subtab-btn'));
    els.subviewFlashcards = document.getElementById('subview-flashcards');
    els.subviewQuestoes = document.getElementById('subview-questoes');
    els.subviewChefao = document.getElementById('subview-chefao');

    els.form.addEventListener('submit', function (evt) {
      evt.preventDefault();
      var nome = els.input.value.trim();
      if (!nome) return;
      create(nome);
      els.input.value = '';
    });

    els.backBtn.addEventListener('click', backToList);
    els.subtabButtons.forEach(function (btn) {
      btn.addEventListener('click', function () { showSubtab(btn.dataset.subtab); });
    });

    return seedTerritoriosPadrao().then(renderList);
  }

  return { init: init };
})();
