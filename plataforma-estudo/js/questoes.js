// Questões de múltipla escolha (ex: provas e gabaritos da OAB),
// organizadas por disciplina/território, com o "Método da Questão"
// (explicação, pegadinha, regra de memória) usado no feedback.
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
    var tema = els.temaInput.value.trim();
    var dificuldade = els.dificuldadeInput.value;
    var parsed = collectFormAlternativas();

    if (!enunciado || !disciplinaId || parsed.alternativas.length < 2 || parsed.correctIndex < 0) {
      alert('Preencha o enunciado, ao menos 2 alternativas com texto, e marque qual é a correta.');
      return;
    }

    var questao = {
      id: Storage.makeId(),
      disciplinaId: disciplinaId,
      provaOrigem: provaOrigem,
      tema: tema,
      dificuldade: dificuldade,
      enunciado: enunciado,
      alternativas: parsed.alternativas,
      respostaCorreta: parsed.correctIndex,
      explicacaoCorreta: els.explicacaoInput.value.trim(),
      explicacaoErradas: els.explicacaoErradasInput.value.trim(),
      pegadinha: els.pegadinhaInput.value.trim(),
      regraMemoria: els.regraInput.value.trim(),
      casoAbsurdo: els.casoInput.value.trim()
    };

    DB.put('questoes', questao).then(function () {
      els.form.reset();
      resetForm();
      renderList();
      renderReview();
      if (window.Chefoes) Chefoes.setDisciplina(disciplinaId);
      if (window.Missao) Missao.renderTerritorios();
    });
  }

  function deleteQuestao(id) {
    DB.remove('questoes', id).then(function () {
      renderList();
      renderReview();
      if (window.Chefoes) Chefoes.setDisciplina(disciplinaId);
    });
  }

  function refs() {
    return {
      casoAbsurdo: els.caso,
      origem: els.origem,
      enunciado: els.enunciado,
      altList: els.altList,
      confirmBtn: els.confirmBtn,
      feedback: els.feedback,
      metodo: els.metodo
    };
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
      els.proximaBtn.hidden = true;

      QuestaoCard.render(refs(), currentQuestao, function (i) {
        selectedAltIndex = i;
        els.confirmBtn.disabled = false;
      });
    });
  }

  function confirmar() {
    if (selectedAltIndex === null || !currentQuestao) return;
    var acertou = selectedAltIndex === currentQuestao.respostaCorreta;
    var resultado = Missao.calcularXp(currentQuestao, acertou);
    Missao.registrarResposta(currentQuestao, acertou, resultado);

    QuestaoCard.showFeedback(refs(), currentQuestao, selectedAltIndex, resultado.critico);
    els.proximaBtn.hidden = false;
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
        var prefixo = q.tema ? '[' + q.tema + '] ' : (q.provaOrigem ? '[' + q.provaOrigem + '] ' : '');
        text.textContent = prefixo + preview;
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
    els.caso = document.getElementById('questao-caso');
    els.origem = document.getElementById('questao-origem');
    els.enunciado = document.getElementById('questao-enunciado');
    els.altList = document.getElementById('questao-alternativas');
    els.confirmBtn = document.getElementById('questao-confirmar');
    els.feedback = document.getElementById('questao-feedback');
    els.metodo = document.getElementById('questao-metodo');
    els.proximaBtn = document.getElementById('questao-proxima');

    els.form = document.getElementById('questao-form');
    els.provaInput = document.getElementById('questao-prova');
    els.temaInput = document.getElementById('questao-tema');
    els.dificuldadeInput = document.getElementById('questao-dificuldade');
    els.enunciadoInput = document.getElementById('questao-enunciado-input');
    els.altInputsContainer = document.getElementById('alternativas-inputs');
    els.addAltBtn = document.getElementById('add-alternativa-btn');
    els.explicacaoInput = document.getElementById('questao-explicacao');
    els.explicacaoErradasInput = document.getElementById('questao-explicacao-erradas');
    els.pegadinhaInput = document.getElementById('questao-pegadinha');
    els.regraInput = document.getElementById('questao-regra');
    els.casoInput = document.getElementById('questao-caso-input');

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
