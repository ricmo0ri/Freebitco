package com.oabapp.etica

import android.app.Application
import dagger.hilt.android.HiltAndroidApp

/**
 * Ponto de entrada do aplicativo — necessário para o Hilt inicializar o grafo de dependências.
 */
@HiltAndroidApp
class OabEticaApplication : Application()
