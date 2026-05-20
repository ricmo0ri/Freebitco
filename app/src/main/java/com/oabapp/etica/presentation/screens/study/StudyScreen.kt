package com.oabapp.etica.presentation.screens.study

import androidx.compose.animation.AnimatedContent
import androidx.compose.animation.fadeIn
import androidx.compose.animation.fadeOut
import androidx.compose.animation.togetherWith
import androidx.compose.foundation.BorderStroke
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
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.AccessTime
import androidx.compose.material.icons.filled.ArrowBack
import androidx.compose.material.icons.filled.Check
import androidx.compose.material.icons.filled.Close
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.FilledTonalButton
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.LinearProgressIndicator
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedButton
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBar
import androidx.compose.material3.TopAppBarDefaults
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.semantics.contentDescription
import androidx.compose.ui.semantics.semantics
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.hilt.navigation.compose.hiltViewModel
import com.oabapp.etica.domain.model.CardType
import com.oabapp.etica.domain.model.StudyCard
import com.oabapp.etica.presentation.theme.Amarelo
import com.oabapp.etica.presentation.theme.Verde
import com.oabapp.etica.presentation.theme.Vermelho

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun StudyScreen(
    onSessaoEncerrada: (sessionId: Long, totalCards: Int, acertos: Int) -> Unit,
    onVoltar: () -> Unit,
    viewModel: StudyViewModel = hiltViewModel()
) {
    val uiState by viewModel.uiState.collectAsState()
    val lowTextMode by viewModel.lowTextMode.collectAsState()

    // Navega ao encerrar sessão
    LaunchedEffect(uiState.sessaoEncerrada) {
        if (uiState.sessaoEncerrada) {
            onSessaoEncerrada(uiState.sessionId, uiState.totalCards, uiState.acertos)
        }
    }

    Scaffold(
        topBar = {
            TopAppBar(
                title = {
                    if (uiState.focusLevel >= 3) {
                        // Nível 3: mostra progresso na barra de topo
                        val progresso = if (uiState.totalCards > 0)
                            uiState.indiceAtual.toFloat() / uiState.totalCards else 0f
                        Column {
                            Text(
                                "Card ${uiState.indiceAtual + 1} de ${uiState.totalCards}",
                                style = MaterialTheme.typography.labelLarge
                            )
                            LinearProgressIndicator(
                                progress = { progresso },
                                modifier = Modifier.fillMaxWidth().padding(top = 4.dp)
                            )
                        }
                    } else {
                        Text("Sessão de Estudo")
                    }
                },
                navigationIcon = {
                    IconButton(onClick = onVoltar) {
                        Icon(Icons.Filled.ArrowBack, "Voltar")
                    }
                },
                actions = {
                    // Cronômetro discreto com descrição acessível
                    val minutos = uiState.tempoRestanteSegundos / 60
                    val segundos = uiState.tempoRestanteSegundos % 60
                    Row(
                        verticalAlignment = Alignment.CenterVertically,
                        modifier = Modifier
                            .padding(end = 8.dp)
                            .semantics {
                                contentDescription = "Tempo restante: $minutos minutos e $segundos segundos"
                            }
                    ) {
                        Icon(
                            Icons.Filled.AccessTime,
                            contentDescription = null,
                            modifier = Modifier.size(16.dp)
                        )
                        Text(
                            text = " %02d:%02d".format(minutos, segundos),
                            style = MaterialTheme.typography.labelMedium
                        )
                    }
                },
                colors = TopAppBarDefaults.topAppBarColors(
                    containerColor = MaterialTheme.colorScheme.primary,
                    titleContentColor = MaterialTheme.colorScheme.onPrimary,
                    navigationIconContentColor = MaterialTheme.colorScheme.onPrimary,
                    actionIconContentColor = MaterialTheme.colorScheme.onPrimary
                )
            )
        }
    ) { innerPadding ->
        when {
            uiState.carregando -> {
                Box(Modifier.fillMaxSize().padding(innerPadding), Alignment.Center) {
                    CircularProgressIndicator()
                }
            }
            uiState.cards.isEmpty() -> {
                Box(Modifier.fillMaxSize().padding(innerPadding), Alignment.Center) {
                    Column(horizontalAlignment = Alignment.CenterHorizontally) {
                        Text("Nenhum card disponível", style = MaterialTheme.typography.titleMedium)
                        Spacer(Modifier.height(12.dp))
                        Button(onClick = onVoltar) { Text("Voltar") }
                    }
                }
            }
            else -> {
                val cardAtual = uiState.cards.getOrNull(uiState.indiceAtual)
                if (cardAtual != null) {
                    AnimatedContent(
                        targetState = uiState.indiceAtual,
                        transitionSpec = { fadeIn() togetherWith fadeOut() },
                        label = "card_transition"
                    ) { _ ->
                        ConteudoCard(
                            card = cardAtual,
                            uiState = uiState,
                            lowTextMode = lowTextMode,
                            onVirar = viewModel::virarCard,
                            onEscolher = viewModel::escolherOpcao,
                            onSubmeter = viewModel::submeterResposta,
                            modifier = Modifier.padding(innerPadding)
                        )
                    }
                }
            }
        }
    }
}

