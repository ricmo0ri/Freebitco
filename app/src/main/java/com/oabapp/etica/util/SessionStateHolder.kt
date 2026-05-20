package com.oabapp.etica.util

import com.oabapp.etica.domain.model.StudyCard
import javax.inject.Inject
import javax.inject.Singleton

/**
 * Armazena em memória os cards da sessão atual.
 * Evita criar uma segunda sessão no banco quando StudyViewModel inicia.
 *
 * Ciclo de vida: HomeViewModel ou ModulesViewModel grava os cards após
 * chamar StartStudySessionUseCase; StudyViewModel lê e limpa.
 */
@Singleton
class SessionStateHolder @Inject constructor() {
    private var cards: List<StudyCard> = emptyList()

    fun salvar(lista: List<StudyCard>) { cards = lista }

    fun consumir(): List<StudyCard> {
        val resultado = cards
        cards = emptyList()
        return resultado
    }

    fun temCards() = cards.isNotEmpty()
}
