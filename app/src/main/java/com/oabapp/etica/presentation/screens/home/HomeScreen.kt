package com.oabapp.etica.presentation.screens.home

import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier

// Implementação completa no Passo 5
@Composable
fun HomeScreen(
    onIniciarSessao: (sessionId: Long, focusLevel: Int) -> Unit,
    onAbrirRevisoes: () -> Unit,
    onAbrirRelatorio: () -> Unit,
    onAbrirConfiguracoes: () -> Unit
) {
    Box(Modifier.fillMaxSize(), contentAlignment = Alignment.Center) {
        Text("Home — em construção")
    }
}
