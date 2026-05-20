package com.oabapp.etica.presentation.screens.modules

import androidx.compose.animation.AnimatedVisibility
import androidx.compose.animation.expandVertically
import androidx.compose.animation.shrinkVertically
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowBack
import androidx.compose.material.icons.filled.ExpandLess
import androidx.compose.material.icons.filled.ExpandMore
import androidx.compose.material.icons.filled.MenuBook
import androidx.compose.material3.Button
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.Divider
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.LinearProgressIndicator
import androidx.compose.material3.ListItem
import androidx.compose.material3.ListItemDefaults
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBar
import androidx.compose.material3.TopAppBarDefaults
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateMapOf
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.hilt.navigation.compose.hiltViewModel
import com.oabapp.etica.domain.model.ProgressoModulo

// ─── Definição dos módulos estáticos ─────────────────────────────────────────

private data class ModuloInfo(
    val moduleId: Int,
    val nome: String,
    val subtemas: List<String>
)

private val MODULOS = listOf(
    ModuloInfo(
        moduleId = 1,
        nome = "Estatuto da Advocacia — Lei 8.906/94",
        subtemas = listOf(
            "Direitos do Advogado (Arts. 6 e 7)",
            "Sigilo Profissional",
            "Sanções e Infrações",
            "Incompatibilidades",
            "Mandato Judicial",
            "Processo Disciplinar"
        )
    ),
    ModuloInfo(
        moduleId = 2,
        nome = "Código de Ética e Disciplina — Res. 02/2015",
        subtemas = listOf(
            "Sigilo Profissional",
            "Publicidade na Advocacia",
            "Honorários",
            "Relacionamento com Clientes",
            "Advocacia Pro Bono",
            "Conflito de Interesses"
        )
    ),
    ModuloInfo(
        moduleId = 3,
        nome = "Regulamento Geral do Estatuto",
        subtemas = listOf(
            "Estrutura da OAB",
            "Inscrição e Cancelamento",
            "Eleições OAB",
            "Caixa de Assistência"
        )
    )
)

