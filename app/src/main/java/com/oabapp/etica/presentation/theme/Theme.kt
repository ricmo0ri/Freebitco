package com.oabapp.etica.presentation.theme

import android.app.Activity
import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.darkColorScheme
import androidx.compose.material3.lightColorScheme
import androidx.compose.runtime.Composable
import androidx.compose.runtime.CompositionLocalProvider
import androidx.compose.runtime.SideEffect
import androidx.compose.runtime.staticCompositionLocalOf
import androidx.compose.ui.graphics.toArgb
import androidx.compose.ui.platform.LocalView
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import androidx.core.view.WindowCompat

// Fornece o tamanho mínimo de toque via CompositionLocal (acessibilidade)
val LocalMinTouchTarget = staticCompositionLocalOf<Dp> { 48.dp }

private val EsquemaClaros = lightColorScheme(
    primary = Azul40,
    onPrimary = androidx.compose.ui.graphics.Color.White,
    primaryContainer = Azul80,
    onPrimaryContainer = androidx.compose.ui.graphics.Color(0xFF001849),
    secondary = AzulCinza40,
    onSecondary = androidx.compose.ui.graphics.Color.White,
    secondaryContainer = AzulCinza80,
    onSecondaryContainer = androidx.compose.ui.graphics.Color(0xFF001226),
    tertiary = Indigo40,
    background = CinzaClaro,
    surface = androidx.compose.ui.graphics.Color.White,
    error = Vermelho,
    onBackground = CinzaEscuro,
    onSurface = CinzaEscuro,
)

private val EsquemaEscuro = darkColorScheme(
    primary = Azul80,
    onPrimary = androidx.compose.ui.graphics.Color(0xFF002977),
    primaryContainer = Azul40,
    onPrimaryContainer = Azul80,
    secondary = AzulCinza80,
    onSecondary = androidx.compose.ui.graphics.Color(0xFF152040),
    secondaryContainer = AzulCinza40,
    onSecondaryContainer = AzulCinza80,
    background = androidx.compose.ui.graphics.Color(0xFF1A1C2A),
    surface = androidx.compose.ui.graphics.Color(0xFF1A1C2A),
    error = androidx.compose.ui.graphics.Color(0xFFFFB4AB),
    onBackground = androidx.compose.ui.graphics.Color(0xFFE2E2EC),
    onSurface = androidx.compose.ui.graphics.Color(0xFFE2E2EC),
)

@Composable
fun OabEticaTheme(
    darkTheme: Boolean = isSystemInDarkTheme(),
    content: @Composable () -> Unit
) {
    val esquemaCores = if (darkTheme) EsquemaEscuro else EsquemaClaros

    val view = LocalView.current
    if (!view.isInEditMode) {
        SideEffect {
            val window = (view.context as Activity).window
            window.statusBarColor = esquemaCores.primary.toArgb()
            WindowCompat.getInsetsController(window, view).isAppearanceLightStatusBars = !darkTheme
        }
    }

    CompositionLocalProvider(LocalMinTouchTarget provides 48.dp) {
        MaterialTheme(
            colorScheme = esquemaCores,
            typography = Typography,
            content = content
        )
    }
}
