package com.oabapp.etica.data.local.repository

import com.oabapp.etica.data.local.database.SrsStateDao
import com.oabapp.etica.data.local.database.StudyCardDao
import com.oabapp.etica.data.local.entities.StudyCardEntity
import com.oabapp.etica.data.local.entities.SrsStateEntity
import com.oabapp.etica.domain.model.CardType
import com.oabapp.etica.domain.model.ProgressoModulo
import com.oabapp.etica.domain.model.SrsState
import com.oabapp.etica.domain.model.StudyCard
import com.oabapp.etica.domain.repository.StudyCardRepository
import com.oabapp.etica.util.Constants
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.map
import javax.inject.Inject
import javax.inject.Singleton

@Singleton
class StudyCardRepositoryImpl @Inject constructor(
    private val cardDao: StudyCardDao,
    private val srsDao: SrsStateDao
) : StudyCardRepository {

    override suspend fun obterCardsPorModulo(moduleId: Int): List<StudyCard> =
        cardDao.obterCardsPorModulo(moduleId).map { it.toDomain() }

    override suspend fun obterCardsPorTema(themeId: Int): List<StudyCard> =
        cardDao.obterCardsPorTema(themeId).map { it.toDomain() }

    override suspend fun obterCardsParaRevisao(): List<StudyCard> =
        cardDao.obterCardsParaRevisao(agora()).map { card ->
            card.toDomain(srsDao.obterPorCard(card.id))
        }

    override fun observarCardsParaRevisao(): Flow<List<StudyCard>> =
        cardDao.observarCardsParaRevisao(agora()).map { lista ->
            lista.map { it.toDomain() }
        }

    override fun observarContadorRevisoesPendentes(): Flow<Int> =
        cardDao.observarContadorRevisoesPendentes(agora())

    override suspend fun obterProgressoPorModulo(moduleId: Int): ProgressoModulo {
        val total = cardDao.contarPorModulo(moduleId)
        val dominados = srsDao.contarCardsDominadosPorModulo(moduleId)
        return ProgressoModulo(
            moduleId = moduleId,
            nomeModulo = nomeModulo(moduleId),
            totalCards = total,
            cardsDominados = dominados
        )
    }

    // ─── Mapeadores ──────────────────────────────────────────────────────────

    private fun StudyCardEntity.toDomain(srs: SrsStateEntity? = null) = StudyCard(
        id = id,
        moduleId = moduleId,
        themeId = themeId,
        type = if (type == Constants.TIPO_FLASHCARD) CardType.FLASHCARD else CardType.MULTIPLE_CHOICE,
        front = front,
        back = back,
        options = options,
        correctOption = correctOption,
        explanation = explanation,
        difficulty = difficulty,
        srsState = srs?.toDomain()
    )

    private fun SrsStateEntity.toDomain() = SrsState(
        cardId = cardId,
        interval = interval,
        easeFactor = easeFactor,
        repetitions = repetitions,
        nextReviewDate = nextReviewDate,
        lastAnswerQuality = lastAnswerQuality
    )

    private fun agora() = System.currentTimeMillis()

    private fun nomeModulo(id: Int) = when (id) {
        Constants.MODULO_ESTATUTO -> "Estatuto da Advocacia — Lei 8.906/94"
        Constants.MODULO_CODIGO_ETICA -> "Código de Ética e Disciplina — Res. 02/2015"
        Constants.MODULO_REGULAMENTO -> "Regulamento Geral do Estatuto"
        else -> "Módulo $id"
    }
}
