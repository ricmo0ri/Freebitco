package com.oabapp.etica.fake

import com.oabapp.etica.domain.model.CardAnswer
import com.oabapp.etica.domain.model.StudySession
import com.oabapp.etica.domain.repository.StudySessionRepository

/** Repositório falso em memória para testes unitários. */
class FakeStudySessionRepository : StudySessionRepository {

    private var proximoSessionId = 1L
    val sessoesIniciadas = mutableListOf<Triple<Int, Int, Int>>() // focusLevel, duration, moduleId
    val respostasRegistradas = mutableListOf<CardAnswer>()
    val srsAtualizados = mutableListOf<Pair<Long, Int>>()         // cardId, difficulty
    val sessoesEncerradas = mutableListOf<Triple<Long, Int, Int>>() // sessionId, total, corretos

    override suspend fun iniciarSessao(
        focusLevel: Int,
        durationMinutes: Int,
        moduleId: Int
    ): Long {
        sessoesIniciadas.add(Triple(focusLevel, durationMinutes, moduleId))
        return proximoSessionId++
    }

    override suspend fun encerrarSessao(
        sessionId: Long,
        totalCards: Int,
        correctAnswers: Int
    ) {
        sessoesEncerradas.add(Triple(sessionId, totalCards, correctAnswers))
    }

    override suspend fun registrarResposta(resposta: CardAnswer) {
        respostasRegistradas.add(resposta)
    }

    override suspend fun atualizarSrsAposResposta(cardId: Long, difficultyFelt: Int) {
        srsAtualizados.add(Pair(cardId, difficultyFelt))
    }

    override suspend fun obterUltimaSessao(): StudySession? = null

    override suspend fun obterRespostasDaSessao(sessionId: Long): List<CardAnswer> =
        respostasRegistradas.filter { it.sessionId == sessionId }
}
