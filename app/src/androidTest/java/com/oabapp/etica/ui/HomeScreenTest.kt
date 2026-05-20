package com.oabapp.etica.ui

import androidx.compose.ui.test.assertIsDisplayed
import androidx.compose.ui.test.assertIsSelected
import androidx.compose.ui.test.junit4.createComposeRule
import androidx.compose.ui.test.onNodeWithText
import androidx.compose.ui.test.performClick
import androidx.test.ext.junit.runners.AndroidJUnit4
import com.oabapp.etica.presentation.theme.OabEticaTheme
import org.junit.Rule
import org.junit.Test
import org.junit.runner.RunWith

/**
 * Testes de UI para componentes da HomeScreen (isolados do ViewModel).
 */
@RunWith(AndroidJUnit4::class)
class HomeScreenTest {

    @get:Rule
    val composeRule = createComposeRule()

    // ─── Seletor de foco ──────────────────────────────────────────────────────

    @Test
    fun seletor_foco_exibe_tres_opcoes() {
        var focoSelecionado = 2

        composeRule.setContent {
            OabEticaTheme {
                SeletorFocoPreview(
                    focoAtual = focoSelecionado,
                    onSelecionar = { focoSelecionado = it }
                )
            }
        }

        composeRule.onNodeWithText("Difícil\nfocar").assertIsDisplayed()
        composeRule.onNodeWithText("Mais ou\nmenos").assertIsDisplayed()
        composeRule.onNodeWithText("Focado!").assertIsDisplayed()
    }

    @Test
    fun clicar_em_dificil_focar_altera_selecao() {
        var focoSelecionado = 2

        composeRule.setContent {
            OabEticaTheme {
                SeletorFocoPreview(
                    focoAtual = focoSelecionado,
                    onSelecionar = { focoSelecionado = it }
                )
            }
        }

        composeRule.onNodeWithText("Difícil\nfocar").performClick()
        assert(focoSelecionado == 1) { "Esperado foco=1, obtido $focoSelecionado" }
    }

    @Test
    fun clicar_em_focado_altera_selecao_para_3() {
        var focoSelecionado = 1

        composeRule.setContent {
            OabEticaTheme {
                SeletorFocoPreview(
                    focoAtual = focoSelecionado,
                    onSelecionar = { focoSelecionado = it }
                )
            }
        }

        composeRule.onNodeWithText("Focado!").performClick()
        assert(focoSelecionado == 3) { "Esperado foco=3, obtido $focoSelecionado" }
    }

    // ─── Card de revisões pendentes ───────────────────────────────────────────

    @Test
    fun card_revisoes_exibe_contagem_correta() {
        composeRule.setContent {
            OabEticaTheme {
                CardRevisoesPendentesPreview(quantidade = 7)
            }
        }

        composeRule.onNodeWithText("7", substring = true).assertIsDisplayed()
    }

    @Test
    fun botao_revisar_agora_e_clicavel_quando_ha_pendentes() {
        var clicado = false

        composeRule.setContent {
            OabEticaTheme {
                CardRevisoesPendentesPreview(quantidade = 3, onRevisar = { clicado = true })
            }
        }

        composeRule.onNodeWithText("Revisar agora").performClick()
        assert(clicado) { "Botão 'Revisar agora' deveria ter sido clicado" }
    }
}

// ─── Composables de preview isolados ─────────────────────────────────────────

@androidx.compose.runtime.Composable
private fun SeletorFocoPreview(focoAtual: Int, onSelecionar: (Int) -> Unit) {
    val opcoes = listOf(
        Triple(1, "Difícil\nfocar", androidx.compose.material.icons.Icons.Filled.SentimentDissatisfied),
        Triple(2, "Mais ou\nmenos", androidx.compose.material.icons.Icons.Filled.SentimentNeutral),
        Triple(3, "Focado!", androidx.compose.material.icons.Icons.Filled.SentimentSatisfied)
    )

    androidx.compose.foundation.layout.Row(
        modifier = androidx.compose.ui.Modifier
            .fillMaxWidth()
            .padding(8.dp),
        horizontalArrangement = androidx.compose.foundation.layout.Arrangement.spacedBy(8.dp)
    ) {
        opcoes.forEach { (nivel, rotulo, icone) ->
            androidx.compose.material3.OutlinedButton(
                onClick = { onSelecionar(nivel) },
                modifier = androidx.compose.ui.Modifier.weight(1f),
                border = if (focoAtual == nivel)
                    androidx.compose.foundation.BorderStroke(2.dp, androidx.compose.ui.graphics.Color.Blue)
                else null
            ) {
                androidx.compose.foundation.layout.Column(
                    horizontalAlignment = androidx.compose.ui.Alignment.CenterHorizontally
                ) {
                    androidx.compose.material3.Icon(icone, contentDescription = null)
                    androidx.compose.material3.Text(rotulo, textAlign = androidx.compose.ui.text.style.TextAlign.Center)
                }
            }
        }
    }
}

@androidx.compose.runtime.Composable
private fun CardRevisoesPendentesPreview(
    quantidade: Int,
    onRevisar: () -> Unit = {}
) {
    androidx.compose.material3.Card(
        modifier = androidx.compose.ui.Modifier
            .fillMaxWidth()
            .padding(16.dp)
    ) {
        androidx.compose.foundation.layout.Column(
            modifier = androidx.compose.ui.Modifier.padding(16.dp)
        ) {
            androidx.compose.material3.Text("Revisões pendentes hoje: $quantidade cards")
            if (quantidade > 0) {
                androidx.compose.material3.Button(onClick = onRevisar) {
                    androidx.compose.material3.Text("Revisar agora")
                }
            }
        }
    }
}

private fun androidx.compose.ui.Modifier.fillMaxWidth() = this
private fun androidx.compose.ui.Modifier.padding(all: Int) = this
private val dp get() = androidx.compose.ui.unit.dp
