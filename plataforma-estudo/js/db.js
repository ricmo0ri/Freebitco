// Banco de dados local (IndexedDB) para disciplinas, flashcards e questões.
// Continua 100% no navegador, sem servidor — apenas um armazenamento mais
// estruturado que o localStorage, capaz de indexar por disciplina.
var DB = (function () {
  var DB_NAME = 'estudoTdahDB';
  var DB_VERSION = 6;
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
        if (!db.objectStoreNames.contains('leiSeca')) {
          var leiSecaStore = db.createObjectStore('leiSeca', { keyPath: 'id' });
          leiSecaStore.createIndex('disciplinaId', 'disciplinaId');
        }
        if (!db.objectStoreNames.contains('resumoFacil')) {
          var resumoFacilStore = db.createObjectStore('resumoFacil', { keyPath: 'id' });
          resumoFacilStore.createIndex('disciplinaId', 'disciplinaId');
        }
      };
      req.onsuccess = function (evt) {
        var db = evt.target.result;
        // Se outra aba/janela deste app tentar abrir uma versão mais nova
        // do banco depois, fecha esta conexão de bom grado — sem isso, essa
        // aba antiga ficaria seguindo aberta e bloquearia a outra pra sempre.
        db.onversionchange = function () { db.close(); };
        resolve(db);
      };
      req.onerror = function (evt) { reject(evt.target.error); };
      req.onblocked = function () {
        // Só acontece se outra aba/janela deste mesmo app já estiver aberta
        // com uma versão mais antiga do banco — sem essa outra aba fechar,
        // esta ficaria travada esperando pra sempre, sem nenhum erro visível.
        alert('Este app está aberto em outra aba ou janela com uma versão mais antiga. Feche todas as outras abas deste app e recarregue esta página.');
      };
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
