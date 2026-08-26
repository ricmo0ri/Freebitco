// Banco de dados local (IndexedDB) para disciplinas, flashcards, questões e doutrina.
// Mantém a aplicação 100% offline e oferece operações em lote para pacotes de conteúdo.
var DB = (function () {
  var DB_NAME = 'estudoTdahDB';
  var DB_VERSION = 3;
  var dbPromise = null;
  var STORE_NAMES = ['disciplinas', 'flashcards', 'questoes', 'doutrinas', 'contentPacks'];

  function open() {
    if (dbPromise) return dbPromise;
    dbPromise = new Promise(function (resolve, reject) {
      var req = indexedDB.open(DB_NAME, DB_VERSION);
      req.onupgradeneeded = function (evt) {
        var db = evt.target.result;
        var disciplinaStore;
        if (!db.objectStoreNames.contains('disciplinas')) {
          disciplinaStore = db.createObjectStore('disciplinas', { keyPath: 'id' });
        } else {
          disciplinaStore = evt.target.transaction.objectStore('disciplinas');
        }
        if (!db.objectStoreNames.contains('flashcards')) {
          var flashcardsStore = db.createObjectStore('flashcards', { keyPath: 'id' });
          flashcardsStore.createIndex('disciplinaId', 'disciplinaId');
          flashcardsStore.createIndex('contentId', 'contentId');
        } else {
          var existingFlashcards = evt.target.transaction.objectStore('flashcards');
          if (!existingFlashcards.indexNames.contains('disciplinaId')) existingFlashcards.createIndex('disciplinaId', 'disciplinaId');
          if (!existingFlashcards.indexNames.contains('contentId')) existingFlashcards.createIndex('contentId', 'contentId');
        }
        if (!db.objectStoreNames.contains('questoes')) {
          var questoesStore = db.createObjectStore('questoes', { keyPath: 'id' });
          questoesStore.createIndex('disciplinaId', 'disciplinaId');
          questoesStore.createIndex('contentId', 'contentId');
        } else {
          var existingQuestoes = evt.target.transaction.objectStore('questoes');
          if (!existingQuestoes.indexNames.contains('disciplinaId')) existingQuestoes.createIndex('disciplinaId', 'disciplinaId');
          if (!existingQuestoes.indexNames.contains('contentId')) existingQuestoes.createIndex('contentId', 'contentId');
        }
        if (!db.objectStoreNames.contains('doutrinas')) {
          var doutrinasStore = db.createObjectStore('doutrinas', { keyPath: 'id' });
          doutrinasStore.createIndex('disciplinaId', 'disciplinaId');
          doutrinasStore.createIndex('contentId', 'contentId');
        } else {
          var existingDoutrinas = evt.target.transaction.objectStore('doutrinas');
          if (!existingDoutrinas.indexNames.contains('disciplinaId')) existingDoutrinas.createIndex('disciplinaId', 'disciplinaId');
          if (!existingDoutrinas.indexNames.contains('contentId')) existingDoutrinas.createIndex('contentId', 'contentId');
        }
        if (!db.objectStoreNames.contains('contentPacks')) {
          db.createObjectStore('contentPacks', { keyPath: 'id' });
        }
      };
      req.onsuccess = function (evt) {
        var db = evt.target.result;
        db.onversionchange = function () { db.close(); dbPromise = null; };
        resolve(db);
      };
      req.onerror = function (evt) { dbPromise = null; reject(evt.target.error); };
      req.onblocked = function () { reject(new Error('Feche outras abas da plataforma para atualizar o banco local.')); };
    });
    return dbPromise;
  }

  function wrapRequest(req) {
    return new Promise(function (resolve, reject) {
      req.onsuccess = function () { resolve(req.result); };
      req.onerror = function () { reject(req.error); };
    });
  }

  function getAll(storeName) {
    return open().then(function (db) {
      return wrapRequest(db.transaction(storeName, 'readonly').objectStore(storeName).getAll());
    });
  }

  function getAllByIndex(storeName, indexName, value) {
    return open().then(function (db) {
      return wrapRequest(db.transaction(storeName, 'readonly').objectStore(storeName).index(indexName).getAll(value));
    });
  }

  function put(storeName, value) {
    return open().then(function (db) {
      return wrapRequest(db.transaction(storeName, 'readwrite').objectStore(storeName).put(value)).then(function () { return value; });
    });
  }

  function remove(storeName, id) {
    return open().then(function (db) {
      return wrapRequest(db.transaction(storeName, 'readwrite').objectStore(storeName).delete(id));
    });
  }

  function removeAllByIndex(storeName, indexName, value) {
    return getAllByIndex(storeName, indexName, value).then(function (items) {
      return Promise.all(items.map(function (item) { return remove(storeName, item.id); }));
    });
  }

  function bulkPut(recordsByStore) {
    return open().then(function (db) {
      var names = Object.keys(recordsByStore).filter(function (name) { return STORE_NAMES.indexOf(name) !== -1; });
      return new Promise(function (resolve, reject) {
        if (!names.length) return resolve();
        var tx = db.transaction(names, 'readwrite');
        names.forEach(function (storeName) {
          var objectStore = tx.objectStore(storeName);
          (recordsByStore[storeName] || []).forEach(function (record) { objectStore.put(record); });
        });
        tx.oncomplete = function () { resolve(); };
        tx.onerror = function () { reject(tx.error || new Error('Falha na transação de importação.')); };
        tx.onabort = function () { reject(tx.error || new Error('Importação cancelada.')); };
      });
    });
  }

  function clearAndRestore(recordsByStore) {
    return open().then(function (db) {
      var names = STORE_NAMES.filter(function (name) { return recordsByStore[name]; });
      return new Promise(function (resolve, reject) {
        var tx = db.transaction(names, 'readwrite');
        names.forEach(function (storeName) {
          var objectStore = tx.objectStore(storeName);
          objectStore.clear();
          (recordsByStore[storeName] || []).forEach(function (record) { objectStore.put(record); });
        });
        tx.oncomplete = function () { resolve(); };
        tx.onerror = function () { reject(tx.error || new Error('Falha ao restaurar o backup.')); };
        tx.onabort = function () { reject(tx.error || new Error('Restauração cancelada.')); };
      });
    });
  }

  function exportAll() {
    return Promise.all(STORE_NAMES.map(function (name) {
      return getAll(name).then(function (records) { return { name: name, records: records }; });
    })).then(function (resultados) {
      var output = { database: DB_NAME, databaseVersion: DB_VERSION, exportedAt: new Date().toISOString(), stores: {} };
      resultados.forEach(function (item) { output.stores[item.name] = item.records; });
      return output;
    });
  }

  return {
    DB_NAME: DB_NAME,
    DB_VERSION: DB_VERSION,
    STORE_NAMES: STORE_NAMES,
    open: open,
    getAll: getAll,
    getAllByIndex: getAllByIndex,
    put: put,
    remove: remove,
    removeAllByIndex: removeAllByIndex,
    bulkPut: bulkPut,
    clearAndRestore: clearAndRestore,
    exportAll: exportAll
  };
})();
