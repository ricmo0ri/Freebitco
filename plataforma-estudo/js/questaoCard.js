// Componente compartilhado para exibir uma questão de múltipla escolha e
// aplicar o "Método da Questão": feedback certo/errado, explicação,
// pegadinha e regra de memória. Usado pela revisão livre, pelas missões
// e pelos chefões, para não duplicar a lógica de alternativas em cada um.
var QuestaoCard = (function () {
  // Índice da alternativa que conta como certa pra essa questão — a
  // correção manual do usuário (se houver) sempre prevalece sobre o
  // respostaCorreta original do banco. Toda tela que decide "acertou ou
  // errou" pra fins de XP/progresso deve usar esta função, não ler
  // questao.respostaCorreta direto, senão o placar destoa do que o
  // QuestaoCard mostra na tela.
  function respostaCorreta(questao) {
    var correcao = questao.correcaoManual;
    return (correcao && typeof correcao.respostaCorreta === 'number')
      ? correcao.respostaCorreta
      : questao.respostaCorreta;
  }

  // Texto efetivo de um campo pedagógico (explicacaoCorreta ou
  // explicacaoErradas) — a edição manual do usuário, se houver, prevalece
  // sobre o texto original do banco.
  function textoEfetivo(questao, campo) {
    var edicao = questao.explicacaoManual;
    if (edicao && typeof edicao[campo] === 'string') return edicao[campo];
    return questao[campo];
  }

  function render(refs, questao, onSelect) {
    refs.casoAbsurdo.hidden = !questao.casoAbsurdo;
    if (questao.casoAbsurdo) refs.casoAbsurdo.textContent = questao.casoAbsurdo;

    var origemPartes = [];
    if (questao.tema) origemPartes.push(questao.tema);
    origemPartes.push(questao.provaOrigem || 'Questão');
    refs.origem.textContent = origemPartes.join(' · ');

    refs.enunciado.textContent = questao.enunciado;
    refs.altList.innerHTML = '';

    questao.alternativas.forEach(function (alt, i) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'alt-option';
      btn.textContent = alt.letra + ') ' + alt.texto;
      btn.addEventListener('click', function () {
        Array.prototype.forEach.call(refs.altList.querySelectorAll('.alt-option'), function (b) {
          b.classList.remove('selected');
        });
        btn.classList.add('selected');
        onSelect(i);
      });
      refs.altList.appendChild(btn);
    });

    refs.confirmBtn.hidden = false;
    refs.confirmBtn.disabled = true;
    refs.feedback.hidden = true;
    refs.metodo.hidden = true;
    refs.metodo.innerHTML = '';
  }

  function showFeedback(refs, questao, selectedIndex, critico) {
    var correcao = questao.correcaoManual;
    var respostaEfetiva = respostaCorreta(questao);
    var acertou = selectedIndex === respostaEfetiva;

    refs.feedback.hidden = false;
    if (acertou && critico) {
      refs.feedback.textContent = '🎯 GOLPE CRÍTICO! XP em dobro!';
      refs.feedback.className = 'questao-feedback feedback-critico';
    } else {
      refs.feedback.textContent = acertou
        ? '✅ Certo!'
        : '❌ VOCÊ CAIU NA ARMADILHA DA FGV. Resposta correta: ' + questao.alternativas[respostaEfetiva].letra;
      refs.feedback.className = 'questao-feedback ' + (acertou ? 'feedback-certo' : 'feedback-errado');
    }
    refs.confirmBtn.hidden = true;

    refs.metodo.innerHTML = '';

    var explicacaoCorretaEfetiva = textoEfetivo(questao, 'explicacaoCorreta');
    var explicacaoErradasEfetiva = textoEfetivo(questao, 'explicacaoErradas');
    var explicacaoFoiEditada = !!(questao.explicacaoManual &&
      (typeof questao.explicacaoManual.explicacaoCorreta === 'string' || typeof questao.explicacaoManual.explicacaoErradas === 'string'));

    var linhas = [];
    if (correcao) {
      linhas.push('🔧 Você corrigiu o gabarito desta questão: a alternativa certa passou a ser ' +
        questao.alternativas[respostaEfetiva].letra + '.' +
        (correcao.nota ? ' Sua nota: ' + correcao.nota : '') +
        (explicacaoFoiEditada ? '' : ' (as explicações abaixo ainda são as originais, escritas para o gabarito antes da sua correção.)'));
    }
    if (explicacaoCorretaEfetiva) linhas.push('✅ Por que a correta está certa: ' + explicacaoCorretaEfetiva);
    if (explicacaoErradasEfetiva) linhas.push('❌ Por que as outras estão erradas: ' + explicacaoErradasEfetiva);
    if (!acertou && questao.pegadinha) linhas.push('🧨 A pegadinha: ' + questao.pegadinha);
    if (questao.regraMemoria) linhas.push('🧠 Para guardar: ' + questao.regraMemoria);

    if (linhas.length || questao.id) {
      refs.metodo.hidden = false;
      linhas.forEach(function (texto) {
        var p = document.createElement('p');
        p.textContent = texto;
        refs.metodo.appendChild(p);
      });
    }

    // A correção manual de gabarito e a edição da explicação só fazem
    // sentido para questões reais do banco (com id gravado no IndexedDB) —
    // as questões da Lei Seca são montadas na hora, embaralhadas a cada
    // rodada, sem gabarito ou explicação fixos pra corrigir.
    if (questao.id) {
      renderCorrecaoManual(refs, questao, selectedIndex, critico);
      renderEdicaoExplicacao(refs, questao, selectedIndex, critico);
    }

    return acertou;
  }

  // Painel de correção manual do gabarito, anexado ao final do bloco de
  // método. Guarda a correção em questao.correcaoManual e grava direto no
  // IndexedDB — a partir daí, atualizações futuras do banco de questões
  // (QuestoesSeed) não sobrescrevem mais o respostaCorreta desta questão.
  function renderCorrecaoManual(refs, questao, selectedIndex, critico) {
    var wrap = document.createElement('div');
    wrap.className = 'correcao-manual';

    function refazer() {
      showFeedback(refs, questao, selectedIndex, critico);
    }

    if (!questao.correcaoManual) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'btn-link';
      btn.textContent = '🔧 Acha que o gabarito desta questão está errado? Corrija aqui.';
      btn.addEventListener('click', function () {
        wrap.innerHTML = '';
        wrap.appendChild(montarFormularioCorrecao(questao, null, refazer));
      });
      wrap.appendChild(btn);
    } else {
      var letraAtual = questao.alternativas[questao.correcaoManual.respostaCorreta].letra;
      var atual = document.createElement('p');
      atual.className = 'correcao-manual-atual';
      atual.textContent = '🔧 Gabarito corrigido por você: alternativa certa = ' + letraAtual +
        (questao.correcaoManual.nota ? ' — ' + questao.correcaoManual.nota : '');
      wrap.appendChild(atual);

      var acoes = document.createElement('div');
      acoes.className = 'correcao-manual-acoes';

      var editarBtn = document.createElement('button');
      editarBtn.type = 'button';
      editarBtn.className = 'btn-link';
      editarBtn.textContent = 'Editar';
      editarBtn.addEventListener('click', function () {
        wrap.innerHTML = '';
        wrap.appendChild(montarFormularioCorrecao(questao, questao.correcaoManual, refazer));
      });

      var removerBtn = document.createElement('button');
      removerBtn.type = 'button';
      removerBtn.className = 'btn-link';
      removerBtn.textContent = 'Remover correção';
      removerBtn.addEventListener('click', function () {
        delete questao.correcaoManual;
        DB.put('questoes', questao).then(refazer);
      });

      acoes.appendChild(editarBtn);
      acoes.appendChild(removerBtn);
      wrap.appendChild(acoes);
    }

    refs.metodo.appendChild(wrap);
  }

  function montarFormularioCorrecao(questao, correcaoAtual, aoConcluir) {
    var form = document.createElement('div');
    form.className = 'correcao-manual-form';

    var label = document.createElement('p');
    label.className = 'hint-text';
    label.textContent = 'Qual alternativa é a certa?';
    form.appendChild(label);

    var escolhida = correcaoAtual ? correcaoAtual.respostaCorreta : null;
    var botoesAlt = [];
    questao.alternativas.forEach(function (alt, i) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'alt-option';
      if (i === escolhida) b.classList.add('selected');
      b.textContent = alt.letra + ') ' + alt.texto;
      b.addEventListener('click', function () {
        escolhida = i;
        botoesAlt.forEach(function (bb) { bb.classList.remove('selected'); });
        b.classList.add('selected');
      });
      botoesAlt.push(b);
      form.appendChild(b);
    });

    var notaLabel = document.createElement('label');
    notaLabel.textContent = 'Nota (opcional) — por que você está corrigindo';
    form.appendChild(notaLabel);
    var nota = document.createElement('textarea');
    nota.rows = 2;
    nota.value = correcaoAtual && correcaoAtual.nota ? correcaoAtual.nota : '';
    form.appendChild(nota);

    var acoes = document.createElement('div');
    acoes.className = 'correcao-manual-acoes';

    var salvarBtn = document.createElement('button');
    salvarBtn.type = 'button';
    salvarBtn.className = 'btn btn-primary';
    salvarBtn.textContent = 'Salvar correção';
    salvarBtn.addEventListener('click', function () {
      if (escolhida === null) { alert('Escolha qual alternativa é a certa.'); return; }
      questao.correcaoManual = {
        respostaCorreta: escolhida,
        nota: nota.value.trim(),
        data: new Date().toISOString()
      };
      DB.put('questoes', questao).then(aoConcluir);
    });

    var cancelarBtn = document.createElement('button');
    cancelarBtn.type = 'button';
    cancelarBtn.className = 'btn btn-ghost';
    cancelarBtn.textContent = 'Cancelar';
    cancelarBtn.addEventListener('click', aoConcluir);

    acoes.appendChild(salvarBtn);
    acoes.appendChild(cancelarBtn);
    form.appendChild(acoes);

    return form;
  }

  // Painel de edição manual do "porquê" (por que a correta está certa /
  // por que as outras estão erradas), anexado depois do painel de
  // correção de gabarito. Guarda a edição em questao.explicacaoManual (só
  // os campos que o usuário de fato mudou) e grava no IndexedDB — a partir
  // daí, futuras atualizações do banco de questões não sobrescrevem mais
  // esse(s) campo(s) desta questão.
  function renderEdicaoExplicacao(refs, questao, selectedIndex, critico) {
    var wrap = document.createElement('div');
    wrap.className = 'correcao-manual';

    function refazer() {
      showFeedback(refs, questao, selectedIndex, critico);
    }

    var edicao = questao.explicacaoManual;
    if (!edicao || (typeof edicao.explicacaoCorreta !== 'string' && typeof edicao.explicacaoErradas !== 'string')) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'btn-link';
      btn.textContent = '✏️ Editar por que a resposta está certa ou errada';
      btn.addEventListener('click', function () {
        wrap.innerHTML = '';
        wrap.appendChild(montarFormularioExplicacao(questao, refazer));
      });
      wrap.appendChild(btn);
    } else {
      var atual = document.createElement('p');
      atual.className = 'correcao-manual-atual';
      atual.textContent = '✏️ Você editou a explicação desta questão.';
      wrap.appendChild(atual);

      var acoes = document.createElement('div');
      acoes.className = 'correcao-manual-acoes';

      var editarBtn = document.createElement('button');
      editarBtn.type = 'button';
      editarBtn.className = 'btn-link';
      editarBtn.textContent = 'Editar';
      editarBtn.addEventListener('click', function () {
        wrap.innerHTML = '';
        wrap.appendChild(montarFormularioExplicacao(questao, refazer));
      });

      var removerBtn = document.createElement('button');
      removerBtn.type = 'button';
      removerBtn.className = 'btn-link';
      removerBtn.textContent = 'Remover edição';
      removerBtn.addEventListener('click', function () {
        delete questao.explicacaoManual;
        DB.put('questoes', questao).then(refazer);
      });

      acoes.appendChild(editarBtn);
      acoes.appendChild(removerBtn);
      wrap.appendChild(acoes);
    }

    refs.metodo.appendChild(wrap);
  }

  function montarFormularioExplicacao(questao, aoConcluir) {
    var form = document.createElement('div');
    form.className = 'correcao-manual-form';

    var valorOriginalCorreta = textoEfetivo(questao, 'explicacaoCorreta') || '';
    var valorOriginalErradas = textoEfetivo(questao, 'explicacaoErradas') || '';

    var labelCorreta = document.createElement('label');
    labelCorreta.textContent = 'Por que a correta está certa';
    form.appendChild(labelCorreta);
    var campoCorreta = document.createElement('textarea');
    campoCorreta.rows = 3;
    campoCorreta.value = valorOriginalCorreta;
    form.appendChild(campoCorreta);

    var labelErradas = document.createElement('label');
    labelErradas.textContent = 'Por que as outras estão erradas';
    form.appendChild(labelErradas);
    var campoErradas = document.createElement('textarea');
    campoErradas.rows = 3;
    campoErradas.value = valorOriginalErradas;
    form.appendChild(campoErradas);

    var acoes = document.createElement('div');
    acoes.className = 'correcao-manual-acoes';

    var salvarBtn = document.createElement('button');
    salvarBtn.type = 'button';
    salvarBtn.className = 'btn btn-primary';
    salvarBtn.textContent = 'Salvar explicação';
    salvarBtn.addEventListener('click', function () {
      var novaCorreta = campoCorreta.value.trim();
      var novaErradas = campoErradas.value.trim();
      // Só grava como edição manual o(s) campo(s) que o usuário de fato
      // mudou — se ele só mexeu num dos dois, o outro continua livre pra
      // receber correções futuras do banco de questões.
      if (novaCorreta !== valorOriginalCorreta || novaErradas !== valorOriginalErradas) {
        questao.explicacaoManual = questao.explicacaoManual || {};
        if (novaCorreta !== valorOriginalCorreta) questao.explicacaoManual.explicacaoCorreta = novaCorreta;
        if (novaErradas !== valorOriginalErradas) questao.explicacaoManual.explicacaoErradas = novaErradas;
      }
      DB.put('questoes', questao).then(aoConcluir);
    });

    var cancelarBtn = document.createElement('button');
    cancelarBtn.type = 'button';
    cancelarBtn.className = 'btn btn-ghost';
    cancelarBtn.textContent = 'Cancelar';
    cancelarBtn.addEventListener('click', aoConcluir);

    acoes.appendChild(salvarBtn);
    acoes.appendChild(cancelarBtn);
    form.appendChild(acoes);

    return form;
  }

  return { render: render, showFeedback: showFeedback, respostaCorreta: respostaCorreta };
})();
