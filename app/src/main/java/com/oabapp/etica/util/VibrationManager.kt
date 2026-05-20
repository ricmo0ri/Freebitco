package com.oabapp.etica.util

import android.content.Context
import android.os.Build
import android.os.VibrationEffect
import android.os.Vibrator
import android.os.VibratorManager
import dagger.hilt.android.qualifiers.ApplicationContext
import javax.inject.Inject
import javax.inject.Singleton

/**
 * Encapsula a API de vibração (compatível com API 26+).
 * Padrões calibrados para não sobressaltar usuários com TDAH.
 */
@Singleton
class VibrationManager @Inject constructor(
    @ApplicationContext private val context: Context
) {
    private val vibrator: Vibrator by lazy {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) {
            val mgr = context.getSystemService(Context.VIBRATOR_MANAGER_SERVICE) as VibratorManager
            mgr.defaultVibrator
        } else {
            @Suppress("DEPRECATION")
            context.getSystemService(Context.VIBRATOR_SERVICE) as Vibrator
        }
    }

    /** Vibração suave de lembrete — dois pulsos curtos e gentis */
    fun lembreteSuave() {
        vibrar(padraoMs = longArrayOf(0, 80, 120, 80), amplitudes = intArrayOf(0, 60, 0, 60))
    }

    /** Vibração de confirmação de acerto — pulso único curto */
    fun feedbackAcerto() {
        vibrar(padraoMs = longArrayOf(0, 60), amplitudes = intArrayOf(0, 80))
    }

    /** Vibração de erro — dois pulsos mais fortes */
    fun feedbackErro() {
        vibrar(padraoMs = longArrayOf(0, 100, 80, 100), amplitudes = intArrayOf(0, 150, 0, 100))
    }

    fun cancelar() = vibrator.cancel()

    private fun vibrar(padraoMs: LongArray, amplitudes: IntArray) {
        if (!vibrator.hasVibrator()) return
        val efeito = VibrationEffect.createWaveform(padraoMs, amplitudes, -1)
        vibrator.vibrate(efeito)
    }
}
