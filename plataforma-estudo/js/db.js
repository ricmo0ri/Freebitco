// Banco de dados local (IndexedDB) para disciplinas, flashcards e questões.
// Continua 100% no navegador, sem servidor — apenas um armazenamento mais
// estruturado que o localStorage, capaz de indexar por disciplina.
var DB = (function () {
  var DB_NAME = 'estudoTdahDB';
  var DB_VERSION = 2;
  var dbPromise = null;

  function open() {
    if (dbPromise) return dbPromise;
    dbPromise = new Promise(function (resolve, reject) {
      var req = indexedDB.open(DB_NAME, DB_VERSION);
      req.onupgradeneeded = function (evt) {
        var db = evt.target.result;
        if (!db.objectStoreNames.contains('disciplinas')) {
          db.createObjectStore('disciplinas', { keyPath: 'id' });
        }
        if (!db.objectStoreNames.contains('flashcards')) {
          var flashcardsStore = db.createObjectStore('flashcards', { keyPath: 'id' });
          flashcardsStore.createIndex('disciplinaId', 'disciplinaId');
        }
        if (!db.objectStoreNames.contains('questoes')) {
          var questoesStore = db.createObjectStore('questoes', { keyPath: 'id' });
          questoesStore.createIndex('disciplinaId', 'disciplinaId');
        }
        if (!db.objectStoreNames.contains('doutrinas')) {
          var doutrinasStore = db.createObjectStore('doutrinas', { keyPath: 'id' });
          doutrinasStore.createIndex('disciplinaId', 'disciplinaId');
        }
      };
      req.onsuccess = function (evt) { resolve(evt.target.result); };
      req.onerror = function (evt) { reject(evt.target.error); };
    });
    return dbPromise;
  }

  function store(storeName, mode) {
    return open().then(function (db) {
      return db.transaction(storeName, mode).objectStore(storeName);
    });
  }

  function wrapRequest(req) {
    return new Promise(function (resolve, reject) {
      req.onsuccess = function () { resolve(req.result); };
      req.onerror = function () { reject(req.error); };
    });
  }

  function getAll(storeName) {
    return store(storeName, 'readonly').then(function (s) {
      return wrapRequest(s.getAll());
    });
  }

  function getAllByIndex(storeName, indexName, value) {
    return store(storeName, 'readonly').then(function (s) {
      return wrapRequest(s.index(indexName).getAll(value));
    });
  }

  function put(storeName, value) {
    return store(storeName, 'readwrite').then(function (s) {
      return wrapRequest(s.put(value)).then(function () { return value; });
    });
  }

  function remove(storeName, id) {
    return store(storeName, 'readwrite').then(function (s) {
      return wrapRequest(s.delete(id));
    });
  }

  function removeAllByIndex(storeName, indexName, value) {
    return getAllByIndex(storeName, indexName, value).then(function (items) {
      return Promise.all(items.map(function (item) { return remove(storeName, item.id); }));
    });
  }

  return {
    getAll: getAll,
    getAllByIndex: getAllByIndex,
    put: put,
    remove: remove,
    removeAllByIndex: removeAllByIndex
  };
})();
