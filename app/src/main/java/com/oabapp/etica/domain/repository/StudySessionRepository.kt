package com.oabapp.etica.domain.repository

import com.oabapp.etica.domain.model.CardAnswer
import com.oabapp.etica.domain.model.StudySession

interface StudySessionRepository {
    suspend fun iniciarSessao(focusLevel: Int, durationMinutes: Int, moduleId: Int): Long
    suspend fun encerrarSessao(sessionId: Long, totalCards: Int, correctAnswers: Int)
    suspend fun registrarResposta(resposta: CardAnswer)
    suspend fun atualizarSrsAposResposta(cardId: Long, difficultyFelt: Int)
    suspend fun obterUltimaSessao(): StudySession?
    suspend fun obterRespostasDaSessao(sessionId: Long): List<CardAnswer>
}
