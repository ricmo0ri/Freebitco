package com.oabapp.etica.presentation.screens.home

import androidx.compose.animation.AnimatedVisibility
import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.BarChart
import androidx.compose.material.icons.filled.Refresh
import androidx.compose.material.icons.filled.SentimentDissatisfied
import androidx.compose.material.icons.filled.SentimentNeutral
import androidx.compose.material.icons.filled.SentimentSatisfied
import androidx.compose.material.icons.filled.Settings
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedButton
import androidx.compose.material3.Scaffold
import androidx.compose.material3.SnackbarHost
import androidx.compose.material3.SnackbarHostState
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBar
import androidx.compose.material3.TopAppBarDefaults
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.hilt.navigation.compose.hiltViewModel

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun HomeScreen(
    onIniciarSessao: (sessionId: Long, focusLevel: Int) -> Unit,
    onAbrirRevisoes: () -> Unit,
    onAbrirRelatorio: () -> Unit,
    onAbrirConfiguracoes: () -> Unit,
    viewModel: HomeViewModel = hiltViewModel()
) {
    val uiState by viewModel.uiState.collectAsState()
    val sessionDuration by viewModel.sessionDuration.collectAsState()
    val snackbarHostState = remember { SnackbarHostState() }

    // Navega para a tela de estudo quando uma sessão é criada
    LaunchedEffect(uiState.sessionId) {
        uiState.sessionId?.let { id ->
            onIniciarSessao(id, uiState.focoSelecionado)
            viewModel.limparNavegacao()
        }
    }

    // Exibe snackbar em caso de erro
    LaunchedEffect(uiState.erro) {
        uiState.erro?.let { mensagem ->
            snackbarHostState.showSnackbar(mensagem)
        }
    }

    Scaffold(
        snackbarHost = { SnackbarHost(snackbarHostState) },
        topBar = {
            TopAppBar(
                title = {
                    Text(
                        text = "OAB Ética",
                        style = MaterialTheme.typography.titleLarge,
                        fontWeight = FontWeight.Bold
                    )
                },
                actions = {
                    IconButton(onClick = onAbrirRelatorio) {
                        Icon(
                            imageVector = Icons.Filled.BarChart,
                            contentDescription = "Relatório de desempenho"
                        )
                    }
                    IconButton(onClick = onAbrirConfiguracoes) {
                        Icon(
                            imageVector = Icons.Filled.Settings,
                            contentDescription = "Configurações"
                        )
                    }
                },
                colors = TopAppBarDefaults.topAppBarColors(
                    containerColor = MaterialTheme.colorScheme.primary,
                    titleContentColor = MaterialTheme.colorScheme.onPrimary,
                    actionIconContentColor = MaterialTheme.colorScheme.onPrimary
                )
            )
        }
    ) { innerPadding ->
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(innerPadding)
                .verticalScroll(rememberScrollState())
                .padding(horizontal = 16.dp, vertical = 20.dp),
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.spacedBy(20.dp)
        ) {
            // ─── Cabeçalho de boas-vindas ───────────────────────────────────
            Column(
                horizontalAlignment = Alignment.CenterHorizontally,
                modifier = Modifier.fillMaxWidth()
            ) {
                Text(
                    text = "Bem-vindo(a) ao seu estudo!",
                    style = MaterialTheme.typography.bodyMedium,
                    color = MaterialTheme.colorScheme.onSurfaceVariant
                )
                Spacer(Modifier.height(4.dp))
                Text(
                    text = "Sessão de $sessionDuration minutos",
                    style = MaterialTheme.typography.bodySmall,
                    color = MaterialTheme.colorScheme.outline
                )
            }

            // ─── Seleção de nível de foco ────────────────────────────────────
            Card(
                modifier = Modifier.fillMaxWidth(),
                colors = CardDefaults.cardColors(
                    containerColor = MaterialTheme.colorScheme.surfaceVariant
                )
            ) {
                Column(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(16.dp),
                    horizontalAlignment = Alignment.CenterHorizontally,
                    verticalArrangement = Arrangement.spacedBy(12.dp)
                ) {
                    Text(
                        text = "Como está seu foco agora?",
                        style = MaterialTheme.typography.titleMedium,
                        fontWeight = FontWeight.SemiBold,
                        textAlign = TextAlign.Center
                    )

                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.spacedBy(8.dp)
                    ) {
                        BotaoFoco(
                            rotulo = "Difícil\nfocar",
                            icone = Icons.Filled.SentimentDissatisfied,
                            selecionado = uiState.focoSelecionado == 1,
                            onClick = { viewModel.selecionarFoco(1) },
                            modifier = Modifier.weight(1f)
                        )
                        BotaoFoco(
                            rotulo = "Mais ou\nmenos",
                            icone = Icons.Filled.SentimentNeutral,
                            selecionado = uiState.focoSelecionado == 2,
                            onClick = { viewModel.selecionarFoco(2) },
                            modifier = Modifier.weight(1f)
                        )
                        BotaoFoco(
                            rotulo = "Focado!",
                            icone = Icons.Filled.SentimentSatisfied,
                            selecionado = uiState.focoSelecionado == 3,
                            onClick = { viewModel.selecionarFoco(3) },
                            modifier = Modifier.weight(1f)
                        )
                    }
                }
            }

            // ─── Botão principal de iniciar sessão ───────────────────────────
            Button(
                onClick = { viewModel.iniciarSessao(moduleId = 0) },
                enabled = !uiState.carregando,
                modifier = Modifier
                    .fillMaxWidth()
                    .height(56.dp),
                shape = MaterialTheme.shapes.medium
            ) {
                if (uiState.carregando) {
                    CircularProgressIndicator(
                        modifier = Modifier.size(22.dp),
                        color = MaterialTheme.colorScheme.onPrimary,
                        strokeWidth = 2.5.dp
                    )
                } else {
                    Text(
                        text = "Iniciar Sessão de Estudo",
                        style = MaterialTheme.typography.titleMedium,
                        fontWeight = FontWeight.Bold
                    )
                }
            }

            // ─── Card de revisões pendentes ──────────────────────────────────
            Card(
                modifier = Modifier.fillMaxWidth(),
                colors = CardDefaults.cardColors(
                    containerColor = MaterialTheme.colorScheme.secondaryContainer
                ),
                elevation = CardDefaults.cardElevation(defaultElevation = 2.dp)
            ) {
                Row(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(16.dp),
                    verticalAlignment = Alignment.CenterVertically,
                    horizontalArrangement = Arrangement.SpaceBetween
                ) {
                    Row(
                        verticalAlignment = Alignment.CenterVertically,
                        modifier = Modifier.weight(1f)
                    ) {
                        Icon(
                            imageVector = Icons.Filled.Refresh,
                            contentDescription = null,
                            tint = MaterialTheme.colorScheme.onSecondaryContainer,
                            modifier = Modifier.size(28.dp)
                        )
                        Spacer(Modifier.width(12.dp))
                        Column {
                            Text(
                                text = "Revisões pendentes hoje",
                                style = MaterialTheme.typography.bodyMedium,
                                fontWeight = FontWeight.SemiBold,
                                color = MaterialTheme.colorScheme.onSecondaryContainer
                            )
                            Text(
                                text = "${uiState.revisoesPendentes} cards",
                                style = MaterialTheme.typography.bodySmall,
                                color = MaterialTheme.colorScheme.onSecondaryContainer
                            )
                        }
                    }

                    Spacer(Modifier.width(8.dp))

                    AnimatedVisibility(visible = uiState.revisoesPendentes > 0) {
                        Button(
                            onClick = onAbrirRevisoes,
                            colors = ButtonDefaults.buttonColors(
                                containerColor = MaterialTheme.colorScheme.secondary
                            ),
                            shape = MaterialTheme.shapes.small
                        ) {
                            Text(
                                text = "Revisar agora",
                                style = MaterialTheme.typography.labelLarge
                            )
                        }
                    }

                    AnimatedVisibility(visible = uiState.revisoesPendentes == 0) {
                        Text(
                            text = "Em dia!",
                            style = MaterialTheme.typography.labelLarge,
                            color = MaterialTheme.colorScheme.onSecondaryContainer,
                            fontWeight = FontWeight.Bold
                        )
                    }
                }
            }

            // ─── Dica adaptativa de foco ─────────────────────────────────────
            AnimatedVisibility(visible = uiState.focoSelecionado == 1) {
                Surface(
                    modifier = Modifier.fillMaxWidth(),
                    color = MaterialTheme.colorScheme.errorContainer,
                    shape = MaterialTheme.shapes.medium
                ) {
                    Text(
                        text = "Dica: com foco baixo, a sessão usará cards mais fáceis e curtos para manter o ritmo.",
                        style = MaterialTheme.typography.bodySmall,
                        color = MaterialTheme.colorScheme.onErrorContainer,
                        modifier = Modifier.padding(12.dp)
                    )
                }
            }

            AnimatedVisibility(visible = uiState.focoSelecionado == 3) {
                Surface(
                    modifier = Modifier.fillMaxWidth(),
                    color = MaterialTheme.colorScheme.primaryContainer,
                    shape = MaterialTheme.shapes.medium
                ) {
                    Text(
                        text = "Ótimo! Com foco total, a sessão trará os cards mais difíceis para maximizar seu aprendizado.",
                        style = MaterialTheme.typography.bodySmall,
                        color = MaterialTheme.colorScheme.onPrimaryContainer,
                        modifier = Modifier.padding(12.dp)
                    )
                }
            }
        }
    }
}

