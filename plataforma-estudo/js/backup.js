// Backup/restauração: como o app é 100% offline (file://), todo o progresso
// fica preso à "origem" exata do navegador (caminho da pasta onde o
// index.html está). Trocar de pasta — ex: extrair uma atualização em outro
// lugar — faz o navegador tratar isso como uma instalação nova, do zero.
// Esse módulo exporta tudo (localStorage + IndexedDB) num arquivo .json que
// o usuário pode importar em qualquer cópia do app pra recuperar o
// progresso, independente de onde os arquivos estão.
var Backup = (function () {
  var els = {};

  var STORES = ['disciplinas', 'flashcards', 'questoes', 'doutrinas', 'leiSeca', 'resumoFacil', 'questionario'];

  function coletarLocalStorage() {
    var dados = {};
    for (var i = 0; i < localStorage.length; i++) {
      var chave = localStorage.key(i);
      if (chave && chave.indexOf('estudoTdah.') === 0) {
        dados[chave] = localStorage.getItem(chave);
      }
    }
    return dados;
  }

  function exportar() {
    return Promise.all(STORES.map(function (nome) {
      return DB.getAll(nome).then(function (itens) { return [nome, itens]; });
    })).then(function (resultados) {
      var dbDump = {};
      resultados.forEach(function (par) { dbDump[par[0]] = par[1]; });

      var backup = {
        versaoBackup: 1,
        geradoEm: new Date().toISOString(),
        localStorage: coletarLocalStorage(),
        db: dbDump
      };

      var blob = new Blob([JSON.stringify(backup)], { type: 'application/json' });
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url;
      a.download = 'backup-oab-' + Storage.todayStr() + '.json';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    });
  }

  function importar(file) {
    return file.text().then(function (texto) {
      var backup = JSON.parse(texto);
      if (!backup || typeof backup.localStorage !== 'object' || typeof backup.db !== 'object') {
        throw new Error('Arquivo de backup inválido ou corrompido.');
      }

      // Limpa as chaves atuais do app antes de restaurar, pra não deixar
      // sobras de configuração que não existiam no momento do backup.
      for (var i = localStorage.length - 1; i >= 0; i--) {
        var chave = localStorage.key(i);
        if (chave && chave.indexOf('estudoTdah.') === 0) localStorage.removeItem(chave);
      }
      Object.keys(backup.localStorage).forEach(function (chave) {
        localStorage.setItem(chave, backup.localStorage[chave]);
      });

      var nomesNoBackup = Object.keys(backup.db);
      return nomesNoBackup.reduce(function (promessa, nome) {
        return promessa.then(function () {
          return DB.clear(nome).then(function () {
            return Promise.all(backup.db[nome].map(function (item) { return DB.put(nome, item); }));
          });
        });
      }, Promise.resolve());
    });
  }

  function setStatus(texto) {
    if (els.status) els.status.textContent = texto;
  }

  function init() {
    els.exportBtn = document.getElementById('backup-exportar-btn');
    els.importInput = document.getElementById('backup-importar-input');
    els.status = document.getElementById('backup-status');

    if (els.exportBtn) {
      els.exportBtn.addEventListener('click', function () {
        setStatus('Gerando backup...');
        exportar().then(function () {
          setStatus('✅ Backup baixado — guarde esse arquivo em algum lugar seguro (nuvem, pendrive, e-mail para você mesmo).');
        }).catch(function (e) {
          setStatus('❌ Erro ao gerar backup: ' + e.message);
        });
      });
    }

    if (els.importInput) {
      els.importInput.addEventListener('change', function () {
        var file = els.importInput.files[0];
        if (!file) return;
        var confirmou = confirm(
          'Importar esse backup vai SUBSTITUIR todo o progresso desta cópia do app ' +
          '(XP, nível, sequência, respostas, flashcards criados, disciplinas) pelo conteúdo do arquivo.\n\n' +
          'Isso não pode ser desfeito. Continuar?'
        );
        if (!confirmou) {
          els.importInput.value = '';
          return;
        }
        setStatus('Restaurando backup...');
        importar(file).then(function () {
          setStatus('✅ Backup restaurado! Recarregando a página...');
          setTimeout(function () { location.reload(); }, 1200);
        }).catch(function (e) {
          setStatus('❌ Erro ao importar: ' + e.message);
        }).finally(function () {
          els.importInput.value = '';
        });
      });
    }
  }

  return { init: init };
})();
