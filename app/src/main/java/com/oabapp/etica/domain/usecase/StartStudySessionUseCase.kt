package com.oabapp.etica.domain.usecase

import com.oabapp.etica.domain.model.StudyCard
import com.oabapp.etica.domain.repository.StudyCardRepository
import com.oabapp.etica.domain.repository.StudySessionRepository
import javax.inject.Inject

/**
 * Inicia uma sessão de estudo e retorna os cards a serem estudados.
 *
 * Lógica de seleção:
 * 1. Cards com revisão SRS pendente hoje (prioridade máxima)
 * 2. Cards novos do módulo selecionado (complemento até o limite da sessão)
 *
 * [moduleId] = 0 significa sessão mista (todos os módulos).
 * [limiteCards] calculado a partir da duração: ~2 cards/min.
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
        val limiteCards = (durationMinutes * 2).coerceAtLeast(5)

        // Revisões SRS pendentes (todos os módulos, prioridade)
        val pendentes = cardRepo.obterCardsParaRevisao().take(limiteCards)

        // Complementa com cards novos do módulo selecionado
        val idsJaIncluidos = pendentes.map { it.id }.toSet()
        val novos = if (moduleId == 0) {
            listOf(1, 2, 3).flatMap { cardRepo.obterCardsPorModulo(it) }
        } else {
            cardRepo.obterCardsPorModulo(moduleId)
        }
            .filter { it.id !in idsJaIncluidos }
            .take(limiteCards - pendentes.size)

        val cards = (pendentes + novos).shuffled()

        val sessionId = sessaoRepo.iniciarSessao(focusLevel, durationMinutes, moduleId)

        return Resultado(sessionId = sessionId, cards = cards)
    }
}
