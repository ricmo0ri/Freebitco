package com.oabapp.etica.presentation.screens.report

import androidx.lifecycle.SavedStateHandle
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.oabapp.etica.domain.model.DailyReport
import com.oabapp.etica.domain.usecase.GetDailyReportUseCase
import dagger.hilt.android.lifecycle.HiltViewModel
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch
import javax.inject.Inject

data class ReportUiState(
    val relatorio: DailyReport? = null,
    val totalCards: Int = 0,
    val acertos: Int = 0,
    val carregando: Boolean = true
)

@HiltViewModel
class ReportViewModel @Inject constructor(
    savedStateHandle: SavedStateHandle,
    private val getDailyReport: GetDailyReportUseCase
) : ViewModel() {

    private val sessionId: Long = savedStateHandle["sessionId"] ?: 0L
    private val totalCards: Int = savedStateHandle["totalCards"] ?: 0
    private val correctAnswers: Int = savedStateHandle["correctAnswers"] ?: 0

    private val _uiState = MutableStateFlow(
        ReportUiState(totalCards = totalCards, acertos = correctAnswers)
    )
    val uiState: StateFlow<ReportUiState> = _uiState.asStateFlow()

    init {
        carregarRelatorio()
    }

    private fun carregarRelatorio() {
        viewModelScope.launch {
            val relatorio = getDailyReport(sessionId)
            _uiState.update { it.copy(relatorio = relatorio, carregando = false) }
        }
    }
}
