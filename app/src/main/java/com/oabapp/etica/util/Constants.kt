package com.oabapp.etica.util

object Constants {
    // Identificadores dos módulos de estudo
    const val MODULO_ESTATUTO = 1
    const val MODULO_CODIGO_ETICA = 2
    const val MODULO_REGULAMENTO = 3

    // Durações de sessão disponíveis (minutos)
    val DURACOES_SESSAO = listOf(5, 10, 15)

    // Níveis de foco TDAH
    const val FOCO_DIFICIL = 1
    const val FOCO_MEDIO = 2
    const val FOCO_FOCADO = 3

    // Tipos de card
    const val TIPO_FLASHCARD = "FLASHCARD"
    const val TIPO_MULTIPLA_ESCOLHA = "MULTIPLE_CHOICE"

    // Qualidade de resposta SM-2
    const val QUALIDADE_FACIL = 5
    const val QUALIDADE_MEDIO = 3
    const val QUALIDADE_DIFICIL = 1

    // Nome do banco de dados
    const val NOME_BANCO = "oab_etica_database"
}