// ─── Conteúdo principal do card ──────────────────────────────────────────────

@Composable
private fun ConteudoCard(
    card: StudyCard,
    uiState: StudyUiState,
    lowTextMode: Boolean,
    onVirar: () -> Unit,
    onEscolher: (Int) -> Unit,
    onSubmeter: (Int) -> Unit,
    modifier: Modifier = Modifier
) {
    Column(
        modifier = modifier
            .fillMaxSize()
            .verticalScroll(rememberScrollState())
            .padding(horizontal = 16.dp, vertical = 12.dp),
        verticalArrangement = Arrangement.spacedBy(16.dp)
    ) {
        when (card.type) {
            CardType.FLASHCARD -> FlashcardConteudo(
                card = card,
                virado = uiState.cardVirado,
                focusLevel = uiState.focusLevel,
                lowTextMode = lowTextMode,
                onVirar = onVirar,
                onSubmeter = onSubmeter
            )
            CardType.MULTIPLE_CHOICE -> MultiplaEscolhaConteudo(
                card = card,
                respostaEscolhida = uiState.respostaEscolhida,
                mostrarExplicacao = uiState.mostrarExplicacao,
                focusLevel = uiState.focusLevel,
                lowTextMode = lowTextMode,
                onEscolher = onEscolher,
                onSubmeter = onSubmeter
            )
        }
    }
}

// ─── Flashcard ────────────────────────────────────────────────────────────────

@Composable
private fun FlashcardConteudo(
    card: StudyCard,
    virado: Boolean,
    focusLevel: Int,
    lowTextMode: Boolean,
    onVirar: () -> Unit,
    onSubmeter: (Int) -> Unit
) {
    val tamanhoFonte = if (focusLevel == 1) 20.sp else 16.sp

    // Frente do card
    Card(
        modifier = Modifier.fillMaxWidth(),
        elevation = CardDefaults.cardElevation(4.dp),
        colors = CardDefaults.cardColors(
            containerColor = MaterialTheme.colorScheme.primaryContainer
        )
    ) {
        Column(
            modifier = Modifier.padding(20.dp),
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            Text(
                text = if (lowTextMode) "PERGUNTA" else "Pergunta",
                style = MaterialTheme.typography.labelSmall,
                color = MaterialTheme.colorScheme.primary,
                fontWeight = FontWeight.Bold
            )
            Spacer(Modifier.height(8.dp))
            Text(
                text = card.front,
                style = MaterialTheme.typography.bodyLarge.copy(fontSize = tamanhoFonte),
                textAlign = TextAlign.Center,
                fontWeight = if (focusLevel == 1) FontWeight.Bold else FontWeight.Normal
            )
        }
    }

    if (!virado) {
        // Nível 1: apenas botão "Virar card" bem grande
        Button(
            onClick = onVirar,
            modifier = Modifier
                .fillMaxWidth()
                .height(if (focusLevel == 1) 64.dp else 52.dp)
                .semantics { contentDescription = "Virar card para ver a resposta" }
        ) {
            Text(
                "Virar card",
                style = MaterialTheme.typography.titleMedium,
                fontWeight = FontWeight.Bold
            )
        }

        if (focusLevel == 1) {
            Text(
                text = "Toque para ver a resposta",
                style = MaterialTheme.typography.bodySmall,
                color = MaterialTheme.colorScheme.outline,
                textAlign = TextAlign.Center,
                modifier = Modifier.fillMaxWidth()
            )
        }
    } else {
        // Verso do card
        Card(
            modifier = Modifier.fillMaxWidth(),
            elevation = CardDefaults.cardElevation(2.dp),
            colors = CardDefaults.cardColors(
                containerColor = MaterialTheme.colorScheme.secondaryContainer
            )
        ) {
            Column(modifier = Modifier.padding(20.dp)) {
                Text(
                    text = if (lowTextMode) "RESPOSTA" else "Resposta",
                    style = MaterialTheme.typography.labelSmall,
                    color = MaterialTheme.colorScheme.secondary,
                    fontWeight = FontWeight.Bold
                )
                Spacer(Modifier.height(8.dp))
                if (lowTextMode) {
                    // Modo pouco texto: exibe como bullets
                    card.back.split("\n").forEach { linha ->
                        if (linha.isNotBlank()) {
                            Text(
                                text = "• $linha",
                                style = MaterialTheme.typography.bodyLarge,
                                fontWeight = FontWeight.Medium
                            )
                        }
                    }
                } else {
                    Text(
                        text = card.back,
                        style = MaterialTheme.typography.bodyLarge.copy(fontSize = tamanhoFonte),
                        fontWeight = if (focusLevel == 2) FontWeight.Medium else FontWeight.Normal
                    )
                }
            }
        }

        // Botões de feedback
        if (focusLevel == 1) {
            // Nível 1: apenas "Acertei" e "Errei"
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.spacedBy(12.dp)
            ) {
                Button(
                    onClick = { onSubmeter(1) },
                    modifier = Modifier.weight(1f).height(64.dp),
                    colors = ButtonDefaults.buttonColors(containerColor = Verde)
                ) {
                    Icon(Icons.Filled.Check, null)
                    Spacer(Modifier.size(8.dp))
                    Text("Acertei", fontWeight = FontWeight.Bold)
                }
                Button(
                    onClick = { onSubmeter(3) },
                    modifier = Modifier.weight(1f).height(64.dp),
                    colors = ButtonDefaults.buttonColors(containerColor = Vermelho)
                ) {
                    Icon(Icons.Filled.Close, null)
                    Spacer(Modifier.size(8.dp))
                    Text("Errei", fontWeight = FontWeight.Bold)
                }
            }
        } else {
            // Nível 2 e 3: Fácil / Médio / Difícil
            BotoesFeedback(onSubmeter = onSubmeter)
        }
    }
}

