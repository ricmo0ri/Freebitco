package com.oabapp.etica.presentation.screens.review

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.oabapp.etica.domain.model.StudyCard
import com.oabapp.etica.domain.usecase.GetDueCardsUseCase
import com.oabapp.etica.domain.usecase.StartStudySessionUseCase
import com.oabapp.etica.util.UserPreferences
import dagger.hilt.android.lifecycle.HiltViewModel
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.SharingStarted
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.stateIn
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch
import javax.inject.Inject

data class ReviewUiState(
    val cardsPendentes: List<StudyCard> = emptyList(),
    val carregando: Boolean = true,
    val sessionId: Long? = null
)

@HiltViewModel
class ReviewViewModel @Inject constructor(
    private val getDueCards: GetDueCardsUseCase,
    private val startSession: StartStudySessionUseCase,
    private val prefs: UserPreferences
) : ViewModel() {

    private val _uiState = MutableStateFlow(ReviewUiState())
    val uiState: StateFlow<ReviewUiState> = _uiState.asStateFlow()

    val focusLevel: StateFlow<Int> = prefs.focusLevelFlow
        .stateIn(viewModelScope, SharingStarted.WhileSubscribed(5_000), 2)

    val sessionDuration: StateFlow<Int> = prefs.sessionDurationFlow
        .stateIn(viewModelScope, SharingStarted.WhileSubscribed(5_000), 10)

    init {
        carregarPendentes()
    }

    private fun carregarPendentes() {
        viewModelScope.launch {
            getDueCards.invocarFlow().collect { cards ->
                _uiState.update { it.copy(cardsPendentes = cards, carregando = false) }
            }
        }
    }

    fun iniciarRevisao() {
        viewModelScope.launch {
            val resultado = startSession(
                focusLevel = focusLevel.value,
                durationMinutes = sessionDuration.value,
                moduleId = 0
            )
            _uiState.update { it.copy(sessionId = resultado.sessionId) }
        }
    }

    fun limparNavegacao() {
        _uiState.update { it.copy(sessionId = null) }
    }
}
