package com.oabapp.etica.presentation.navigation

import androidx.compose.runtime.Composable
import androidx.navigation.NavType
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController
import androidx.navigation.navArgument
import com.oabapp.etica.presentation.screens.home.HomeScreen
import com.oabapp.etica.presentation.screens.modules.ModulesScreen
import com.oabapp.etica.presentation.screens.report.ReportScreen
import com.oabapp.etica.presentation.screens.review.ReviewScreen
import com.oabapp.etica.presentation.screens.settings.SettingsScreen
import com.oabapp.etica.presentation.screens.study.StudyScreen

@Composable
fun OabNavGraph() {
    val navController = rememberNavController()

    NavHost(navController = navController, startDestination = Routes.HOME) {

        // ── Home ─────────────────────────────────────────────────────────────
        composable(Routes.HOME) {
            HomeScreen(
                onIniciarSessao = { sessionId, focusLevel ->
                    navController.navigate(Routes.study(sessionId, focusLevel, false))
                },
                onAbrirRevisoes = { navController.navigate(Routes.REVIEW) },
                onAbrirRelatorio = { navController.navigate(Routes.report(0L, 0, 0)) },
                onAbrirConfiguracoes = { navController.navigate(Routes.SETTINGS) }
            )
        }

        // ── Módulos ───────────────────────────────────────────────────────────
        composable(Routes.MODULES) {
            ModulesScreen(
                onIniciarSessao = { sessionId, focusLevel ->
                    navController.navigate(Routes.study(sessionId, focusLevel, false))
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
                        popUpTo(Routes.HOME)
                    }
                },
                onVoltar = { navController.popBackStack() }
            )
        }

        // ── Revisão SRS ───────────────────────────────────────────────────────
        composable(Routes.REVIEW) {
            ReviewScreen(
                onIniciarRevisao = { sessionId, focusLevel ->
                    navController.navigate(Routes.study(sessionId, focusLevel, true))
                },
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
            SettingsScreen(onVoltar = { navController.popBackStack() })
        }
    }
}
