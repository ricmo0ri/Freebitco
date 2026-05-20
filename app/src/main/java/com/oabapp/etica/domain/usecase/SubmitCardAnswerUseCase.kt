package com.oabapp.etica.domain.usecase

import com.oabapp.etica.domain.model.CardAnswer
import com.oabapp.etica.domain.repository.StudySessionRepository
import javax.inject.Inject

/**
 * Registra a resposta do usuário a um card e atualiza o estado SRS.
 * [difficultyFelt]: 1=Fácil, 2=Médio, 3=Difícil (percepção do usuário).
 */
class SubmitCardAnswerUseCase @Inject constructor(
    private val sessaoRepo: StudySessionRepository
) {
    suspend operator fun invoke(
        sessionId: Long,
        cardId: Long,
        answeredCorrectly: Boolean,
        difficultyFelt: Int
    ) {
        sessaoRepo.registrarResposta(
            CardAnswer(
                sessionId = sessionId,
                cardId = cardId,
                answeredCorrectly = answeredCorrectly,
                difficultyFelt = difficultyFelt
            )
        )
        sessaoRepo.atualizarSrsAposResposta(cardId, difficultyFelt)
    }
}
