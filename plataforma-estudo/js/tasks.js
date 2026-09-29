// Lista de tarefas simples, destacando sempre a próxima tarefa a fazer
// para reduzir a sobrecarga visual de uma lista longa.
var Tasks = (function () {
  var els = {};

  function loadTasks() {
    return Storage.read(Storage.KEYS.tasks, []);
  }

  function saveTasks(tasks) {
    Storage.write(Storage.KEYS.tasks, tasks);
  }

  function addTask(text) {
    var tasks = loadTasks();
    tasks.push({ id: Storage.makeId(), text: text, done: false, completedAt: null });
    saveTasks(tasks);
    render();
  }

  function toggleTask(id) {
    var tasks = loadTasks();
    var task = tasks.find(function (t) { return t.id === id; });
    if (!task) return;
    task.done = !task.done;
    task.completedAt = task.done ? Storage.todayStr() : null;
    saveTasks(tasks);
    if (task.done) {
      Storage.recordActivity();
      if (window.Progress) Progress.refresh();
      if (window.App) App.refreshStreakBadge();
    }
    render();
  }

  function deleteTask(id) {
    saveTasks(loadTasks().filter(function (t) { return t.id !== id; }));
    render();
  }

  function clearCompleted() {
    saveTasks(loadTasks().filter(function (t) { return !t.done; }));
    render();
  }

  function render() {
    var tasks = loadTasks();
    var pending = tasks.filter(function (t) { return !t.done; });

    if (pending.length > 0) {
      els.nextBox.hidden = false;
      els.nextText.textContent = pending[0].text;
    } else {
      els.nextBox.hidden = true;
    }

    els.list.innerHTML = '';
    tasks.forEach(function (task) {
      var li = document.createElement('li');
      li.className = task.done ? 'done' : '';

      var checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.className = 'task-checkbox';
      checkbox.checked = task.done;
      checkbox.setAttribute('aria-label', 'Marcar tarefa "' + task.text + '" como concluída');
      checkbox.addEventListener('change', function () { toggleTask(task.id); });

      var text = document.createElement('span');
      text.className = 'item-text';
      text.textContent = task.text;

      var del = document.createElement('button');
      del.className = 'delete-btn';
      del.textContent = 'Remover';
      del.addEventListener('click', function () { deleteTask(task.id); });

      li.appendChild(checkbox);
      li.appendChild(text);
      li.appendChild(del);
      els.list.appendChild(li);
    });
  }

  function init() {
    els.form = document.getElementById('task-form');
    els.input = document.getElementById('task-input');
    els.list = document.getElementById('task-list');
    els.nextBox = document.getElementById('next-task-box');
    els.nextText = document.getElementById('next-task-text');
    els.clearBtn = document.getElementById('clear-done-btn');

    els.form.addEventListener('submit', function (evt) {
      evt.preventDefault();
      var text = els.input.value.trim();
      if (!text) return;
      addTask(text);
      els.input.value = '';
    });

    els.clearBtn.addEventListener('click', clearCompleted);

    render();
  }

  return { init: init };
})();
