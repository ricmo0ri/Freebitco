// Componente compartilhado para exibir uma questão de múltipla escolha e
// aplicar o "Método da Questão": feedback certo/errado, explicação,
// pegadinha e regra de memória. Usado pela revisão livre, pelas missões
// e pelos chefões, para não duplicar a lógica de alternativas em cada um.
var QuestaoCard = (function () {
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
    var acertou = selectedIndex === questao.respostaCorreta;

    refs.feedback.hidden = false;
    if (acertou && critico) {
      refs.feedback.textContent = '🎯 GOLPE CRÍTICO! XP em dobro!';
      refs.feedback.className = 'questao-feedback feedback-critico';
    } else {
      refs.feedback.textContent = acertou
        ? '✅ Certo!'
        : '❌ VOCÊ CAIU NA ARMADILHA DA FGV. Resposta correta: ' + questao.alternativas[questao.respostaCorreta].letra;
      refs.feedback.className = 'questao-feedback ' + (acertou ? 'feedback-certo' : 'feedback-errado');
    }
    refs.confirmBtn.hidden = true;

    var linhas = [];
    if (questao.explicacaoCorreta) linhas.push('✅ Por que a correta está certa: ' + questao.explicacaoCorreta);
    if (!acertou && questao.pegadinha) linhas.push('🧨 A pegadinha: ' + questao.pegadinha);
    if (questao.regraMemoria) linhas.push('🧠 Para guardar: ' + questao.regraMemoria);

    if (linhas.length) {
      refs.metodo.hidden = false;
      linhas.forEach(function (texto) {
        var p = document.createElement('p');
        p.textContent = texto;
        refs.metodo.appendChild(p);
      });
    }

    return acertou;
  }

  return { render: render, showFeedback: showFeedback };
})();
