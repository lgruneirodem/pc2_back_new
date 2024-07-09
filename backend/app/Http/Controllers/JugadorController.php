<?php

namespace App\Http\Controllers;

use App\Models\Jugador;
use Illuminate\Http\Request;

class JugadorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // Obtener todos los jugadores
        $jugadores = Jugador::all();

        // Devolver los jugadores como respuesta JSON
        return response()->json($jugadores);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        // Buscar el jugador por ID
        $jugador = Jugador::findOrFail($id);

        // Devolver el jugador como respuesta JSON
        return response()->json($jugador);
    }

    /**
     * Display the basic stats of the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function getBasicStats($id)
    {
        // Buscar el jugador por ID
        $jugador = Jugador::findOrFail($id);

        // Seleccionar solo las estadísticas básicas
        $basicStats = [
            'jugador_id' => $jugador->jugador_id,
            'Nombre' => $jugador->Nombre,
            'Posicion' => $jugador->Posicion,
            'Edad' => $jugador->Edad,
            'Altura' => $jugador->Altura,
            'Peso' => $jugador->Peso,
            'puntos' => $jugador->puntos,
            'mediaPuntos' => $jugador->mediaPuntos,
            'partidos' => $jugador->partidos,
            'goles' => $jugador->goles,
            'tarjetas' => $jugador->tarjetas,
            'estado' => $jugador->estado,
        ];

        // Devolver las estadísticas básicas como respuesta JSON
        return response()->json($basicStats);
    }
}
