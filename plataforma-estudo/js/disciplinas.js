// Disciplinas (territórios): agrupam flashcards, questões e chefões, e
// controlam a navegação entre a lista de territórios e o conteúdo de um
// território selecionado.
var Disciplinas = (function () {
  // seedVersion marca em que "leva" cada território padrão foi introduzido,
  // para acrescentar novos territórios padrão em atualizações futuras sem
  // reviver territórios que o usuário já apagou de propósito.
  var TERRITORIOS_PADRAO = [
    { nome: 'Ética', territorio: 'Ordem dos Advogados', icone: '⚖️', seedVersion: 1 },
    { nome: 'Direito Constitucional', territorio: 'Reino da Constituição', icone: '🏛️', seedVersion: 1 },
    { nome: 'Direito Penal', territorio: 'Território Penal', icone: '⚔️', seedVersion: 1 },
    { nome: 'Processo Penal', territorio: 'Tribunal das Sombras', icone: '🕵️', seedVersion: 1 },
    { nome: 'Direito Civil', territorio: 'Reino das Relações Privadas', icone: '📜', seedVersion: 1 },
    { nome: 'Direito do Trabalho', territorio: 'Reino Trabalhista', icone: '💼', seedVersion: 1 },
    { nome: 'Direito Tributário', territorio: 'Cofre dos Tributos', icone: '💰', seedVersion: 1 },
    { nome: 'Direito Empresarial', territorio: 'República Empresarial', icone: '🏢', seedVersion: 1 },
    { nome: 'Direito Administrativo', territorio: 'Fortaleza Administrativa', icone: '🏰', seedVersion: 2 },
    { nome: 'Processo Civil', territorio: 'Labirinto Processual', icone: '📯', seedVersion: 2 },
    { nome: 'Processo do Trabalho', territorio: 'Engrenagem Trabalhista', icone: '⚙️', seedVersion: 2 },
    { nome: 'Direitos Humanos', territorio: 'Santuário dos Direitos Humanos', icone: '🕊️', seedVersion: 2 },
    { nome: 'Direito Ambiental', territorio: 'Floresta Ambiental', icone: '🌳', seedVersion: 2 },
    { nome: 'Direito do Consumidor', territorio: 'Mercado do Consumidor', icone: '🛒', seedVersion: 2 },
    { nome: 'Direito da Criança e do Adolescente', territorio: 'Vila da Infância', icone: '🧒', seedVersion: 2 },
    { nome: 'Direito Internacional', territorio: 'Fronteiras do Mundo', icone: '🌍', seedVersion: 2 },
    { nome: 'Filosofia do Direito', territorio: 'Torre da Filosofia', icone: '🦉', seedVersion: 2 },
    { nome: 'Direito Eleitoral', territorio: 'Arena Eleitoral', icone: '🗳️', seedVersion: 2 },
    { nome: 'Direito Financeiro', territorio: 'Tesouraria do Estado', icone: '🏦', seedVersion: 2 },
    { nome: 'Direito Previdenciário', territorio: 'Reino da Previdência', icone: '👴', seedVersion: 3 }
  ];
  var SEED_VERSION_ATUAL = 3;

  // Territórios que entraram por engano numa leva anterior e não fazem
  // parte do quadro padrão da OAB — removidos automaticamente se ainda
  // estiverem vazios (sem flashcards nem questões do usuário).
  var TERRITORIOS_REMOVER = ['Estatuto do Idoso', 'Direito Agrário'];

  // Renomeações de territórios que já existem, preservando o id (e portanto
  // o conteúdo já cadastrado neles).
  var TERRITORIOS_RENOMEAR = {
    'Estatuto da Criança e do Adolescente': 'Direito da Criança e do Adolescente'
  };

  var els = {};

  function loadAll() {
    return DB.getAll('disciplinas');
  }

  function preencherComMedalha(container, icone, texto) {
    container.innerHTML = '';
    var medalha = document.createElement('span');
    medalha.className = 'icon-medalha';
    medalha.textContent = icone || '📖';
    var label = document.createElement('span');
    label.textContent = texto;
    container.appendChild(medalha);
    container.appendChild(label);
  }

  function disciplinaEstaVazia(disciplina) {
    return Promise.all([
      DB.getAllByIndex('flashcards', 'disciplinaId', disciplina.id),
      DB.getAllByIndex('questoes', 'disciplinaId', disciplina.id),
      DB.getAllByIndex('doutrinas', 'disciplinaId', disciplina.id)
    ]).then(function (resultados) {
      return resultados[0].length === 0 && resultados[1].length === 0 && resultados[2].length === 0;
    });
  }

  function renomearExistentes(existentes) {
    var porNome = {};
    existentes.forEach(function (d) { porNome[d.nome] = d; });

    var renomeacoes = Object.keys(TERRITORIOS_RENOMEAR).filter(function (nomeAntigo) {
      return porNome[nomeAntigo] && !porNome[TERRITORIOS_RENOMEAR[nomeAntigo]];
    });

    return Promise.all(renomeacoes.map(function (nomeAntigo) {
      var disciplina = porNome[nomeAntigo];
      disciplina.nome = TERRITORIOS_RENOMEAR[nomeAntigo];
      return DB.put('disciplinas', disciplina);
    }));
  }

  function removerIndevidos(existentes) {
    var alvos = existentes.filter(function (d) { return TERRITORIOS_REMOVER.indexOf(d.nome) !== -1; });
    return Promise.all(alvos.map(function (disciplina) {
      return disciplinaEstaVazia(disciplina).then(function (vazia) {
        if (vazia) return DB.remove('disciplinas', disciplina.id);
      });
    }));
  }

  function seedTerritoriosPadrao() {
    var versaoAplicada = Storage.read(Storage.KEYS.territoriosSeedVersion, 0);
    if (versaoAplicada >= SEED_VERSION_ATUAL) return Promise.resolve();

    return loadAll()
      .then(function (existentes) {
        return renomearExistentes(existentes).then(function () { return removerIndevidos(existentes); });
      })
      .then(loadAll)
      .then(function (existentes) {
        var nomesExistentes = {};
        existentes.forEach(function (d) { nomesExistentes[d.nome] = true; });

        var faltando = TERRITORIOS_PADRAO.filter(function (t) {
          return t.seedVersion > versaoAplicada && !nomesExistentes[t.nome];
        });

        var salvar = faltando.length
          ? Promise.all(faltando.map(function (t) {
              return DB.put('disciplinas', {
                id: Storage.makeId(),
                nome: t.nome,
                territorio: t.territorio,
                icone: t.icone,
                createdAt: Storage.todayStr()
              });
            }))
          : Promise.resolve();

        return salvar.then(function () {
          Storage.write(Storage.KEYS.territoriosSeedVersion, SEED_VERSION_ATUAL);
        });
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
      DB.removeAllByIndex('questoes', 'disciplinaId', disciplina.id),
      DB.removeAllByIndex('doutrinas', 'disciplinaId', disciplina.id)
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
        preencherComMedalha(open, disciplina.icone, disciplina.territorio || disciplina.nome);
        open.addEventListener('click', function () { openDisciplina(disciplina); });

        var del = document.createElement('button');
        del.className = 'delete-btn';
        del.textContent = 'Remover';
        del.addEventListener('click', function (evt) {
          evt.stopPropagation();
          if (confirm('Remover "' + disciplina.nome + '" e todo o conteúdo dela (flashcards, questões, chefões e doutrina)?')) {
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
    preencherComMedalha(els.detailTitle, disciplina.icone, disciplina.territorio || disciplina.nome);
    Flashcards.setDisciplina(disciplina.id);
    Questoes.setDisciplina(disciplina.id);
    Chefoes.setDisciplina(disciplina.id);
    Doutrina.setDisciplina(disciplina.id);
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
    els.subviewDoutrina.classList.toggle('active', name === 'doutrina');
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
    els.subviewDoutrina = document.getElementById('subview-doutrina');

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
