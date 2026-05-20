package com.oabapp.etica.presentation.navigation

import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.hilt.navigation.compose.hiltViewModel
import androidx.navigation.NavType
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController
import androidx.navigation.navArgument
import com.oabapp.etica.presentation.screens.home.HomeScreen
import com.oabapp.etica.presentation.screens.home.HomeViewModel
import com.oabapp.etica.presentation.screens.modules.ModulesScreen
import com.oabapp.etica.presentation.screens.modules.ModulesViewModel
import com.oabapp.etica.presentation.screens.report.ReportScreen
import com.oabapp.etica.presentation.screens.review.ReviewScreen
import com.oabapp.etica.presentation.screens.review.ReviewViewModel
import com.oabapp.etica.presentation.screens.settings.SettingsScreen
import com.oabapp.etica.presentation.screens.study.StudyScreen

@Composable
fun OabNavGraph() {
    val navController = rememberNavController()

    NavHost(
        navController = navController,
        startDestination = Routes.HOME
    ) {

        // ── Home ─────────────────────────────────────────────────────────────
        composable(Routes.HOME) {
            val vm: HomeViewModel = hiltViewModel()
            val estado by vm.uiState.collectAsState()

            // Navega para StudyScreen quando a sessão for criada
            LaunchedEffect(estado.sessionId) {
                estado.sessionId?.let { id ->
                    navController.navigate(
                        Routes.study(
                            sessionId = id,
                            focusLevel = estado.focoSelecionado,
                            isReviewMode = false
                        )
                    )
                    vm.limparNavegacao()
                }
            }

            HomeScreen(
                onIniciarSessao = { _, _ -> vm.iniciarSessao() },
                onAbrirRevisoes = { navController.navigate(Routes.REVIEW) },
                onAbrirRelatorio = {
                    // Navega para o relatório da última sessão (sessionId=0 = última)
                    navController.navigate(Routes.report(0L, 0, 0))
                },
                onAbrirConfiguracoes = { navController.navigate(Routes.SETTINGS) }
            )
        }

        // ── Módulos ───────────────────────────────────────────────────────────
        composable(Routes.MODULES) {
            val vm: ModulesViewModel = hiltViewModel()
            val estado by vm.uiState.collectAsState()
            val focusLevel by vm.uiState.collectAsState()

            LaunchedEffect(estado.sessionId) {
                estado.sessionId?.let { id ->
                    navController.navigate(
                        Routes.study(
                            sessionId = id,
                            focusLevel = estado.focoAtual,
                            isReviewMode = false
                        )
                    )
                    vm.limparNavegacao()
                }
            }

            ModulesScreen(
                onIniciarSessao = { sessionId, foco ->
                    navController.navigate(Routes.study(sessionId, foco, false))
                },
                onVoltar = { navController.popBackStack() }
            )
        }

        // ── Estudo ────────────────────────────────────────────────────────────
        composable(
            route = Routes.STUDY,
            arguments = listOf(
                navArgument("sessionId") { type = NavType.LongType },
                navArgument("focusLevel") { type = NavType.IntType },
                navArgument("isReviewMode") { type = NavType.BoolType }
            )
        ) {
            StudyScreen(
                onSessaoEncerrada = { sessionId, totalCards, acertos ->
                    navController.navigate(Routes.report(sessionId, totalCards, acertos)) {
                        // Remove StudyScreen do back stack para não voltar à sessão encerrada
                        popUpTo(Routes.HOME)
                    }
                },
                onVoltar = { navController.popBackStack() }
            )
        }

        // ── Revisão SRS ───────────────────────────────────────────────────────
        composable(Routes.REVIEW) {
            val vm: ReviewViewModel = hiltViewModel()
            val estado by vm.uiState.collectAsState()
            val focusLevel by vm.focusLevel.collectAsState()

            LaunchedEffect(estado.sessionId) {
                estado.sessionId?.let { id ->
                    navController.navigate(
                        Routes.study(
                            sessionId = id,
                            focusLevel = focusLevel,
                            isReviewMode = true
                        )
                    )
                    vm.limparNavegacao()
                }
            }

            ReviewScreen(
                onIniciarRevisao = { _, _ -> vm.iniciarRevisao() },
                onVoltar = { navController.popBackStack() }
            )
        }

        // ── Relatório ─────────────────────────────────────────────────────────
        composable(
            route = Routes.REPORT,
            arguments = listOf(
                navArgument("sessionId") { type = NavType.LongType },
                navArgument("totalCards") { type = NavType.IntType },
                navArgument("correctAnswers") { type = NavType.IntType }
            )
        ) {
            ReportScreen(
                onVoltarInicio = {
                    navController.navigate(Routes.HOME) {
                        popUpTo(Routes.HOME) { inclusive = true }
                    }
                }
            )
        }

        // ── Configurações ─────────────────────────────────────────────────────
        composable(Routes.SETTINGS) {
            SettingsScreen(
                onVoltar = { navController.popBackStack() }
            )
        }
    }
}
