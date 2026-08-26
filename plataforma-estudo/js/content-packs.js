// Pacotes versionados de conteúdo e backup do banco local.
// O formato público é documentado em conteudo/content-pack.schema.json.
var ContentPacks = (function () {
  var FORMAT = 'estudo-tdah-content';
  var SCHEMA_VERSION = 1;
  var CONTENT_STORES = ['doutrinas', 'questoes', 'flashcards'];

  function text(value) { return typeof value === 'string' ? value.trim() : ''; }
  function key(value) {
    return text(value).toLocaleLowerCase('pt-BR').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  }
  function now() { return new Date().toISOString(); }
  function error(message) { return { path: '', message: message }; }

  function validateItem(item, index) {
    var problems = [];
    if (!item || typeof item !== 'object') return [error('Item ' + index + ' não é um objeto.')];
    if (!text(item.contentId)) problems.push({ path: 'items[' + index + '].contentId', message: 'contentId é obrigatório.' });
    if (['doctrine', 'question', 'flashcard'].indexOf(item.kind) === -1) problems.push({ path: 'items[' + index + '].kind', message: 'kind deve ser doctrine, question ou flashcard.' });
    if (!text(item.disciplineKey) && !text(item.discipline)) problems.push({ path: 'items[' + index + '].disciplineKey', message: 'disciplina é obrigatória.' });
    if (item.kind === 'doctrine') {
      if (!text(item.title)) problems.push({ path: 'items[' + index + '].title', message: 'title é obrigatório.' });
      if (!text(item.content)) problems.push({ path: 'items[' + index + '].content', message: 'content é obrigatório.' });
    }
    if (item.kind === 'flashcard') {
      if (!text(item.front) || !text(item.back)) problems.push({ path: 'items[' + index + ']', message: 'flashcard exige front e back.' });
    }
    if (item.kind === 'question') {
      if (!text(item.statement)) problems.push({ path: 'items[' + index + '].statement', message: 'statement é obrigatório.' });
      if (!Array.isArray(item.alternatives) || item.alternatives.length < 2) problems.push({ path: 'items[' + index + '].alternatives', message: 'questão exige ao menos duas alternativas.' });
      if (!text(item.correctAnswer)) problems.push({ path: 'items[' + index + '].correctAnswer', message: 'correctAnswer é obrigatório.' });
      if (Array.isArray(item.alternatives) && item.alternatives.length) {
        var letters = item.alternatives.map(function (alt, altIndex) { return text(alt.letter) || String.fromCharCode(65 + altIndex); });
        if (letters.indexOf(text(item.correctAnswer).toUpperCase()) === -1) problems.push({ path: 'items[' + index + '].correctAnswer', message: 'correctAnswer não corresponde a uma alternativa.' });
        item.alternatives.forEach(function (alt, altIndex) { if (!text(alt.text)) problems.push({ path: 'items[' + index + '].alternatives[' + altIndex + '].text', message: 'texto da alternativa é obrigatório.' }); });
      }
    }
    return problems;
  }

  function validate(pkg) {
    var problems = [];
    if (!pkg || typeof pkg !== 'object') return [error('O arquivo precisa conter um objeto JSON.')];
    if (pkg.format !== FORMAT) problems.push({ path: 'format', message: 'format deve ser ' + FORMAT + '.' });
    if (pkg.schemaVersion !== SCHEMA_VERSION) problems.push({ path: 'schemaVersion', message: 'schemaVersion incompatível. Esperado: ' + SCHEMA_VERSION + '.' });
    if (!text(pkg.packId)) problems.push({ path: 'packId', message: 'packId é obrigatório.' });
    if (!Number.isInteger(pkg.packVersion) || pkg.packVersion < 1) problems.push({ path: 'packVersion', message: 'packVersion deve ser um inteiro positivo.' });
    if (!Array.isArray(pkg.disciplines)) problems.push({ path: 'disciplines', message: 'disciplines deve ser uma lista.' });
    if (!Array.isArray(pkg.items)) problems.push({ path: 'items', message: 'items deve ser uma lista.' });
    var ids = {};
    (pkg.items || []).forEach(function (item, index) {
      validateItem(item, index).forEach(function (problem) { problems.push(problem); });
      if (item && text(item.contentId)) {
        if (ids[item.contentId]) problems.push({ path: 'items[' + index + '].contentId', message: 'contentId duplicado no pacote: ' + item.contentId });
        ids[item.contentId] = true;
      }
    });
    return problems;
  }

  function normalizeDiscipline(discipline) {
    if (typeof discipline === 'string') return { key: key(discipline), name: text(discipline), territory: text(discipline), icon: '📖' };
    return { key: key(discipline.key || discipline.name), name: text(discipline.name || discipline.key), territory: text(discipline.territory || discipline.name || discipline.key), icon: text(discipline.icon) || '📖', color: text(discipline.color) || null };
  }

  function makeLocalRecord(item, disciplineId, existing) {
    var base = { id: existing ? existing.id : Storage.makeId(), disciplinaId: disciplineId, contentId: item.contentId, packId: item.packId, packVersion: item.packVersion, updatedAt: item.updatedAt || now() };
    if (item.kind === 'doctrine') return Object.assign({}, existing || {}, base, { titulo: text(item.title), tema: text(item.theme), conteudo: text(item.content), source: item.source || null, legalReferences: Array.isArray(item.legalReferences) ? item.legalReferences : [], status: text(item.status) || 'published', createdAt: (existing && existing.createdAt) || Storage.todayStr() });
    if (item.kind === 'flashcard') {
      var progress = existing || {};
      return Object.assign({}, progress, base, { front: text(item.front), back: text(item.back), interval: typeof progress.interval === 'number' ? progress.interval : 0, repetition: typeof progress.repetition === 'number' ? progress.repetition : 0, easeFactor: typeof progress.easeFactor === 'number' ? progress.easeFactor : 2.5, dueDate: progress.dueDate || Storage.todayStr(), createdAt: (existing && existing.createdAt) || Storage.todayStr() });
    }
    var alternatives = (item.alternatives || []).map(function (alt, index) { return { letra: text(alt.letter) || String.fromCharCode(65 + index), texto: text(alt.text) }; });
    var correctLetter = text(item.correctAnswer).toUpperCase();
    var correctIndex = alternatives.findIndex(function (alt) { return alt.letra === correctLetter; });
    return Object.assign({}, existing || {}, base, { provaOrigem: text(item.origin), tema: text(item.theme), dificuldade: text(item.difficulty) || 'media', enunciado: text(item.statement), alternativas: alternatives, respostaCorreta: correctIndex, letraCorreta: correctLetter, explicacaoCorreta: text(item.explanationCorrect), explicacaoErradas: text(item.explanationWrong), pegadinha: text(item.trap), regraMemoria: text(item.memoryRule), casoAbsurdo: text(item.absurdCase), source: item.source || null, legalReferences: Array.isArray(item.legalReferences) ? item.legalReferences : [], status: text(item.status) || 'published', createdAt: (existing && existing.createdAt) || Storage.todayStr() });
  }

  function importPackage(pkg) {
    var problems = validate(pkg);
    if (problems.length) return Promise.reject(new Error(problems.slice(0, 8).map(function (p) { return (p.path ? p.path + ': ' : '') + p.message; }).join('\n')));
    return Promise.all([DB.getAll('disciplinas'), DB.getAll('doutrinas'), DB.getAll('questoes'), DB.getAll('flashcards'), DB.getAll('contentPacks')]).then(function (all) {
      var disciplines = all[0], existingByStore = { doutrinas: {}, questoes: {}, flashcards: {} };
      ['doutrinas', 'questoes', 'flashcards'].forEach(function (store, storeIndex) { all[storeIndex + 1].forEach(function (record) { if (record.contentId) existingByStore[store][record.contentId] = record; }); });
      var disciplineByKey = {};
      disciplines.forEach(function (d) { disciplineByKey[key(d.nome || d.territorio)] = d; disciplineByKey[key(d.territorio)] = d; });
      var newDisciplines = [];
      (pkg.disciplines || []).forEach(function (raw) { var d = normalizeDiscipline(raw); if (!disciplineByKey[d.key]) { var created = { id: Storage.makeId(), nome: d.name, territorio: d.territory, icone: d.icon, cor: d.color, contentKey: d.key, createdAt: Storage.todayStr() }; disciplineByKey[d.key] = created; newDisciplines.push(created); } });
      (pkg.items || []).forEach(function (item) { var disciplineKey = key(item.disciplineKey || item.discipline); if (!disciplineByKey[disciplineKey]) { var created = { id: Storage.makeId(), nome: text(item.discipline), territorio: text(item.discipline), icone: '📖', cor: null, contentKey: disciplineKey, createdAt: Storage.todayStr() }; disciplineByKey[disciplineKey] = created; newDisciplines.push(created); } item.packId = pkg.packId; item.packVersion = pkg.packVersion; });
      var recordsByStore = { disciplinas: newDisciplines, doutrinas: [], questoes: [], flashcards: [], contentPacks: [] };
      var stats = { created: 0, updated: 0, skipped: 0, disciplinesCreated: newDisciplines.length, errors: [] };
      (pkg.items || []).forEach(function (item) {
        var d = disciplineByKey[key(item.disciplineKey || item.discipline)];
        var storeName = item.kind === 'doctrine' ? 'doutrinas' : (item.kind === 'question' ? 'questoes' : 'flashcards');
        var existing = existingByStore[storeName][item.contentId];
        if (existing && existing.packId === pkg.packId && Number(existing.packVersion) >= Number(pkg.packVersion)) { stats.skipped++; return; }
        recordsByStore[storeName].push(makeLocalRecord(item, d.id, existing));
        if (existing) stats.updated++; else stats.created++;
      });
      recordsByStore.contentPacks.push({ id: pkg.packId, packId: pkg.packId, version: pkg.packVersion, title: text(pkg.title), importedAt: now(), itemCount: pkg.items.length });
      return DB.bulkPut(recordsByStore).then(function () { return stats; });
    });
  }

  function downloadJson(filename, data) {
    var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json;charset=utf-8' });
    var url = URL.createObjectURL(blob); var a = document.createElement('a'); a.href = url; a.download = filename; document.body.appendChild(a); a.click(); a.remove(); setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
  }

  function exportBackup() { return Promise.all([DB.exportAll(), Promise.resolve(Storage.KEYS)]).then(function (values) { var backup = values[0]; backup.format = 'estudo-tdah-backup'; backup.schemaVersion = 1; backup.localStorage = {}; Object.keys(Storage.KEYS).forEach(function (name) { var storageKey = Storage.KEYS[name]; backup.localStorage[storageKey] = Storage.read(storageKey, null); }); return backup; }); }
  function restoreBackup(backup) { if (!backup || backup.format !== 'estudo-tdah-backup' || !backup.stores) return Promise.reject(new Error('Arquivo de backup inválido.')); return DB.clearAndRestore(backup.stores).then(function () { Object.keys(backup.localStorage || {}).forEach(function (storageKey) { var value = backup.localStorage[storageKey]; if (value === null || typeof value === 'undefined') localStorage.removeItem(storageKey); else localStorage.setItem(storageKey, JSON.stringify(value)); }); }); }
  function readFile(file) { return new Promise(function (resolve, reject) { var reader = new FileReader(); reader.onload = function () { try { resolve(JSON.parse(reader.result)); } catch (e) { reject(new Error('O arquivo não contém JSON válido.')); } }; reader.onerror = function () { reject(reader.error); }; reader.readAsText(file); }); }
  function importFromFile(file) { return readFile(file).then(importPackage); }
  function restoreFromFile(file) { return readFile(file).then(restoreBackup); }

  function init() {
    var packInput = document.getElementById('content-pack-input');
    var packButton = document.getElementById('content-pack-import-btn');
    var backupButton = document.getElementById('backup-export-btn');
    var restoreInput = document.getElementById('backup-restore-input');
    var restoreButton = document.getElementById('backup-restore-btn');
    var status = document.getElementById('data-tools-status');
    if (!packInput || !packButton || !backupButton || !restoreInput || !restoreButton || !status) return;
    function show(message, isError) { status.textContent = message; status.classList.toggle('error-text', !!isError); }
    packButton.addEventListener('click', function () {
      var file = packInput.files[0];
      if (!file) return show('Selecione um pacote JSON.', true);
      packButton.disabled = true; show('Validando e importando pacote...', false);
      importFromFile(file).then(function (stats) {
        show('Pacote importado: ' + stats.created + ' novos, ' + stats.updated + ' atualizados, ' + stats.skipped + ' ignorados e ' + stats.disciplinesCreated + ' disciplinas criadas.', false);
        packInput.value = '';
        if (window.Disciplinas) Disciplinas.renderList();
      }).catch(function (err) { show('Não foi possível importar: ' + err.message, true); }).then(function () { packButton.disabled = false; });
    });
    backupButton.addEventListener('click', function () {
      backupButton.disabled = true; show('Preparando backup...', false);
      exportBackup().then(function (backup) { downloadJson('estudo-tdah-backup-' + Storage.todayStr() + '.json', backup); show('Backup baixado com conteúdo, progresso e preferências locais.', false); }).catch(function (err) { show('Não foi possível gerar o backup: ' + err.message, true); }).then(function () { backupButton.disabled = false; });
    });
    restoreButton.addEventListener('click', function () {
      var file = restoreInput.files[0];
      if (!file) return show('Selecione um arquivo de backup JSON.', true);
      if (!window.confirm('A restauração substituirá o conteúdo e as preferências locais atuais. Continuar?')) return;
      restoreButton.disabled = true; show('Restaurando backup...', false);
      restoreFromFile(file).then(function () { show('Backup restaurado. A página será recarregada para atualizar a interface.', false); setTimeout(function () { window.location.reload(); }, 700); }).catch(function (err) { show('Não foi possível restaurar: ' + err.message, true); }).then(function () { restoreButton.disabled = false; });
    });
  }

  return { FORMAT: FORMAT, SCHEMA_VERSION: SCHEMA_VERSION, init: init, validate: validate, importPackage: importPackage, importFromFile: importFromFile, exportBackup: exportBackup, restoreFromFile: restoreFromFile, downloadJson: downloadJson };
})();
