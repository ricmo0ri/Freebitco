package com.oabapp.etica.presentation.screens.report

import androidx.compose.foundation.Canvas
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
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.EmojiEvents
import androidx.compose.material.icons.filled.Star
import androidx.compose.material.icons.filled.TrendingUp
import androidx.compose.material3.Button
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.Icon
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.geometry.Size
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.hilt.navigation.compose.hiltViewModel
import com.oabapp.etica.domain.model.EstatisticaModulo
import com.oabapp.etica.presentation.theme.Amarelo
import com.oabapp.etica.presentation.theme.Verde
import com.oabapp.etica.presentation.theme.Vermelho

@Composable
fun ReportScreen(
    onVoltarInicio: () -> Unit,
    viewModel: ReportViewModel = hiltViewModel()
) {
    val uiState by viewModel.uiState.collectAsState()

    Scaffold { innerPadding ->
        if (uiState.carregando) {
            Box(Modifier.fillMaxSize().padding(innerPadding), Alignment.Center) {
                CircularProgressIndicator()
            }
            return@Scaffold
        }

        val relatorio = uiState.relatorio
        val totalCards = relatorio?.sessao?.totalCards ?: uiState.totalCards
        val acertos = relatorio?.sessao?.correctAnswers ?: uiState.acertos
        val percentual = if (totalCards > 0) acertos * 100f / totalCards else 0f

        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(innerPadding)
                .verticalScroll(rememberScrollState())
                .padding(horizontal = 16.dp, vertical = 24.dp),
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.spacedBy(20.dp)
        ) {
            // ─── Cabeçalho ────────────────────────────────────────────────
            Icon(
                imageVector = when {
                    percentual >= 80f -> Icons.Filled.EmojiEvents
                    percentual >= 50f -> Icons.Filled.TrendingUp
                    else -> Icons.Filled.Star
                },
                contentDescription = null,
                modifier = Modifier.size(64.dp),
                tint = when {
                    percentual >= 80f -> Amarelo
                    percentual >= 50f -> MaterialTheme.colorScheme.primary
                    else -> MaterialTheme.colorScheme.outline
                }
            )

            Text(
                text = "Sessão concluída!",
                style = MaterialTheme.typography.headlineMedium,
                fontWeight = FontWeight.Bold,
                textAlign = TextAlign.Center
            )

            // ─── Métricas da sessão ────────────────────────────────────
            Card(
                modifier = Modifier.fillMaxWidth(),
                colors = CardDefaults.cardColors(
                    containerColor = MaterialTheme.colorScheme.primaryContainer
                )
            ) {
                Row(
                    modifier = Modifier.padding(20.dp).fillMaxWidth(),
                    horizontalArrangement = Arrangement.SpaceEvenly
                ) {
                    MetricaItem(
                        valor = "$totalCards",
                        rotulo = "Cards\nestudados"
                    )
                    MetricaItem(
                        valor = "$acertos",
                        rotulo = "Acertos"
                    )
                    MetricaItem(
                        valor = "%.0f%%".format(percentual),
                        rotulo = "Aprovei-\ntamento",
                        corValor = when {
                            percentual >= 80f -> Verde
                            percentual >= 50f -> Amarelo
                            else -> Vermelho
                        }
                    )
                    relatorio?.sessao?.durationMinutes?.let { dur ->
                        MetricaItem(valor = "${dur}min", rotulo = "Duração")
                    }
                }
            }

            // ─── Mensagem de incentivo ─────────────────────────────────
            val mensagem = relatorio?.mensagemIncentivo ?: when {
                percentual >= 80f -> "Excelente! Você está dominando o conteúdo."
                percentual >= 50f -> "Bom trabalho! Continue revisando os pontos fracos."
                else -> "Não desista! Cada erro é aprendizado. Revise amanhã."
            }

            Card(
                modifier = Modifier.fillMaxWidth(),
                colors = CardDefaults.cardColors(
                    containerColor = when {
                        percentual >= 80f -> Verde.copy(alpha = 0.12f)
                        percentual >= 50f -> Amarelo.copy(alpha = 0.12f)
                        else -> Vermelho.copy(alpha = 0.12f)
                    }
                )
            ) {
                Text(
                    text = mensagem,
                    modifier = Modifier.padding(16.dp),
                    style = MaterialTheme.typography.bodyLarge,
                    fontWeight = FontWeight.Medium,
                    textAlign = TextAlign.Center
                )
            }

            // ─── Gráfico de barras por módulo ──────────────────────────
            val estatisticas = relatorio?.estatisticasPorModulo
            if (!estatisticas.isNullOrEmpty()) {
                Card(modifier = Modifier.fillMaxWidth()) {
                    Column(modifier = Modifier.padding(16.dp)) {
                        Text(
                            text = "Desempenho por módulo",
                            style = MaterialTheme.typography.titleMedium,
                            fontWeight = FontWeight.SemiBold
                        )
                        Spacer(Modifier.height(12.dp))
                        estatisticas.forEach { stat ->
                            BarraModulo(estatistica = stat)
                            Spacer(Modifier.height(8.dp))
                        }
                    }
                }
            }

            // ─── Revisões pendentes ────────────────────────────────────
            relatorio?.revisoesPendentes?.takeIf { it > 0 }?.let { pendentes ->
                Card(
                    modifier = Modifier.fillMaxWidth(),
                    colors = CardDefaults.cardColors(
                        containerColor = MaterialTheme.colorScheme.secondaryContainer
                    )
                ) {
                    Text(
                        text = "Você tem $pendentes card(s) para revisar hoje.",
                        modifier = Modifier.padding(14.dp),
                        style = MaterialTheme.typography.bodyMedium,
                        textAlign = TextAlign.Center
                    )
                }
            }

            // ─── Botão voltar ──────────────────────────────────────────
            Spacer(Modifier.height(4.dp))
            Button(
                onClick = onVoltarInicio,
                modifier = Modifier.fillMaxWidth().height(52.dp)
            ) {
                Text(
                    "Voltar ao início",
                    style = MaterialTheme.typography.titleMedium,
                    fontWeight = FontWeight.Bold
                )
            }
        }
    }
}

