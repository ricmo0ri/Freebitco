package com.oabapp.etica.presentation.screens.study

import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier

// Implementação completa no Passo 5
@Composable
fun StudyScreen(
    onSessaoEncerrada: (sessionId: Long, totalCards: Int, acertos: Int) -> Unit,
    onVoltar: () -> Unit
) {
    Box(Modifier.fillMaxSize(), contentAlignment = Alignment.Center) {
        Text("Estudo — em construção")
    }
}
