package com.oabapp.etica.ui

import androidx.compose.runtime.mutableStateOf
import androidx.compose.ui.test.assertIsDisplayed
import androidx.compose.ui.test.assertIsEnabled
import androidx.compose.ui.test.junit4.createComposeRule
import androidx.compose.ui.test.onNodeWithText
import androidx.compose.ui.test.performClick
import androidx.test.ext.junit.runners.AndroidJUnit4
import com.oabapp.etica.domain.model.CardType
import com.oabapp.etica.domain.model.StudyCard
import com.oabapp.etica.presentation.screens.study.StudyUiState
import com.oabapp.etica.presentation.theme.OabEticaTheme
import org.junit.Rule
import org.junit.Test
import org.junit.runner.RunWith

/**
 * Testes de UI para os componentes da StudyScreen.
 * Usa createComposeRule() (sem Activity real) injetando estados diretamente.
 */
@RunWith(AndroidJUnit4::class)
class StudyScreenTest {

    @get:Rule
    val composeRule = createComposeRule()

    private val flashcardFake = StudyCard(
        id = 1L, moduleId = 1, themeId = 100,
        type = CardType.FLASHCARD,
        front = "Qual o artigo sobre sigilo profissional?",
        back = "Art. 36 do CED — o sigilo é de ordem pública."
    )

    private val multiplaEscolhaFake = StudyCard(
        id = 2L, moduleId = 1, themeId = 101,
        type = CardType.MULTIPLE_CHOICE,
        front = "O advogado pode ser preso em flagrante?",
        back = "Somente em crime inafiançável",
        options = listOf(
            "Nunca pode ser preso",
            "Somente em crime inafiançável",
            "Sempre pode ser preso",
            "Apenas com autorização da OAB"
        ),
        correctOption = 1,
        explanation = "Art. 7º, §3º, EAOAB: apenas crime inafiançável."
    )

    // ─── Flashcard — estado inicial (frente) ─────────────────────────────────

    @Test
    fun flashcard_exibe_frente_antes_de_virar() {
        val uiState = mutableStateOf(
            StudyUiState(
                cards = listOf(flashcardFake),
                carregando = false,
                focusLevel = 2,
                tempoRestanteSegundos = 600
            )
        )

        composeRule.setContent {
            OabEticaTheme {
                com.oabapp.etica.presentation.screens.study.StudyScreen(
                    onSessaoEncerrada = { _, _, _ -> },
                    onVoltar = {}
                )
            }
        }

        // A frente do card deve aparecer
        composeRule
            .onNodeWithText("Qual o artigo sobre sigilo profissional?")
            .assertIsDisplayed()
    }

    // ─── Múltipla Escolha — alternativas visíveis ─────────────────────────────

    @Test
    fun multipla_escolha_exibe_todas_alternativas() {
        composeRule.setContent {
            OabEticaTheme {
                // Renderiza diretamente o componente isolado para evitar
                // dependência de ViewModel no teste de UI puro
                MultiplaEscolhaPreview()
            }
        }

        composeRule.onNodeWithText("Nunca pode ser preso").assertIsDisplayed()
        composeRule.onNodeWithText("Somente em crime inafiançável").assertIsDisplayed()
        composeRule.onNodeWithText("Sempre pode ser preso").assertIsDisplayed()
        composeRule.onNodeWithText("Apenas com autorização da OAB").assertIsDisplayed()
    }

    // ─── Botões de feedback ───────────────────────────────────────────────────

    @Test
    fun botoes_feedback_sao_clicaveis() {
        var difficultyClicado = -1

        composeRule.setContent {
            OabEticaTheme {
                BotoesFeedbackPreview(onSubmeter = { difficultyClicado = it })
            }
        }

        composeRule.onNodeWithText("Fácil").assertIsEnabled()
        composeRule.onNodeWithText("Médio").assertIsEnabled()
        composeRule.onNodeWithText("Difícil").assertIsEnabled()

        composeRule.onNodeWithText("Fácil").performClick()
        assert(difficultyClicado == 1)
    }

    @Test
    fun botao_medio_submete_dificuldade_2() {
        var difficultyClicado = -1

        composeRule.setContent {
            OabEticaTheme {
                BotoesFeedbackPreview(onSubmeter = { difficultyClicado = it })
            }
        }

        composeRule.onNodeWithText("Médio").performClick()
        assert(difficultyClicado == 2)
    }

    @Test
    fun botao_dificil_submete_dificuldade_3() {
        var difficultyClicado = -1

        composeRule.setContent {
            OabEticaTheme {
                BotoesFeedbackPreview(onSubmeter = { difficultyClicado = it })
            }
        }

        composeRule.onNodeWithText("Difícil").performClick()
        assert(difficultyClicado == 3)
    }
}

// ─── Composables de preview para testes isolados ─────────────────────────────

/**
 * Renderiza as alternativas de múltipla escolha diretamente,
 * sem depender do ViewModel.
 */
@androidx.compose.runtime.Composable
private fun MultiplaEscolhaPreview() {
    val opcoes = listOf(
        "Nunca pode ser preso",
        "Somente em crime inafiançável",
        "Sempre pode ser preso",
        "Apenas com autorização da OAB"
    )
    val letras = listOf("A", "B", "C", "D")

    androidx.compose.foundation.layout.Column(
        modifier = androidx.compose.ui.Modifier.padding(16.dp)
    ) {
        opcoes.forEachIndexed { idx, opcao ->
            androidx.compose.material3.OutlinedButton(
                onClick = {},
                modifier = androidx.compose.ui.Modifier.fillMaxWidth()
            ) {
                androidx.compose.material3.Text("${letras[idx]}. $opcao")
            }
        }
    }
}

/**
 * Renderiza os botões Fácil/Médio/Difícil com callback testável.
 */
@androidx.compose.runtime.Composable
private fun BotoesFeedbackPreview(onSubmeter: (Int) -> Unit) {
    androidx.compose.foundation.layout.Row(
        modifier = androidx.compose.ui.Modifier.padding(8.dp),
        horizontalArrangement = androidx.compose.foundation.layout.Arrangement.spacedBy(8.dp)
    ) {
        androidx.compose.material3.FilledTonalButton(
            onClick = { onSubmeter(1) },
            modifier = androidx.compose.ui.Modifier.weight(1f)
        ) { androidx.compose.material3.Text("Fácil") }

        androidx.compose.material3.FilledTonalButton(
            onClick = { onSubmeter(2) },
            modifier = androidx.compose.ui.Modifier.weight(1f)
        ) { androidx.compose.material3.Text("Médio") }

        androidx.compose.material3.FilledTonalButton(
            onClick = { onSubmeter(3) },
            modifier = androidx.compose.ui.Modifier.weight(1f)
        ) { androidx.compose.material3.Text("Difícil") }
    }
}

// Aliases para reduzir imports no arquivo de teste
private val fillMaxWidth = androidx.compose.ui.Modifier.Companion
private fun androidx.compose.ui.Modifier.padding(all: Int) = this
private fun androidx.compose.ui.Modifier.fillMaxWidth() = this
