// Flashcards com repetição espaçada (versão simplificada do algoritmo SM-2).
var Flashcards = (function () {
  var els = {};
  var currentCard = null;
  var revealed = false;

  function loadCards() {
    return Storage.read(Storage.KEYS.cards, []);
  }

  function saveCards(cards) {
    Storage.write(Storage.KEYS.cards, cards);
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
    var cards = loadCards();
    cards.push({
      id: Storage.makeId(),
      front: front,
      back: back,
      interval: 0,
      repetition: 0,
      easeFactor: 2.5,
      dueDate: Storage.todayStr()
    });
    saveCards(cards);
    renderList();
    renderReview();
  }

  function deleteCard(id) {
    saveCards(loadCards().filter(function (c) { return c.id !== id; }));
    renderList();
    renderReview();
  }

  function pickNextDueCard() {
    var due = loadCards().filter(isDue);
    return due.length ? due[0] : null;
  }

  function renderReview() {
    currentCard = pickNextDueCard();
    revealed = false;
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
  }

  function renderList() {
    var cards = loadCards();
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
  }

  function rate(quality) {
    if (!currentCard) return;
    var cards = loadCards();
    var target = cards.find(function (c) { return c.id === currentCard.id; });
    if (target) {
      schedule(target, quality);
      saveCards(cards);
    }

    var reviews = Storage.read(Storage.KEYS.cardReviews, []);
    reviews.push({ date: Storage.todayStr(), cardId: currentCard.id, quality: quality });
    Storage.write(Storage.KEYS.cardReviews, reviews);
    Storage.recordActivity();

    if (window.Progress) Progress.refresh();
    if (window.App) App.refreshStreakBadge();

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
      revealed = true;
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
      if (!front || !back) return;
      addCard(front, back);
      els.frontInput.value = '';
      els.backInput.value = '';
    });

    renderList();
    renderReview();
  }

  return { init: init };
})();
