package com.oabapp.etica.domain.usecase

import com.oabapp.etica.domain.repository.StudySessionRepository
import javax.inject.Inject

/**
 * Encerra a sessão registrando totais finais de cards e acertos.
 * Chamado pela StudyScreen ao exibir o último card.
 */
class FinishStudySessionUseCase @Inject constructor(
    private val sessaoRepo: StudySessionRepository
) {
    suspend operator fun invoke(
        sessionId: Long,
        totalCards: Int,
        correctAnswers: Int
    ) = sessaoRepo.encerrarSessao(sessionId, totalCards, correctAnswers)
}
