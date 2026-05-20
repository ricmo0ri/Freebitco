package com.oabapp.etica.data.local.database

import androidx.room.TypeConverter
import com.google.gson.Gson
import com.google.gson.reflect.TypeToken

/**
 * Conversor Room para tipos não suportados nativamente pelo SQLite.
 * Serializa List<String> (opções do card) como JSON.
 */
class Converters {
    private val gson = Gson()

    @TypeConverter
    fun fromStringList(value: List<String>): String =
        gson.toJson(value)

    @TypeConverter
    fun toStringList(value: String): List<String> {
        val tipo = object : TypeToken<List<String>>() {}.type
        return gson.fromJson(value, tipo) ?: emptyList()
    }
}
