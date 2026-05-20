package com.oabapp.etica.presentation.screens.modules

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.oabapp.etica.domain.model.ProgressoModulo
import com.oabapp.etica.domain.usecase.GetModuleProgressUseCase
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

data class ModulesUiState(
    val progressos: List<ProgressoModulo> = emptyList(),
    val carregando: Boolean = true,
    val sessionId: Long? = null,
    val focoAtual: Int = 2
)

@HiltViewModel
class ModulesViewModel @Inject constructor(
    private val getProgress: GetModuleProgressUseCase,
    private val startSession: StartStudySessionUseCase,
    private val prefs: UserPreferences
) : ViewModel() {

    private val _uiState = MutableStateFlow(ModulesUiState())
    val uiState: StateFlow<ModulesUiState> = _uiState.asStateFlow()

    val sessionDuration: StateFlow<Int> = prefs.sessionDurationFlow
        .stateIn(viewModelScope, SharingStarted.WhileSubscribed(5_000), 10)

    init {
        carregarProgresso()
        carregarFoco()
    }

    private fun carregarProgresso() {
        viewModelScope.launch {
            val progressos = getProgress()
            _uiState.update { it.copy(progressos = progressos, carregando = false) }
        }
    }

    private fun carregarFoco() {
        viewModelScope.launch {
            prefs.focusLevelFlow.collect { nivel ->
                _uiState.update { it.copy(focoAtual = nivel) }
            }
        }
    }

    fun iniciarSessaoPorModulo(moduleId: Int) {
        viewModelScope.launch {
            val resultado = startSession(
                focusLevel = _uiState.value.focoAtual,
                durationMinutes = sessionDuration.value,
                moduleId = moduleId
            )
            _uiState.update { it.copy(sessionId = resultado.sessionId) }
        }
    }

    fun limparNavegacao() {
        _uiState.update { it.copy(sessionId = null) }
    }
}
