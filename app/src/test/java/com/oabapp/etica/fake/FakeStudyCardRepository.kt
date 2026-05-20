package com.oabapp.etica.fake

import com.oabapp.etica.domain.model.CardType
import com.oabapp.etica.domain.model.ProgressoModulo
import com.oabapp.etica.domain.model.StudyCard
import com.oabapp.etica.domain.repository.StudyCardRepository
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.MutableStateFlow

/** Repositório falso em memória para testes unitários. */
class FakeStudyCardRepository : StudyCardRepository {

    val cards = mutableListOf<StudyCard>()
    val cardsPendentes = mutableListOf<StudyCard>()
    private val _contadorFlow = MutableStateFlow(0)

    override suspend fun obterCardsPorModulo(moduleId: Int): List<StudyCard> =
        cards.filter { it.moduleId == moduleId }

    override suspend fun obterCardsPorTema(themeId: Int): List<StudyCard> =
        cards.filter { it.themeId == themeId }

    override suspend fun obterCardsParaRevisao(): List<StudyCard> = cardsPendentes.toList()

    override fun observarCardsParaRevisao(): Flow<List<StudyCard>> =
        MutableStateFlow(cardsPendentes.toList())

    override fun observarContadorRevisoesPendentes(): Flow<Int> = _contadorFlow

    override suspend fun obterProgressoPorModulo(moduleId: Int): ProgressoModulo =
        ProgressoModulo(moduleId, "Módulo $moduleId", cards.count { it.moduleId == moduleId }, 0)

    // ─── Helpers para montar cenários ────────────────────────────────────────

    fun adicionarFlashcard(id: Long = 1L, moduleId: Int = 1, themeId: Int = 100) =
        cards.add(
            StudyCard(
                id = id, moduleId = moduleId, themeId = themeId,
                type = CardType.FLASHCARD,
                front = "Pergunta $id", back = "Resposta $id"
            )
        )

    fun adicionarMultiplaEscolha(
        id: Long = 2L,
        moduleId: Int = 1,
        correctOption: Int = 1
    ) = cards.add(
        StudyCard(
            id = id, moduleId = moduleId, themeId = 101,
            type = CardType.MULTIPLE_CHOICE,
            front = "Enunciado $id",
            back = "Resposta correta",
            options = listOf("Errada A", "Correta B", "Errada C", "Errada D"),
            correctOption = correctOption,
            explanation = "Explicação da resposta correta."
        )
    )

    fun adicionarPendente(card: StudyCard) {
        cardsPendentes.add(card)
        _contadorFlow.value = cardsPendentes.size
    }
}