// ─── Múltipla Escolha ─────────────────────────────────────────────────────────

@Composable
private fun MultiplaEscolhaConteudo(
    card: StudyCard,
    respostaEscolhida: Int?,
    mostrarExplicacao: Boolean,
    focusLevel: Int,
    lowTextMode: Boolean,
    onEscolher: (Int) -> Unit,
    onSubmeter: (Int) -> Unit
) {
    val letras = listOf("A", "B", "C", "D")
    val tamanhoFonte = if (focusLevel == 1) 18.sp else 15.sp

    // Enunciado
    Card(
        modifier = Modifier.fillMaxWidth(),
        colors = CardDefaults.cardColors(
            containerColor = MaterialTheme.colorScheme.primaryContainer
        )
    ) {
        Column(modifier = Modifier.padding(16.dp)) {
            if (!lowTextMode) {
                Text(
                    text = "Questão",
                    style = MaterialTheme.typography.labelSmall,
                    color = MaterialTheme.colorScheme.primary,
                    fontWeight = FontWeight.Bold
                )
                Spacer(Modifier.height(6.dp))
            }
            Text(
                text = card.front,
                style = MaterialTheme.typography.bodyLarge.copy(fontSize = tamanhoFonte),
                fontWeight = if (focusLevel <= 2) FontWeight.Medium else FontWeight.Normal
            )
        }
    }

    // Alternativas
    card.options.forEachIndexed { idx, opcao ->
        val correta = idx == card.correctOption
        val escolhida = idx == respostaEscolhida
        val corFundo = when {
            !mostrarExplicacao -> MaterialTheme.colorScheme.surface
            correta -> Verde.copy(alpha = 0.15f)
            escolhida -> Vermelho.copy(alpha = 0.15f)
            else -> MaterialTheme.colorScheme.surface
        }
        val corBorda = when {
            !mostrarExplicacao && escolhida -> MaterialTheme.colorScheme.primary
            mostrarExplicacao && correta -> Verde
            mostrarExplicacao && escolhida -> Vermelho
            else -> MaterialTheme.colorScheme.outline.copy(alpha = 0.3f)
        }

        OutlinedButton(
            onClick = { if (!mostrarExplicacao) onEscolher(idx) },
            modifier = Modifier.fillMaxWidth(),
            border = BorderStroke(
                width = if (escolhida || (mostrarExplicacao && correta)) 2.dp else 1.dp,
                color = corBorda
            ),
            colors = ButtonDefaults.outlinedButtonColors(containerColor = corFundo)
        ) {
            Row(
                modifier = Modifier.fillMaxWidth().padding(vertical = 4.dp),
                verticalAlignment = Alignment.CenterVertically
            ) {
                Surface(
                    shape = MaterialTheme.shapes.small,
                    color = if (escolhida) MaterialTheme.colorScheme.primary
                            else MaterialTheme.colorScheme.surfaceVariant,
                    modifier = Modifier.size(28.dp)
                ) {
                    Box(contentAlignment = Alignment.Center) {
                        Text(
                            text = letras[idx],
                            style = MaterialTheme.typography.labelMedium,
                            fontWeight = FontWeight.Bold,
                            color = if (escolhida) MaterialTheme.colorScheme.onPrimary
                                    else MaterialTheme.colorScheme.onSurfaceVariant
                        )
                    }
                }
                Spacer(Modifier.size(12.dp))
                Text(
                    text = opcao,
                    style = MaterialTheme.typography.bodyMedium.copy(fontSize = tamanhoFonte),
                    textAlign = TextAlign.Start,
                    modifier = Modifier.weight(1f)
                )
                if (mostrarExplicacao && correta) {
                    Icon(Icons.Filled.Check, null, tint = Verde, modifier = Modifier.size(20.dp))
                }
                if (mostrarExplicacao && escolhida && !correta) {
                    Icon(Icons.Filled.Close, null, tint = Vermelho, modifier = Modifier.size(20.dp))
                }
            }
        }
    }

    // Gabarito + explicação (após responder)
    if (mostrarExplicacao && card.explanation.isNotBlank()) {
        Card(
            modifier = Modifier.fillMaxWidth(),
            colors = CardDefaults.cardColors(
                containerColor = MaterialTheme.colorScheme.tertiaryContainer
            )
        ) {
            Column(modifier = Modifier.padding(14.dp)) {
                Text(
                    text = "Explicação",
                    style = MaterialTheme.typography.labelSmall,
                    color = MaterialTheme.colorScheme.tertiary,
                    fontWeight = FontWeight.Bold
                )
                Spacer(Modifier.height(6.dp))
                if (lowTextMode) {
                    card.explanation.split(". ").forEach { frase ->
                        if (frase.isNotBlank()) {
                            Text(
                                text = "• $frase",
                                style = MaterialTheme.typography.bodyMedium
                            )
                        }
                    }
                } else {
                    Text(
                        text = card.explanation,
                        style = MaterialTheme.typography.bodyMedium
                    )
                }
            }
        }

        BotoesFeedback(onSubmeter = onSubmeter)
    }
}

