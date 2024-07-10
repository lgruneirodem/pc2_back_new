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

    public function topJugadores()
    {
        $jugadores = Jugador::select('Nombre', 'jugador_id', 'equipo_id', 'puntos')
                            ->orderByDesc('puntos')
                            ->take(15)
                            ->get();

        return response()->json($jugadores);
    }

    public function topJugadoresPorGoles()
    {
        $jugadores = Jugador::select('Nombre', 'jugador_id', 'equipo_id', 'goles')
                            ->orderByDesc('goles')
                            ->take(15)
                            ->get();

        return response()->json($jugadores);
    }

    public function topJugadoresPorValor()
    {
        $jugadores = Jugador::select('Nombre', 'jugador_id', 'equipo_id', 'valor')
                            ->orderByDesc('valor')
                            ->take(15)
                            ->get();

        return response()->json($jugadores);
    }

    public function topJugadoresPorMediaPuntos()
    {
        $jugadores = Jugador::select('Nombre', 'jugador_id', 'equipo_id', 'mediaPuntos')
                            ->orderByDesc('mediaPuntos')
                            ->take(15)
                            ->get();

        return response()->json($jugadores);
    }

    public function hotPicks()
    {
        $jugadores = Jugador::select('Nombre', 'jugador_id', 'equipo_id', 'mediaPuntos', 'valor')
                            ->where('valor', '>', 0)
                            ->get()
                            ->map(function ($jugador) {
                                // Calcular la relación calidad-precio
                                $jugador->calidad_precio = $jugador->mediaPuntos / $jugador->valor;
                                return $jugador;
                            })
                            ->sortByDesc('calidad_precio')
                            ->take(15)
                            ->values();

        return response()->json($jugadores);
    }
}
