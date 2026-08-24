// Questões de múltipla escolha (ex: provas e gabaritos da OAB),
// organizadas por disciplina.
var Questoes = (function () {
  var els = {};
  var disciplinaId = null;
  var currentQuestao = null;
  var selectedAltIndex = null;
  var altRowCount = 0;

  function letra(index) {
    return String.fromCharCode(65 + index); // 0 -> A, 1 -> B, ...
  }

  function loadQuestoes() {
    if (!disciplinaId) return Promise.resolve([]);
    return DB.getAllByIndex('questoes', 'disciplinaId', disciplinaId);
  }

  function addAlternativaRow() {
    var rowIndex = altRowCount++;
    var row = document.createElement('div');
    row.className = 'alternativa-row';

    var radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'alternativa-correta';
    radio.value = String(rowIndex);
    radio.setAttribute('aria-label', 'Marcar alternativa ' + letra(rowIndex) + ' como correta');

    var label = document.createElement('span');
    label.className = 'alt-letter';
    label.textContent = letra(rowIndex);

    var input = document.createElement('input');
    input.type = 'text';
    input.className = 'alt-text-input';
    input.placeholder = 'Texto da alternativa ' + letra(rowIndex);

    row.appendChild(radio);
    row.appendChild(label);
    row.appendChild(input);
    els.altInputsContainer.appendChild(row);
  }

  function resetForm() {
    els.altInputsContainer.innerHTML = '';
    altRowCount = 0;
    addAlternativaRow();
    addAlternativaRow();
    addAlternativaRow();
    addAlternativaRow();
  }

  function collectFormAlternativas() {
    var rows = Array.prototype.slice.call(els.altInputsContainer.querySelectorAll('.alternativa-row'));
    var alternativas = [];
    var correctRowIndex = null;

    rows.forEach(function (row) {
      var text = row.querySelector('.alt-text-input').value.trim();
      var radio = row.querySelector('input[type="radio"]');
      if (radio.checked) correctRowIndex = row;
      if (text) alternativas.push({ texto: text, row: row });
    });

    var correctIndex = -1;
    alternativas.forEach(function (alt, i) {
      if (alt.row === correctRowIndex) correctIndex = i;
    });

    return {
      alternativas: alternativas.map(function (alt, i) { return { letra: letra(i), texto: alt.texto }; }),
      correctIndex: correctIndex
    };
  }

  function addQuestao(evt) {
    evt.preventDefault();
    var enunciado = els.enunciadoInput.value.trim();
    var provaOrigem = els.provaInput.value.trim();
    var parsed = collectFormAlternativas();

    if (!enunciado || !disciplinaId || parsed.alternativas.length < 2 || parsed.correctIndex < 0) {
      alert('Preencha o enunciado, ao menos 2 alternativas com texto, e marque qual é a correta.');
      return;
    }

    var questao = {
      id: Storage.makeId(),
      disciplinaId: disciplinaId,
      provaOrigem: provaOrigem,
      enunciado: enunciado,
      alternativas: parsed.alternativas,
      respostaCorreta: parsed.correctIndex
    };

    DB.put('questoes', questao).then(function () {
      els.form.reset();
      resetForm();
      renderList();
      renderReview();
    });
  }

  function deleteQuestao(id) {
    DB.remove('questoes', id).then(function () {
      renderList();
      renderReview();
    });
  }

  function renderReview() {
    return loadQuestoes().then(function (questoes) {
      currentQuestao = questoes.length ? questoes[Math.floor(Math.random() * questoes.length)] : null;
      selectedAltIndex = null;

      if (!currentQuestao) {
        els.empty.hidden = false;
        els.card.hidden = true;
        return;
      }

      els.empty.hidden = true;
      els.card.hidden = false;
      els.origem.textContent = currentQuestao.provaOrigem || 'Questão';
      els.enunciado.textContent = currentQuestao.enunciado;

      els.altList.innerHTML = '';
      currentQuestao.alternativas.forEach(function (alt, i) {
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'alt-option';
        btn.textContent = alt.letra + ') ' + alt.texto;
        btn.addEventListener('click', function () { selectAlt(i, btn); });
        els.altList.appendChild(btn);
      });

      els.confirmBtn.hidden = false;
      els.confirmBtn.disabled = true;
      els.feedback.hidden = true;
      els.proximaBtn.hidden = true;
    });
  }

  function selectAlt(index, btnEl) {
    selectedAltIndex = index;
    Array.prototype.forEach.call(els.altList.querySelectorAll('.alt-option'), function (b) {
      b.classList.remove('selected');
    });
    btnEl.classList.add('selected');
    els.confirmBtn.disabled = false;
  }

  function confirmar() {
    if (selectedAltIndex === null || !currentQuestao) return;
    var acertou = selectedAltIndex === currentQuestao.respostaCorreta;

    els.feedback.hidden = false;
    els.feedback.textContent = acertou
      ? 'Certo!'
      : 'Errado. Resposta correta: ' + currentQuestao.alternativas[currentQuestao.respostaCorreta].letra;
    els.feedback.className = 'questao-feedback ' + (acertou ? 'feedback-certo' : 'feedback-errado');
    els.confirmBtn.hidden = true;
    els.proximaBtn.hidden = false;

    var respostas = Storage.read(Storage.KEYS.questaoRespostas, []);
    respostas.push({ date: Storage.todayStr(), questaoId: currentQuestao.id, acertou: acertou });
    Storage.write(Storage.KEYS.questaoRespostas, respostas);
    Storage.recordActivity();

    if (window.Progress) Progress.refresh();
    if (window.App) App.refreshStreakBadge();
  }

  function renderList() {
    return loadQuestoes().then(function (questoes) {
      els.total.textContent = String(questoes.length);
      els.list.innerHTML = '';
      questoes.forEach(function (q) {
        var li = document.createElement('li');
        var text = document.createElement('span');
        text.className = 'item-text';
        var preview = q.enunciado.length > 60 ? q.enunciado.slice(0, 60) + '…' : q.enunciado;
        text.textContent = q.provaOrigem ? '[' + q.provaOrigem + '] ' + preview : preview;
        var del = document.createElement('button');
        del.className = 'delete-btn';
        del.textContent = 'Remover';
        del.addEventListener('click', function () { deleteQuestao(q.id); });
        li.appendChild(text);
        li.appendChild(del);
        els.list.appendChild(li);
      });
    });
  }

  function setDisciplina(id) {
    disciplinaId = id;
    renderList();
    renderReview();
  }

  function init() {
    els.empty = document.getElementById('questoes-empty');
    els.card = document.getElementById('questao-card');
    els.origem = document.getElementById('questao-origem');
    els.enunciado = document.getElementById('questao-enunciado');
    els.altList = document.getElementById('questao-alternativas');
    els.confirmBtn = document.getElementById('questao-confirmar');
    els.feedback = document.getElementById('questao-feedback');
    els.proximaBtn = document.getElementById('questao-proxima');
    els.form = document.getElementById('questao-form');
    els.provaInput = document.getElementById('questao-prova');
    els.enunciadoInput = document.getElementById('questao-enunciado-input');
    els.altInputsContainer = document.getElementById('alternativas-inputs');
    els.addAltBtn = document.getElementById('add-alternativa-btn');
    els.list = document.getElementById('questoes-list');
    els.total = document.getElementById('questoes-total');

    els.confirmBtn.addEventListener('click', confirmar);
    els.proximaBtn.addEventListener('click', renderReview);
    els.addAltBtn.addEventListener('click', addAlternativaRow);
    els.form.addEventListener('submit', addQuestao);

    resetForm();
  }

  return { init: init, setDisciplina: setDisciplina };
})();