// ─── Botões Fácil / Médio / Difícil ──────────────────────────────────────────

@Composable
private fun BotoesFeedback(onSubmeter: (Int) -> Unit) {
    Text(
        text = "Como foi para você?",
        style = MaterialTheme.typography.labelMedium,
        color = MaterialTheme.colorScheme.outline,
        textAlign = TextAlign.Center,
        modifier = Modifier.fillMaxWidth()
    )
    Row(
        modifier = Modifier.fillMaxWidth(),
        horizontalArrangement = Arrangement.spacedBy(8.dp)
    ) {
        FilledTonalButton(
            onClick = { onSubmeter(1) },
            modifier = Modifier.weight(1f),
            colors = ButtonDefaults.filledTonalButtonColors(
                containerColor = Verde.copy(alpha = 0.2f),
                contentColor = Verde
            )
        ) { Text("Fácil", fontWeight = FontWeight.Bold) }

        FilledTonalButton(
            onClick = { onSubmeter(2) },
            modifier = Modifier.weight(1f),
            colors = ButtonDefaults.filledTonalButtonColors(
                containerColor = Amarelo.copy(alpha = 0.2f),
                contentColor = Amarelo
            )
        ) { Text("Médio", fontWeight = FontWeight.Bold) }

        FilledTonalButton(
            onClick = { onSubmeter(3) },
            modifier = Modifier.weight(1f),
            colors = ButtonDefaults.filledTonalButtonColors(
                containerColor = Vermelho.copy(alpha = 0.2f),
                contentColor = Vermelho
            )
        ) { Text("Difícil", fontWeight = FontWeight.Bold) }
    }
}
