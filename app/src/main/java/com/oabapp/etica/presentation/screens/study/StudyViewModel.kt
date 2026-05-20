package com.oabapp.etica.presentation.screens.study

import androidx.lifecycle.SavedStateHandle
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.oabapp.etica.domain.model.StudyCard
import com.oabapp.etica.domain.usecase.FinishStudySessionUseCase
import com.oabapp.etica.domain.usecase.GetDueCardsUseCase
import com.oabapp.etica.domain.usecase.StartStudySessionUseCase
import com.oabapp.etica.domain.usecase.SubmitCardAnswerUseCase
import com.oabapp.etica.util.UserPreferences
import dagger.hilt.android.lifecycle.HiltViewModel
import kotlinx.coroutines.Job
import kotlinx.coroutines.delay
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.SharingStarted
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.stateIn
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch
import javax.inject.Inject

data class StudyUiState(
    val cards: List<StudyCard> = emptyList(),
    val indiceAtual: Int = 0,
    val cardVirado: Boolean = false,
    val respostaEscolhida: Int? = null,
    val mostrarExplicacao: Boolean = false,
    val sessaoEncerrada: Boolean = false,
    val totalCards: Int = 0,
    val acertos: Int = 0,
    val tempoRestanteSegundos: Int = 0,
    val carregando: Boolean = true,
    val focusLevel: Int = 2,
    val sessionId: Long = 0L
)

@HiltViewModel
class StudyViewModel @Inject constructor(
    savedStateHandle: SavedStateHandle,
    private val submitAnswer: SubmitCardAnswerUseCase,
    private val finishSession: FinishStudySessionUseCase,
    private val getDueCards: GetDueCardsUseCase,
    private val startSession: StartStudySessionUseCase,
    private val prefs: UserPreferences
) : ViewModel() {

    private val sessionId: Long = savedStateHandle["sessionId"] ?: 0L
    private val focusLevel: Int = savedStateHandle["focusLevel"] ?: 2
    private val isReviewMode: Boolean = savedStateHandle["isReviewMode"] ?: false

    private val _uiState = MutableStateFlow(
        StudyUiState(focusLevel = focusLevel, sessionId = sessionId)
    )
    val uiState: StateFlow<StudyUiState> = _uiState.asStateFlow()

    val lowTextMode: StateFlow<Boolean> = prefs.lowTextModeFlow
        .stateIn(viewModelScope, SharingStarted.WhileSubscribed(5_000), false)

    val sessionDuration: StateFlow<Int> = prefs.sessionDurationFlow
        .stateIn(viewModelScope, SharingStarted.WhileSubscribed(5_000), 10)

    private var timerJob: Job? = null

    init {
        carregarCards()
    }

    private fun carregarCards() {
        viewModelScope.launch {
            val duracao = prefs.sessionDurationFlow
                .stateIn(viewModelScope, SharingStarted.Eagerly, 10).value
            val limiteCards = (duracao * 2).coerceAtLeast(5)

            val cards = if (isReviewMode) {
                getDueCards().take(limiteCards)
            } else {
                // Cards novos + revisões para a sessão já criada
                val revisoes = getDueCards()
                val novos = startSession(
                    focusLevel = focusLevel,
                    durationMinutes = duracao,
                    moduleId = 0
                ).cards
                (revisoes + novos).distinctBy { it.id }.take(limiteCards)
            }

            _uiState.update {
                it.copy(
                    cards = cards,
                    totalCards = cards.size,
                    tempoRestanteSegundos = duracao * 60,
                    carregando = false
                )
            }
            iniciarCronometro()
        }
    }

    private fun iniciarCronometro() {
        timerJob?.cancel()
        timerJob = viewModelScope.launch {
            while (_uiState.value.tempoRestanteSegundos > 0 && !_uiState.value.sessaoEncerrada) {
                delay(1_000)
                _uiState.update { it.copy(tempoRestanteSegundos = it.tempoRestanteSegundos - 1) }
            }
            if (!_uiState.value.sessaoEncerrada) encerrarSessao()
        }
    }

    fun virarCard() = _uiState.update { it.copy(cardVirado = true) }

    fun escolherOpcao(indice: Int) {
        _uiState.update { it.copy(respostaEscolhida = indice, mostrarExplicacao = true) }
    }

    fun submeterResposta(difficultyFelt: Int) {
        val estado = _uiState.value
        val cardAtual = estado.cards.getOrNull(estado.indiceAtual) ?: return

        val acertou = when (cardAtual.type.name) {
            "FLASHCARD" -> difficultyFelt <= 2
            else -> estado.respostaEscolhida == cardAtual.correctOption
        }

        viewModelScope.launch {
            submitAnswer(
                sessionId = estado.sessionId,
                cardId = cardAtual.id,
                answeredCorrectly = acertou,
                difficultyFelt = difficultyFelt
            )
        }

        val novosAcertos = if (acertou) estado.acertos + 1 else estado.acertos
        val proximoIndice = estado.indiceAtual + 1

        if (proximoIndice >= estado.cards.size) {
            _uiState.update {
                it.copy(acertos = novosAcertos, indiceAtual = proximoIndice, sessaoEncerrada = true)
            }
            viewModelScope.launch {
                finishSession(estado.sessionId, estado.totalCards, novosAcertos)
            }
        } else {
            _uiState.update {
                it.copy(
                    acertos = novosAcertos,
                    indiceAtual = proximoIndice,
                    cardVirado = false,
                    respostaEscolhida = null,
                    mostrarExplicacao = false
                )
            }
        }
    }

    private fun encerrarSessao() {
        val estado = _uiState.value
        _uiState.update { it.copy(sessaoEncerrada = true) }
        viewModelScope.launch { finishSession(estado.sessionId, estado.totalCards, estado.acertos) }
    }

    override fun onCleared() {
        super.onCleared()
        timerJob?.cancel()
    }
}
