package com.oabapp.etica.usecase

import com.oabapp.etica.domain.model.CardType
import com.oabapp.etica.domain.model.StudyCard
import com.oabapp.etica.domain.usecase.GetDueCardsUseCase
import com.oabapp.etica.fake.FakeStudyCardRepository
import kotlinx.coroutines.flow.first
import kotlinx.coroutines.test.runTest
import org.junit.Assert.assertEquals
import org.junit.Assert.assertTrue
import org.junit.Before
import org.junit.Test

class GetDueCardsUseCaseTest {

    private lateinit var cardRepo: FakeStudyCardRepository
    private lateinit var useCase: GetDueCardsUseCase

    @Before
    fun setUp() {
        cardRepo = FakeStudyCardRepository()
        useCase = GetDueCardsUseCase(cardRepo)
    }

    private fun criarCard(id: Long) = StudyCard(
        id = id, moduleId = 1, themeId = 100,
        type = CardType.FLASHCARD,
        front = "Pergunta $id", back = "Resposta $id"
    )

    @Test
    fun `retorna lista vazia quando nao ha pendentes`() = runTest {
        val cards = useCase()
        assertTrue(cards.isEmpty())
    }

    @Test
    fun `retorna todos os cards pendentes`() = runTest {
        repeat(3) { i -> cardRepo.adicionarPendente(criarCard(i.toLong() + 1)) }
        val cards = useCase()
        assertEquals(3, cards.size)
    }

    @Test
    fun `contador flow reflete numero de pendentes`() = runTest {
        repeat(5) { i -> cardRepo.adicionarPendente(criarCard(i.toLong() + 1)) }
        val contador = useCase.invocarContador().first()
        assertEquals(5, contador)
    }

    @Test
    fun `flow de cards retorna lista de pendentes`() = runTest {
        cardRepo.adicionarPendente(criarCard(1L))
        cardRepo.adicionarPendente(criarCard(2L))
        val cards = useCase.invocarFlow().first()
        assertEquals(2, cards.size)
    }
}
