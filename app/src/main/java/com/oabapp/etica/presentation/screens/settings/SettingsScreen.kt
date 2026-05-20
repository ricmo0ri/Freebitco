package com.oabapp.etica.presentation.screens.settings

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowBack
import androidx.compose.material.icons.filled.DarkMode
import androidx.compose.material.icons.filled.NotificationsNone
import androidx.compose.material.icons.filled.TextDecrease
import androidx.compose.material.icons.filled.Timer
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.Divider
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.FilterChip
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Switch
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBar
import androidx.compose.material3.TopAppBarDefaults
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.hilt.navigation.compose.hiltViewModel
import com.oabapp.etica.util.Constants

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun SettingsScreen(
    onVoltar: () -> Unit,
    viewModel: SettingsViewModel = hiltViewModel()
) {
    val uiState by viewModel.uiState.collectAsState()

    Scaffold(
        topBar = {
            TopAppBar(
                title = {
                    Text(
                        "Configurações",
                        style = MaterialTheme.typography.titleLarge,
                        fontWeight = FontWeight.Bold
                    )
                },
                navigationIcon = {
                    IconButton(onClick = onVoltar) {
                        Icon(Icons.Filled.ArrowBack, "Voltar")
                    }
                },
                colors = TopAppBarDefaults.topAppBarColors(
                    containerColor = MaterialTheme.colorScheme.primary,
                    titleContentColor = MaterialTheme.colorScheme.onPrimary,
                    navigationIconContentColor = MaterialTheme.colorScheme.onPrimary
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
            verticalArrangement = Arrangement.spacedBy(16.dp)
        ) {

            // ─── Seção: Sessão de estudo ──────────────────────────────
            SecaoCard(titulo = "Sessão de Estudo") {
                Column(verticalArrangement = Arrangement.spacedBy(8.dp)) {
                    Row(
                        verticalAlignment = Alignment.CenterVertically,
                        horizontalArrangement = Arrangement.spacedBy(6.dp)
                    ) {
                        Icon(Icons.Filled.Timer, null, tint = MaterialTheme.colorScheme.primary)
                        Text(
                            "Duração padrão da sessão",
                            style = MaterialTheme.typography.bodyMedium,
                            fontWeight = FontWeight.Medium
                        )
                    }
                    Row(
                        horizontalArrangement = Arrangement.spacedBy(8.dp),
                        modifier = Modifier.fillMaxWidth()
                    ) {
                        Constants.DURACOES_SESSAO.forEach { minutos ->
                            FilterChip(
                                selected = uiState.sessionDuration == minutos,
                                onClick = { viewModel.setDuracao(minutos) },
                                label = {
                                    Text(
                                        "$minutos min",
                                        fontWeight = if (uiState.sessionDuration == minutos)
                                            FontWeight.Bold else FontWeight.Normal
                                    )
                                }
                            )
                        }
                    }
                    Text(
                        text = when (uiState.sessionDuration) {
                            5 -> "Sessão curta: ideal para nível de foco baixo (aprox. 10 cards)"
                            10 -> "Sessão padrão: equilibra aprendizado e foco (aprox. 20 cards)"
                            15 -> "Sessão longa: para quando estiver bem focado (aprox. 30 cards)"
                            else -> ""
                        },
                        style = MaterialTheme.typography.bodySmall,
                        color = MaterialTheme.colorScheme.outline
                    )
                }
            }

            // ─── Seção: Acessibilidade TDAH ───────────────────────────
            SecaoCard(titulo = "Acessibilidade TDAH") {
                Column(verticalArrangement = Arrangement.spacedBy(0.dp)) {
                    ItemToggle(
                        icone = Icons.Filled.TextDecrease,
                        titulo = "Modo pouco texto",
                        descricao = "Exibe apenas bullets e termos-chave. Ideal para " +
                                "reduzir sobrecarga cognitiva.",
                        valor = uiState.lowTextMode,
                        onMudar = viewModel::setLowTextMode
                    )
                    Divider(modifier = Modifier.padding(vertical = 4.dp))
                    ItemToggle(
                        icone = Icons.Filled.NotificationsNone,
                        titulo = "Lembrete suave",
                        descricao = "Vibração leve a cada 30 minutos sem estudar para " +
                                "retomar o foco sem pressão.",
                        valor = uiState.softReminder,
                        onMudar = viewModel::setSoftReminder
                    )
                }
            }

            // ─── Seção: Aparência ─────────────────────────────────────
            SecaoCard(titulo = "Aparência") {
                ItemToggle(
                    icone = Icons.Filled.DarkMode,
                    titulo = "Modo noturno",
                    descricao = "Reduz a luminosidade da tela para estudar à noite " +
                            "com mais conforto.",
                    valor = uiState.darkMode,
                    onMudar = viewModel::setDarkMode
                )
            }

            // ─── Rodapé informativo ───────────────────────────────────
            Spacer(Modifier.height(8.dp))
            Text(
                text = "OAB Ética — Versão 1.0.0\n" +
                        "Conteúdo baseado na Lei 8.906/94 e Res. 02/2015\n" +
                        "Funciona 100% offline.",
                style = MaterialTheme.typography.bodySmall,
                color = MaterialTheme.colorScheme.outline,
                modifier = Modifier.fillMaxWidth(),
                textAlign = androidx.compose.ui.text.style.TextAlign.Center
            )
        }
    }
}

// ─── Componentes internos ─────────────────────────────────────────────────────

@Composable
private fun SecaoCard(
    titulo: String,
    conteudo: @Composable () -> Unit
) {
    Card(
        modifier = Modifier.fillMaxWidth(),
        elevation = CardDefaults.cardElevation(2.dp)
    ) {
        Column(modifier = Modifier.padding(16.dp)) {
            Text(
                text = titulo.uppercase(),
                style = MaterialTheme.typography.labelSmall,
                color = MaterialTheme.colorScheme.primary,
                fontWeight = FontWeight.Bold,
                letterSpacing = androidx.compose.ui.unit.TextUnit(1.5f, androidx.compose.ui.unit.TextUnitType.Sp)
            )
            Spacer(Modifier.height(12.dp))
            conteudo()
        }
    }
}

@Composable
private fun ItemToggle(
    icone: ImageVector,
    titulo: String,
    descricao: String,
    valor: Boolean,
    onMudar: (Boolean) -> Unit
) {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .padding(vertical = 6.dp),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.spacedBy(12.dp)
    ) {
        Icon(
            imageVector = icone,
            contentDescription = null,
            tint = if (valor) MaterialTheme.colorScheme.primary
                   else MaterialTheme.colorScheme.outline,
            modifier = Modifier.padding(top = 2.dp)
        )
        Column(modifier = Modifier.weight(1f)) {
            Text(
                text = titulo,
                style = MaterialTheme.typography.bodyMedium,
                fontWeight = FontWeight.Medium
            )
            Text(
                text = descricao,
                style = MaterialTheme.typography.bodySmall,
                color = MaterialTheme.colorScheme.outline
            )
        }
        Switch(
            checked = valor,
            onCheckedChange = onMudar
        )
    }
}