// ─── Componente: item de métrica ──────────────────────────────────────────────

@Composable
private fun MetricaItem(
    valor: String,
    rotulo: String,
    corValor: Color = MaterialTheme.colorScheme.primary
) {
    Column(horizontalAlignment = Alignment.CenterHorizontally) {
        Text(
            text = valor,
            style = MaterialTheme.typography.headlineMedium.copy(fontSize = 28.sp),
            fontWeight = FontWeight.ExtraBold,
            color = corValor
        )
        Text(
            text = rotulo,
            style = MaterialTheme.typography.labelSmall,
            color = MaterialTheme.colorScheme.outline,
            textAlign = TextAlign.Center
        )
    }
}

// ─── Componente: barra de progresso do módulo ─────────────────────────────────

@Composable
private fun BarraModulo(estatistica: EstatisticaModulo) {
    val percentual = estatistica.percentual / 100f
    val corBarra = when {
        estatistica.percentual >= 80f -> Verde
        estatistica.percentual >= 50f -> Amarelo
        else -> Vermelho
    }

    Column(verticalArrangement = Arrangement.spacedBy(4.dp)) {
        Row(
            modifier = Modifier.fillMaxWidth(),
            horizontalArrangement = Arrangement.SpaceBetween
        ) {
            Text(
                text = estatistica.nomeModulo,
                style = MaterialTheme.typography.bodySmall,
                modifier = Modifier.weight(1f)
            )
            Text(
                text = "${estatistica.acertos}/${estatistica.totalCards} (%.0f%%)".format(estatistica.percentual),
                style = MaterialTheme.typography.labelSmall,
                fontWeight = FontWeight.SemiBold,
                color = corBarra
            )
        }

        // Barra desenhada via Canvas para evitar dependência extra
        Canvas(
            modifier = Modifier.fillMaxWidth().height(14.dp)
        ) {
            val raio = size.height / 2
            // Fundo da barra
            drawRoundRect(
                color = Color.Gray.copy(alpha = 0.2f),
                size = size,
                cornerRadius = androidx.compose.ui.geometry.CornerRadius(raio)
            )
            // Preenchimento proporcional
            if (percentual > 0f) {
                drawRoundRect(
                    color = corBarra,
                    size = Size(size.width * percentual.coerceIn(0f, 1f), size.height),
                    cornerRadius = androidx.compose.ui.geometry.CornerRadius(raio)
                )
            }
        }
    }
}
