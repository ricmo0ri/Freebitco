package com.oabapp.etica.domain.usecase

import com.oabapp.etica.domain.model.StudyCard
import com.oabapp.etica.domain.repository.StudyCardRepository
import com.oabapp.etica.domain.repository.StudySessionRepository
import javax.inject.Inject

/**
 * Inicia uma sessão de estudo e retorna os cards selecionados.
 *
 * Lógica de seleção:
 * 1. Cards com revisão SRS pendente (prioridade máxima)
 * 2. Cards novos do módulo selecionado (complemento até o limite)
 *
 * O limite de cards é ajustado pelo nível de foco TDAH:
 *   Nível 1 (Difícil focar) → 1 card/min (menos sobrecarga cognitiva)
 *   Nível 2 (Mais ou menos) → 2 cards/min (padrão)
 *   Nível 3 (Focado)        → 3 cards/min (aproveitamento máximo)
 *
 * [moduleId] = 0 significa sessão mista (todos os módulos).
 */
class StartStudySessionUseCase @Inject constructor(
    private val cardRepo: StudyCardRepository,
    private val sessaoRepo: StudySessionRepository
) {
    data class Resultado(
        val sessionId: Long,
        val cards: List<StudyCard>
    )

    suspend operator fun invoke(
        focusLevel: Int,
        durationMinutes: Int,
        moduleId: Int
    ): Resultado {
        val cardsPorMinuto = when (focusLevel) {
            1 -> 1   // Difícil focar — ritmo lento, sem sobrecarga
            3 -> 3   // Focado — aproveita ao máximo
            else -> 2 // Mais ou menos — padrão
        }
        val limiteCards = (durationMinutes * cardsPorMinuto).coerceAtLeast(5).coerceAtMost(30)

        // 1. Revisões SRS pendentes (maior prioridade)
        val pendentes = cardRepo.obterCardsParaRevisao().take(limiteCards)
        val idsJaIncluidos = pendentes.map { it.id }.toSet()

        // 2. Cards novos para completar o limite
        val fonteNovos = if (moduleId == 0) {
            listOf(1, 2, 3).flatMap { cardRepo.obterCardsPorModulo(it) }
        } else {
            cardRepo.obterCardsPorModulo(moduleId)
        }
        val novos = fonteNovos
            .filter { it.id !in idsJaIncluidos }
            .take(limiteCards - pendentes.size)

        // 3. Embaralha para evitar memorização por posição
        val cards = (pendentes + novos).shuffled()

        val sessionId = sessaoRepo.iniciarSessao(focusLevel, durationMinutes, moduleId)

        return Resultado(sessionId = sessionId, cards = cards)
    }
}
