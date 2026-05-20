package com.oabapp.etica.presentation.screens.home

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
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

data class HomeUiState(
    val focoSelecionado: Int = 2,           // 1=Difícil, 2=Médio, 3=Focado
    val revisoesPendentes: Int = 0,
    val carregando: Boolean = false,
    val sessionId: Long? = null,            // preenchido ao iniciar sessão
    val erro: String? = null
)

@HiltViewModel
class HomeViewModel @Inject constructor(
    private val startSession: StartStudySessionUseCase,
    private val getDueCards: GetDueCardsUseCase,
    private val prefs: UserPreferences
) : ViewModel() {

    private val _uiState = MutableStateFlow(HomeUiState())
    val uiState: StateFlow<HomeUiState> = _uiState.asStateFlow()

    val sessionDuration: StateFlow<Int> = prefs.sessionDurationFlow
        .stateIn(viewModelScope, SharingStarted.WhileSubscribed(5_000), 10)

    init {
        observarRevisoesPendentes()
        carregarFocoPadrao()
    }

    private fun observarRevisoesPendentes() {
        viewModelScope.launch {
            getDueCards.invocarContador().collect { count ->
                _uiState.update { it.copy(revisoesPendentes = count) }
            }
        }
    }

    private fun carregarFocoPadrao() {
        viewModelScope.launch {
            prefs.focusLevelFlow.collect { nivel ->
                _uiState.update { it.copy(focoSelecionado = nivel) }
            }
        }
    }

    fun selecionarFoco(nivel: Int) {
        _uiState.update { it.copy(focoSelecionado = nivel) }
        viewModelScope.launch { prefs.setFocusLevel(nivel) }
    }

    fun iniciarSessao(moduleId: Int = 0) {
        val estado = _uiState.value
        viewModelScope.launch {
            _uiState.update { it.copy(carregando = true, erro = null) }
            try {
                val resultado = startSession(
                    focusLevel = estado.focoSelecionado,
                    durationMinutes = sessionDuration.value,
                    moduleId = moduleId
                )
                _uiState.update { it.copy(carregando = false, sessionId = resultado.sessionId) }
            } catch (e: Exception) {
                _uiState.update { it.copy(carregando = false, erro = "Erro ao iniciar sessão") }
            }
        }
    }

    fun limparNavegacao() {
        _uiState.update { it.copy(sessionId = null) }
    }
}
