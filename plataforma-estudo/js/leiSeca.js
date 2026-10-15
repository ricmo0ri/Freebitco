// Lei seca: treino de reconhecimento da redação literal de dispositivos
// legais, no formato "qual das redações abaixo é a literal" — a banca da
// OAB adora trocar uma palavra/prazo/verbo da lei para confundir, então
// treinar exatamente esse "olho" é o complemento natural das questões de
// aplicação de caso concreto. Reaproveita o QuestaoCard (mesmo visual e
// atalhos de teclado das outras telas de questão).
var LeiSeca = (function () {
  var els = {};
  var disciplinaId = null;
  var disciplinaNome = null;
  var todosItens = []; // todos os dispositivos do território, antes do filtro por assunto
  var fila = [];
  var indice = 0;
  var atual = null; // { item, questao, corretaIndex }
  var sessao = { respondidas: 0, acertos: 0 };

  function embaralhar(array) {
    var copia = array.slice();
    for (var i = copia.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = copia[i]; copia[i] = copia[j]; copia[j] = tmp;
    }
    return copia;
  }

  function carregarItens() {
    if (!disciplinaId) return Promise.resolve([]);
    return DB.getAllByIndex('leiSeca', 'disciplinaId', disciplinaId);
  }

  // Conta quantos dispositivos existem por assunto, pra mostrar na tela de
  // escolha antes de começar a praticar (em vez de misturar tudo do
  // território de uma vez só, o que fica confuso quando há muitos assuntos).
  function agruparPorSubtema(itens) {
    var contagem = {};
    itens.forEach(function (item) {
      var s = item.subtema || 'Geral';
      contagem[s] = (contagem[s] || 0) + 1;
    });
    return Object.keys(contagem).sort().map(function (s) {
      return { subtema: s, total: contagem[s] };
    });
  }

  // Monta um objeto no formato que o QuestaoCard já sabe renderizar,
  // embaralhando as 3 redações (1 literal + 2 variações) a cada rodada.
  function montarQuestao(item) {
    var opcoes = embaralhar([
      { texto: item.textoCorreto, correta: true },
      { texto: item.versaoErrada1, correta: false },
      { texto: item.versaoErrada2, correta: false }
    ]);
    var corretaIndex = -1;
    var alternativas = opcoes.map(function (op, i) {
      if (op.correta) corretaIndex = i;
      return { letra: String.fromCharCode(65 + i), texto: op.texto };
    });

    return {
      casoAbsurdo: '',
      tema: item.dispositivo,
      provaOrigem: item.lei,
      enunciado: 'Qual das redações abaixo corresponde ao texto literal do dispositivo indicado?',
      alternativas: alternativas,
      respostaCorreta: corretaIndex,
      explicacaoCorreta: 'Essa é a redação literal do dispositivo.',
      explicacaoErradas: item.explicacaoDiferenca,
      pegadinha: '',
      regraMemoria: item.regraMemoria
    };
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

  function atualizarProgresso() {
    if (!els.progresso) return;
    if (fila.length === 0) { els.progresso.textContent = ''; return; }
    var pct = sessao.respondidas ? Math.round((sessao.acertos / sessao.respondidas) * 100) : 0;
    els.progresso.textContent = 'Dispositivo ' + (indice + 1) + ' de ' + fila.length +
      ' · ' + sessao.respondidas + ' respondidos nesta sessão (' + pct + '% de acerto)';
  }

  function renderAtual() {
    if (fila.length === 0) {
      els.empty.hidden = false;
      els.card.hidden = true;
      atualizarProgresso();
      return;
    }

    els.empty.hidden = true;
    els.card.hidden = false;
    els.proximaBtn.hidden = true;

    var item = fila[indice];
    var questao = montarQuestao(item);
    atual = { item: item, questao: questao };

    QuestaoCard.render(refs(), questao, function (i) {
      atual.selecionado = i;
      els.confirmBtn.disabled = false;
    });

    atualizarProgresso();
  }

  function confirmar() {
    if (!atual || atual.selecionado === undefined || atual.selecionado === null) return;
    var acertou = atual.selecionado === atual.questao.respostaCorreta;

    sessao.respondidas += 1;
    if (acertou) sessao.acertos += 1;

    var respostas = Storage.read(Storage.KEYS.leiSecaRespostas, []);
    respostas.push({
      date: Storage.todayStr(),
      disciplinaId: disciplinaId,
      dispositivo: atual.item.dispositivo,
      acertou: acertou
    });
    Storage.write(Storage.KEYS.leiSecaRespostas, respostas);
    Storage.recordActivity();

    QuestaoCard.showFeedback(refs(), atual.questao, atual.selecionado, false);
    els.proximaBtn.hidden = false;
    atualizarProgresso();
  }

  function proximo() {
    indice += 1;
    if (indice >= fila.length) {
      fila = embaralhar(fila);
      indice = 0;
    }
    renderAtual();
  }

  function contarPendentes(itens) {
    return itens.filter(function (item) { return !item.jaSei; }).length;
  }

  function renderPicker() {
    if (!els.picker) return;
    els.pickerLista.innerHTML = '';

    if (todosItens.length === 0) {
      els.picker.hidden = true;
      els.empty.hidden = false;
      els.card.hidden = true;
      els.progresso.textContent = '';
      return;
    }

    els.empty.hidden = true;
    els.card.hidden = true;
    els.picker.hidden = false;
    els.progresso.textContent = '';

    var btnTodos = document.createElement('button');
    btnTodos.type = 'button';
    btnTodos.className = 'tema-btn';
    btnTodos.textContent = '📚 Todos os assuntos (' + contarPendentes(todosItens) + '/' + todosItens.length + ')';
    btnTodos.addEventListener('click', function () { iniciarPratica(null); });
    els.pickerLista.appendChild(btnTodos);

    agruparPorSubtema(todosItens).forEach(function (grupo) {
      var itensGrupo = todosItens.filter(function (item) { return (item.subtema || 'Geral') === grupo.subtema; });
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'tema-btn';
      btn.textContent = grupo.subtema + ' (' + contarPendentes(itensGrupo) + '/' + grupo.total + ')';
      if (window.PrioridadeOab && disciplinaNome) {
        var badgePrioridade = PrioridadeOab.criarBadge(PrioridadeOab.getPrioridadeSubtema(disciplinaNome, grupo.subtema));
        if (badgePrioridade) btn.appendChild(badgePrioridade);
      }
      btn.addEventListener('click', function () { iniciarPratica(grupo.subtema); });
      els.pickerLista.appendChild(btn);
    });

    renderChecklist();
  }

  function iniciarPratica(subtema) {
    var itens = subtema
      ? todosItens.filter(function (item) { return (item.subtema || 'Geral') === subtema; })
      : todosItens;

    // Prioriza o que ainda não foi marcado como "já sei"; só volta a
    // incluir os marcados se esse escopo tiver sido todo marcado (senão a
    // prática travaria numa fila vazia).
    var pendentes = itens.filter(function (item) { return !item.jaSei; });
    var pool = pendentes.length > 0 ? pendentes : itens;

    sessao = { respondidas: 0, acertos: 0 };
    fila = embaralhar(pool);
    indice = 0;

    els.picker.hidden = true;
    if (els.trocarBtn) els.trocarBtn.hidden = false;
    renderAtual();
  }

  // ---------- checklist "já sei" ----------

  var buscaChecklist = '';

  function normalizar(texto) {
    return (texto || '').toLowerCase();
  }

  function toggleJaSei(item) {
    item.jaSei = !item.jaSei;
    DB.put('leiSeca', item).then(renderPicker);
  }

  function renderChecklist() {
    if (!els.checklistLista) return;
    els.checklistLista.innerHTML = '';

    var termo = normalizar(buscaChecklist);
    var porSubtema = {};
    todosItens.forEach(function (item) {
      var s = item.subtema || 'Geral';
      (porSubtema[s] = porSubtema[s] || []).push(item);
    });

    var achouAlgum = false;
    Object.keys(porSubtema).sort().forEach(function (subtema) {
      var itensFiltrados = porSubtema[subtema].filter(function (item) {
        if (!termo) return true;
        return normalizar(item.dispositivo).indexOf(termo) !== -1 || normalizar(item.lei).indexOf(termo) !== -1;
      });
      if (itensFiltrados.length === 0) return;
      achouAlgum = true;

      var titulo = document.createElement('p');
      titulo.className = 'leiseca-checklist-subtema';
      titulo.textContent = subtema;
      els.checklistLista.appendChild(titulo);

      itensFiltrados.forEach(function (item) {
        var row = document.createElement('button');
        row.type = 'button';
        row.className = 'leiseca-checklist-item' + (item.jaSei ? ' marcado' : '');
        row.textContent = (item.jaSei ? '✅ ' : '⬜ ') + item.lei + ' — ' + item.dispositivo;
        row.addEventListener('click', function () { toggleJaSei(item); });
        els.checklistLista.appendChild(row);
      });
    });

    if (!achouAlgum) {
      var vazio = document.createElement('p');
      vazio.className = 'empty-state';
      vazio.textContent = 'Nenhum dispositivo encontrado pra essa busca.';
      els.checklistLista.appendChild(vazio);
    }
  }

  function voltarParaEscolha() {
    if (els.trocarBtn) els.trocarBtn.hidden = true;
    els.card.hidden = true;
    renderPicker();
  }

  function setDisciplina(id) {
    disciplinaId = id;
    disciplinaNome = null;
    if (els.trocarBtn) els.trocarBtn.hidden = true;
    buscaChecklist = '';
    if (els.checklistBusca) els.checklistBusca.value = '';
    if (els.checklist) els.checklist.hidden = true;
    if (els.checklistToggle) els.checklistToggle.textContent = '📋 Marcar o que eu já sei';
    Promise.all([DB.getAll('disciplinas'), carregarItens()]).then(function (resultados) {
      var disciplinas = resultados[0];
      var itens = resultados[1];
      var d = disciplinas.find(function (item) { return item.id === id; });
      disciplinaNome = d ? d.nome : null;
      todosItens = itens;
      renderPicker();
    });
  }

  function init() {
    els.empty = document.getElementById('leiseca-empty');
    els.card = document.getElementById('leiseca-card');
    els.caso = document.getElementById('leiseca-caso');
    els.origem = document.getElementById('leiseca-origem');
    els.enunciado = document.getElementById('leiseca-enunciado');
    els.altList = document.getElementById('leiseca-alternativas');
    els.confirmBtn = document.getElementById('leiseca-confirmar');
    els.feedback = document.getElementById('leiseca-feedback');
    els.metodo = document.getElementById('leiseca-metodo');
    els.proximaBtn = document.getElementById('leiseca-proxima');
    els.progresso = document.getElementById('leiseca-progresso');
    els.picker = document.getElementById('leiseca-picker');
    els.pickerLista = document.getElementById('leiseca-subtema-lista');
    els.trocarBtn = document.getElementById('leiseca-trocar-assunto');
    els.checklistToggle = document.getElementById('leiseca-checklist-toggle');
    els.checklist = document.getElementById('leiseca-checklist');
    els.checklistBusca = document.getElementById('leiseca-checklist-busca');
    els.checklistLista = document.getElementById('leiseca-checklist-lista');

    els.confirmBtn.addEventListener('click', confirmar);
    els.proximaBtn.addEventListener('click', proximo);
    els.trocarBtn.addEventListener('click', voltarParaEscolha);

    els.checklistToggle.addEventListener('click', function () {
      var abrindo = els.checklist.hidden;
      els.checklist.hidden = !abrindo;
      els.checklistToggle.textContent = abrindo ? '🔼 Fechar lista de dispositivos' : '📋 Marcar o que eu já sei';
      if (abrindo) renderChecklist();
    });
    els.checklistBusca.addEventListener('input', function () {
      buscaChecklist = els.checklistBusca.value;
      renderChecklist();
    });
  }

  return { init: init, setDisciplina: setDisciplina };
})();
