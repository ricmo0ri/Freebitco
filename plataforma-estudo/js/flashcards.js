// Flashcards com repetição espaçada (versão simplificada do algoritmo SM-2),
// sempre associados a uma disciplina selecionada em Disciplinas.
var Flashcards = (function () {
  var els = {};
  var disciplinaId = null;
  var currentCard = null;

  function loadCards() {
    if (!disciplinaId) return Promise.resolve([]);
    return DB.getAllByIndex('flashcards', 'disciplinaId', disciplinaId);
  }

  function isDue(card) {
    return card.dueDate <= Storage.todayStr();
  }

  function schedule(card, quality) {
    if (quality === 'dificil') {
      card.repetition = 0;
      card.interval = 1;
      card.easeFactor = Math.max(1.3, card.easeFactor - 0.2);
    } else {
      card.repetition += 1;
      if (card.repetition === 1) {
        card.interval = 1;
      } else if (card.repetition === 2) {
        card.interval = 3;
      } else {
        card.interval = Math.round(card.interval * card.easeFactor);
      }
      if (quality === 'facil') card.easeFactor += 0.1;
    }
    var due = new Date();
    due.setDate(due.getDate() + card.interval);
    card.dueDate = due.toISOString().slice(0, 10);
    return card;
  }

  function addCard(front, back) {
    var card = {
      id: Storage.makeId(),
      disciplinaId: disciplinaId,
      front: front,
      back: back,
      interval: 0,
      repetition: 0,
      easeFactor: 2.5,
      dueDate: Storage.todayStr()
    };
    return DB.put('flashcards', card).then(function () {
      renderList();
      renderReview();
    });
  }

  function deleteCard(id) {
    return DB.remove('flashcards', id).then(function () {
      renderList();
      renderReview();
    });
  }

  function renderReview() {
    return loadCards().then(function (cards) {
      var due = cards.filter(isDue);
      currentCard = due.length ? due[0] : null;
      if (!currentCard) {
        els.empty.hidden = false;
        els.card.hidden = true;
        return;
      }
      els.empty.hidden = true;
      els.card.hidden = false;
      els.front.textContent = currentCard.front;
      els.back.textContent = currentCard.back;
      els.back.hidden = true;
      els.reveal.hidden = false;
      els.rateButtons.hidden = true;
    });
  }

  function renderList() {
    return loadCards().then(function (cards) {
      els.total.textContent = String(cards.length);
      els.list.innerHTML = '';
      cards.forEach(function (card) {
        var li = document.createElement('li');
        var text = document.createElement('span');
        text.className = 'item-text';
        text.textContent = card.front;
        var del = document.createElement('button');
        del.className = 'delete-btn';
        del.textContent = 'Remover';
        del.addEventListener('click', function () { deleteCard(card.id); });
        li.appendChild(text);
        li.appendChild(del);
        els.list.appendChild(li);
      });
    });
  }

  function rate(quality) {
    if (!currentCard) return;
    schedule(currentCard, quality);
    DB.put('flashcards', currentCard).then(function () {
      var reviews = Storage.read(Storage.KEYS.cardReviews, []);
      reviews.push({ date: Storage.todayStr(), cardId: currentCard.id, quality: quality });
      Storage.write(Storage.KEYS.cardReviews, reviews);
      Storage.recordActivity();

      if (window.Progress) Progress.refresh();
      if (window.App) App.refreshStreakBadge();

      renderReview();
    });
  }

  function setDisciplina(id) {
    disciplinaId = id;
    renderList();
    renderReview();
  }

  function init() {
    els.empty = document.getElementById('cards-empty');
    els.card = document.getElementById('review-card');
    els.front = document.getElementById('flashcard-front');
    els.back = document.getElementById('flashcard-back');
    els.reveal = document.getElementById('reveal-btn');
    els.rateButtons = document.getElementById('rate-buttons');
    els.form = document.getElementById('card-form');
    els.frontInput = document.getElementById('card-front');
    els.backInput = document.getElementById('card-back');
    els.list = document.getElementById('card-list');
    els.total = document.getElementById('card-total');

    els.reveal.addEventListener('click', function () {
      els.back.hidden = false;
      els.reveal.hidden = true;
      els.rateButtons.hidden = false;
    });

    els.rateButtons.querySelectorAll('button').forEach(function (btn) {
      btn.addEventListener('click', function () { rate(btn.dataset.quality); });
    });

    els.form.addEventListener('submit', function (evt) {
      evt.preventDefault();
      var front = els.frontInput.value.trim();
      var back = els.backInput.value.trim();
      if (!front || !back || !disciplinaId) return;
      addCard(front, back);
      els.frontInput.value = '';
      els.backInput.value = '';
    });
  }

  return { init: init, setDisciplina: setDisciplina };
})();
