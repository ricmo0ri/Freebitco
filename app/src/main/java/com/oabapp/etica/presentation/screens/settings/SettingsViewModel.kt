package com.oabapp.etica.presentation.screens.settings

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.oabapp.etica.util.UserPreferences
import dagger.hilt.android.lifecycle.HiltViewModel
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch
import javax.inject.Inject

data class SettingsUiState(
    val sessionDuration: Int = 10,
    val lowTextMode: Boolean = false,
    val softReminder: Boolean = false,
    val darkMode: Boolean = false,
    val carregando: Boolean = true
)

@HiltViewModel
class SettingsViewModel @Inject constructor(
    private val prefs: UserPreferences
) : ViewModel() {

    private val _uiState = MutableStateFlow(SettingsUiState())
    val uiState: StateFlow<SettingsUiState> = _uiState.asStateFlow()

    init {
        observarPreferencias()
    }

    private fun observarPreferencias() {
        viewModelScope.launch {
            prefs.sessionDurationFlow.collect { duracao ->
                _uiState.update { it.copy(sessionDuration = duracao) }
            }
        }
        viewModelScope.launch {
            prefs.lowTextModeFlow.collect { v ->
                _uiState.update { it.copy(lowTextMode = v) }
            }
        }
        viewModelScope.launch {
            prefs.softReminderFlow.collect { v ->
                _uiState.update { it.copy(softReminder = v) }
            }
        }
        viewModelScope.launch {
            prefs.darkModeFlow.collect { v ->
                _uiState.update { it.copy(darkMode = v, carregando = false) }
            }
        }
    }

    fun setDuracao(minutos: Int) {
        viewModelScope.launch { prefs.setSessionDuration(minutos) }
    }

    fun setLowTextMode(ativo: Boolean) {
        viewModelScope.launch { prefs.setLowTextMode(ativo) }
    }

    fun setSoftReminder(ativo: Boolean) {
        viewModelScope.launch { prefs.setSoftReminder(ativo) }
    }

    fun setDarkMode(ativo: Boolean) {
        viewModelScope.launch { prefs.setDarkMode(ativo) }
    }
}
