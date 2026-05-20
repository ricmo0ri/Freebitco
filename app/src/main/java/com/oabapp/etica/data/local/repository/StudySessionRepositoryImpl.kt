package com.oabapp.etica.data.local.repository

import com.oabapp.etica.data.local.database.CardAnswerDao
import com.oabapp.etica.data.local.database.SrsStateDao
import com.oabapp.etica.data.local.database.StudySessionDao
import com.oabapp.etica.data.local.entities.CardAnswerEntity
import com.oabapp.etica.data.local.entities.SrsStateEntity
import com.oabapp.etica.data.local.entities.StudySessionEntity
import com.oabapp.etica.domain.model.CardAnswer
import com.oabapp.etica.domain.model.StudySession
import com.oabapp.etica.domain.repository.StudySessionRepository
import com.oabapp.etica.util.SrsAlgorithm
import javax.inject.Inject
import javax.inject.Singleton

@Singleton
class StudySessionRepositoryImpl @Inject constructor(
    private val sessaoDao: StudySessionDao,
    private val respostaDao: CardAnswerDao,
    private val srsDao: SrsStateDao
) : StudySessionRepository {

    override suspend fun iniciarSessao(
        focusLevel: Int,
        durationMinutes: Int,
        moduleId: Int
    ): Long = sessaoDao.inserir(
        StudySessionEntity(
            focusLevel = focusLevel,
            durationMinutes = durationMinutes,
            moduleId = moduleId,
            totalCards = 0,
            correctAnswers = 0
        )
    )

    override suspend fun encerrarSessao(
        sessionId: Long,
        totalCards: Int,
        correctAnswers: Int
    ) {
        // Busca a sessão pelo ID e atualiza com os totais finais
        val sessao = sessaoDao.obterPorId(sessionId) ?: return
        sessaoDao.atualizar(
            sessao.copy(totalCards = totalCards, correctAnswers = correctAnswers)
        )
    }

    override suspend fun registrarResposta(resposta: CardAnswer) {
        respostaDao.inserir(
            CardAnswerEntity(
                sessionId = resposta.sessionId,
                cardId = resposta.cardId,
                answeredCorrectly = resposta.answeredCorrectly,
                difficultyFelt = resposta.difficultyFelt,
                timestamp = resposta.timestamp
            )
        )
    }

    override suspend fun atualizarSrsAposResposta(cardId: Long, difficultyFelt: Int) {
        val estadoAtual = srsDao.obterPorCard(cardId) ?: SrsStateEntity(cardId = cardId)
        val qualidade = SrsAlgorithm.dificuldadeParaQualidade(difficultyFelt)
        val novoEstado = SrsAlgorithm.calcularProximaRevisao(estadoAtual, qualidade)
        srsDao.salvar(novoEstado)
    }

    override suspend fun obterUltimaSessao(): StudySession? =
        sessaoDao.obterUltimaSessao()?.toDomain()

    override suspend fun obterRespostasDaSessao(sessionId: Long): List<CardAnswer> =
        respostaDao.obterPorSessao(sessionId).map { it.toDomain() }

    // ─── Mapeadores ──────────────────────────────────────────────────────────

    private fun StudySessionEntity.toDomain() = StudySession(
        id = id, date = date, durationMinutes = durationMinutes,
        focusLevel = focusLevel, totalCards = totalCards,
        correctAnswers = correctAnswers, moduleId = moduleId
    )

    private fun CardAnswerEntity.toDomain() = CardAnswer(
        sessionId = sessionId, cardId = cardId,
        answeredCorrectly = answeredCorrectly,
        difficultyFelt = difficultyFelt, timestamp = timestamp
    )
}