// ─── Composable principal ─────────────────────────────────────────────────────

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun ModulesScreen(
    onIniciarSessao: (sessionId: Long, focusLevel: Int) -> Unit,
    onVoltar: () -> Unit,
    viewModel: ModulesViewModel = hiltViewModel()
) {
    val uiState by viewModel.uiState.collectAsState()

    // Mapa de expansão: moduleId -> Boolean
    val expandidoMap = remember { mutableStateMapOf<Int, Boolean>() }

    // Navega para a tela de estudo quando uma sessão é criada
    LaunchedEffect(uiState.sessionId) {
        uiState.sessionId?.let { id ->
            onIniciarSessao(id, uiState.focoAtual)
            viewModel.limparNavegacao()
        }
    }

    Scaffold(
        topBar = {
            TopAppBar(
                title = {
                    Text(
                        text = "Módulos de Estudo",
                        style = MaterialTheme.typography.titleLarge,
                        fontWeight = FontWeight.Bold
                    )
                },
                navigationIcon = {
                    IconButton(onClick = onVoltar) {
                        Icon(
                            imageVector = Icons.Filled.ArrowBack,
                            contentDescription = "Voltar"
                        )
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

        if (uiState.carregando) {
            Box(
                modifier = Modifier
                    .fillMaxSize()
                    .padding(innerPadding),
                contentAlignment = Alignment.Center
            ) {
                CircularProgressIndicator()
            }
            return@Scaffold
        }

        LazyColumn(
            modifier = Modifier
                .fillMaxSize()
                .padding(innerPadding)
                .padding(horizontal = 16.dp),
            verticalArrangement = Arrangement.spacedBy(12.dp),
            contentPadding = androidx.compose.foundation.layout.PaddingValues(vertical = 16.dp)
        ) {
            items(MODULOS, key = { it.moduleId }) { modulo ->
                val progresso = uiState.progressos.firstOrNull { it.moduleId == modulo.moduleId }
                val expandido = expandidoMap[modulo.moduleId] ?: false

                CardModulo(
                    modulo = modulo,
                    progresso = progresso,
                    expandido = expandido,
                    onToggleExpandir = {
                        expandidoMap[modulo.moduleId] = !expandido
                    },
                    onEstudar = { viewModel.iniciarSessaoPorModulo(modulo.moduleId) }
                )
            }

            // Espaço no final para o último card não ficar colado na barra de navegação
            item { Spacer(Modifier.height(8.dp)) }
        }
    }
}

// ─── Componente: card de módulo ───────────────────────────────────────────────

@Composable
private fun CardModulo(
    modulo: ModuloInfo,
    progresso: ProgressoModulo?,
    expandido: Boolean,
    onToggleExpandir: () -> Unit,
    onEstudar: () -> Unit
) {
    val percentual = progresso?.percentualDominado ?: 0f

    Card(
        modifier = Modifier.fillMaxWidth(),
        elevation = CardDefaults.cardElevation(defaultElevation = 3.dp),
        colors = CardDefaults.cardColors(
            containerColor = MaterialTheme.colorScheme.surface
        )
    ) {
        Column(modifier = Modifier.fillMaxWidth()) {

            // ─── Cabeçalho clicável (expande/colapsa subtemas) ────────────
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(start = 16.dp, end = 8.dp, top = 14.dp, bottom = 10.dp),
                verticalAlignment = Alignment.CenterVertically
            ) {
                Icon(
                    imageVector = Icons.Filled.MenuBook,
                    contentDescription = null,
                    tint = MaterialTheme.colorScheme.primary,
                    modifier = Modifier.size(24.dp)
                )
                Spacer(Modifier.width(10.dp))
                Text(
                    text = modulo.nome,
                    style = MaterialTheme.typography.titleSmall,
                    fontWeight = FontWeight.SemiBold,
                    color = MaterialTheme.colorScheme.onSurface,
                    modifier = Modifier.weight(1f)
                )
                IconButton(onClick = onToggleExpandir) {
                    Icon(
                        imageVector = if (expandido) Icons.Filled.ExpandLess else Icons.Filled.ExpandMore,
                        contentDescription = if (expandido) "Recolher subtemas" else "Expandir subtemas",
                        tint = MaterialTheme.colorScheme.onSurfaceVariant
                    )
                }
            }

            // ─── Barra de progresso ───────────────────────────────────────
            Column(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(horizontal = 16.dp)
            ) {
                LinearProgressIndicator(
                    progress = { percentual / 100f },
                    modifier = Modifier
                        .fillMaxWidth()
                        .height(8.dp),
                    color = MaterialTheme.colorScheme.primary,
                    trackColor = MaterialTheme.colorScheme.surfaceVariant
                )
                Spacer(Modifier.height(4.dp))
                Text(
                    text = "${percentual.toInt()}% dominado",
                    style = MaterialTheme.typography.bodySmall,
                    color = MaterialTheme.colorScheme.onSurfaceVariant
                )
            }

            Spacer(Modifier.height(12.dp))

            // ─── Botão de estudar ─────────────────────────────────────────
            Button(
                onClick = onEstudar,
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(horizontal = 16.dp),
                shape = MaterialTheme.shapes.small
            ) {
                Text(
                    text = "Estudar este módulo",
                    style = MaterialTheme.typography.labelLarge
                )
            }

            Spacer(Modifier.height(12.dp))

            // ─── Lista expandível de subtemas ─────────────────────────────
            AnimatedVisibility(
                visible = expandido,
                enter = expandVertically(),
                exit = shrinkVertically()
            ) {
                Column(modifier = Modifier.fillMaxWidth()) {
                    Divider(
                        modifier = Modifier.padding(horizontal = 16.dp),
                        color = MaterialTheme.colorScheme.outlineVariant
                    )
                    modulo.subtemas.forEachIndexed { index, subtema ->
                        ListItem(
                            headlineContent = {
                                Text(
                                    text = subtema,
                                    style = MaterialTheme.typography.bodyMedium,
                                    color = MaterialTheme.colorScheme.onSurface
                                )
                            },
                            leadingContent = {
                                Text(
                                    text = "${index + 1}.",
                                    style = MaterialTheme.typography.bodySmall,
                                    color = MaterialTheme.colorScheme.primary,
                                    fontWeight = FontWeight.Bold
                                )
                            },
                            colors = ListItemDefaults.colors(
                                containerColor = MaterialTheme.colorScheme.surfaceVariant.copy(alpha = 0.5f)
                            )
                        )
                        if (index < modulo.subtemas.lastIndex) {
                            Divider(
                                modifier = Modifier.padding(horizontal = 24.dp),
                                color = MaterialTheme.colorScheme.outlineVariant.copy(alpha = 0.5f)
                            )
                        }
                    }
                    Spacer(Modifier.height(4.dp))
                }
            }
        }
    }
}