// ─── Componente: botão de seleção de foco ────────────────────────────────────

@Composable
private fun BotaoFoco(
    rotulo: String,
    icone: ImageVector,
    selecionado: Boolean,
    onClick: () -> Unit,
    modifier: Modifier = Modifier
) {
    val corBorda = if (selecionado)
        MaterialTheme.colorScheme.primary
    else
        MaterialTheme.colorScheme.outline.copy(alpha = 0.4f)

    val corFundo = if (selecionado)
        MaterialTheme.colorScheme.primaryContainer
    else
        MaterialTheme.colorScheme.surface

    val corConteudo = if (selecionado)
        MaterialTheme.colorScheme.onPrimaryContainer
    else
        MaterialTheme.colorScheme.onSurfaceVariant

    OutlinedButton(
        onClick = onClick,
        modifier = modifier.height(80.dp),
        border = BorderStroke(
            width = if (selecionado) 2.dp else 1.dp,
            color = corBorda
        ),
        colors = ButtonDefaults.outlinedButtonColors(
            containerColor = corFundo,
            contentColor = corConteudo
        ),
        shape = MaterialTheme.shapes.medium
    ) {
        Column(
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.Center
        ) {
            Icon(
                imageVector = icone,
                contentDescription = rotulo,
                modifier = Modifier.size(28.dp),
                tint = corConteudo
            )
            Spacer(Modifier.height(4.dp))
            Text(
                text = rotulo,
                style = MaterialTheme.typography.labelSmall,
                textAlign = TextAlign.Center,
                color = corConteudo,
                fontWeight = if (selecionado) FontWeight.Bold else FontWeight.Normal
            )
        }
    }
}
