package com.oabapp.etica.usecase

import com.oabapp.etica.domain.usecase.StartStudySessionUseCase
import com.oabapp.etica.fake.FakeStudyCardRepository
import com.oabapp.etica.fake.FakeStudySessionRepository
import kotlinx.coroutines.test.runTest
import org.junit.Assert.assertEquals
import org.junit.Assert.assertTrue
import org.junit.Before
import org.junit.Test

class StartStudySessionUseCaseTest {

    private lateinit var cardRepo: FakeStudyCardRepository
    private lateinit var sessaoRepo: FakeStudySessionRepository
    private lateinit var useCase: StartStudySessionUseCase

    @Before
    fun setUp() {
        cardRepo = FakeStudyCardRepository()
        sessaoRepo = FakeStudySessionRepository()
        useCase = StartStudySessionUseCase(cardRepo, sessaoRepo)
    }

    // ─── Criação de sessão ────────────────────────────────────────────────────

    @Test
    fun `cria sessao e retorna sessionId valido`() = runTest {
        cardRepo.adicionarFlashcard(id = 1L)
        val resultado = useCase(focusLevel = 2, durationMinutes = 10, moduleId = 1)
        assertTrue(resultado.sessionId > 0)
        assertEquals(1, sessaoRepo.sessoesIniciadas.size)
    }

    @Test
    fun `grava focusLevel e durationMinutes corretamente`() = runTest {
        cardRepo.adicionarFlashcard(id = 1L)
        useCase(focusLevel = 1, durationMinutes = 5, moduleId = 0)
        val (foco, duracao, _) = sessaoRepo.sessoesIniciadas.first()
        assertEquals(1, foco)
        assertEquals(5, duracao)
    }

    // ─── Limite de cards por nível de foco ────────────────────────────────────

    @Test
    fun `nivel 1 usa 1 card por minuto`() = runTest {
        repeat(20) { i -> cardRepo.adicionarFlashcard(id = i.toLong() + 1, moduleId = 1) }
        // 5 min * 1 card/min = 5 cards
        val resultado = useCase(focusLevel = 1, durationMinutes = 5, moduleId = 1)
        assertEquals(5, resultado.cards.size)
    }

    @Test
    fun `nivel 2 usa 2 cards por minuto`() = runTest {
        repeat(30) { i -> cardRepo.adicionarFlashcard(id = i.toLong() + 1, moduleId = 1) }
        // 5 min * 2 cards/min = 10 cards
        val resultado = useCase(focusLevel = 2, durationMinutes = 5, moduleId = 1)
        assertEquals(10, resultado.cards.size)
    }

    @Test
    fun `nivel 3 usa 3 cards por minuto`() = runTest {
        repeat(30) { i -> cardRepo.adicionarFlashcard(id = i.toLong() + 1, moduleId = 1) }
        // 5 min * 3 cards/min = 15 cards
        val resultado = useCase(focusLevel = 3, durationMinutes = 5, moduleId = 1)
        assertEquals(15, resultado.cards.size)
    }

    @Test
    fun `limite minimo de 5 cards mesmo com poucos disponiveis e sessao curta`() = runTest {
        repeat(3) { i -> cardRepo.adicionarFlashcard(id = i.toLong() + 1, moduleId = 1) }
        // 1 min * 1 card/min = 1, mas mínimo é 5 → retorna os 3 disponíveis
        val resultado = useCase(focusLevel = 1, durationMinutes = 1, moduleId = 1)
        assertEquals(3, resultado.cards.size) // só 3 disponíveis
    }

    @Test
    fun `limite maximo de 30 cards com nivel 3 e sessao longa`() = runTest {
        repeat(50) { i -> cardRepo.adicionarFlashcard(id = i.toLong() + 1, moduleId = 1) }
        // 15 min * 3 cards/min = 45, mas máximo é 30
        val resultado = useCase(focusLevel = 3, durationMinutes = 15, moduleId = 1)
        assertEquals(30, resultado.cards.size)
    }

    // ─── Prioridade de revisões SRS ────────────────────────────────────────────

    @Test
    fun `cards pendentes SRS aparecem primeiro`() = runTest {
        // Adiciona 10 cards novos
        repeat(10) { i -> cardRepo.adicionarFlashcard(id = i.toLong() + 1, moduleId = 1) }
        // Marca 3 como pendentes de revisão
        val pendente = cardRepo.cards.take(3)
        pendente.forEach { cardRepo.adicionarPendente(it) }

        val resultado = useCase(focusLevel = 2, durationMinutes = 10, moduleId = 1)

        val idsPendentes = pendente.map { it.id }.toSet()
        val idsRetornados = resultado.cards.map { it.id }.toSet()
        assertTrue(
            "Todos os pendentes devem estar nos cards retornados",
            idsRetornados.containsAll(idsPendentes)
        )
    }

    @Test
    fun `nao duplica cards pendentes e novos`() = runTest {
        repeat(10) { i -> cardRepo.adicionarFlashcard(id = i.toLong() + 1, moduleId = 1) }
        cardRepo.adicionarPendente(cardRepo.cards.first())

        val resultado = useCase(focusLevel = 2, durationMinutes = 10, moduleId = 1)
        val ids = resultado.cards.map { it.id }
        assertEquals("IDs não devem ser duplicados", ids.distinct().size, ids.size)
    }

    // ─── Módulo misto ─────────────────────────────────────────────────────────

    @Test
    fun `moduleId 0 inclui cards de todos os modulos`() = runTest {
        cardRepo.adicionarFlashcard(id = 1L, moduleId = 1)
        cardRepo.adicionarFlashcard(id = 2L, moduleId = 2)
        cardRepo.adicionarFlashcard(id = 3L, moduleId = 3)

        val resultado = useCase(focusLevel = 2, durationMinutes = 10, moduleId = 0)
        val modulos = resultado.cards.map { it.moduleId }.toSet()
        assertTrue("Deve incluir cards de múltiplos módulos", modulos.size > 1)
    }
}
