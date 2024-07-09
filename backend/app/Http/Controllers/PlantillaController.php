<?php
namespace App\Http\Controllers;

use App\Models\Plantilla;
use Illuminate\Http\Request;

class PlantillaController extends Controller
{
    /**
     * Display the players of a specific plantilla.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function jugadoresPorPlantilla($id)
    {
        // Buscar la plantilla por ID y cargar los jugadores asociados
        $plantilla = Plantilla::with('jugadores')->findOrFail($id);

        // Seleccionar solo los campos necesarios de los jugadores
        $jugadores = $plantilla->jugadores->map(function ($jugador) {
            return [
                'jugador_id' => $jugador->jugador_id,
                'Nombre' => $jugador->Nombre,
                'Foto' => $jugador->Foto,
                'equipo_id' => $jugador->equipo_id,
                'Posicion' => $jugador->Posicion,
                'Edad' => $jugador->Edad,
                'Altura' => $jugador->Altura,
                'Peso' => $jugador->Peso,
                'valor' => $jugador->valor,
                'puntos' => $jugador->puntos,
                'mediaPuntos' => $jugador->mediaPuntos,
                'partidos' => $jugador->partidos,
                'goles' => $jugador->goles,
                'tarjetas' => $jugador->tarjetas,
                'estado' => $jugador->estado
            ];
        });

        return response()->json($jugadores);
    }

    public function jugadoresPorUsuario($usuario_id)
    {
        // Buscar la plantilla por usuario_id
        $plantilla = Plantilla::where('usuario_id', $usuario_id)->with('jugadores')->firstOrFail();

        // Seleccionar solo los campos necesarios de los jugadores
        $jugadores = $plantilla->jugadores->map(function ($jugador) {
            return [
                'jugador_id' => $jugador->jugador_id,
                'Nombre' => $jugador->Nombre,
                'Foto' => $jugador->Foto,
                'equipo_id' => $jugador->equipo_id,
                'Posicion' => $jugador->Posicion,
                'Edad' => $jugador->Edad,
                'Altura' => $jugador->Altura,
                'Peso' => $jugador->Peso,
                'valor' => $jugador->valor,
                'puntos' => $jugador->puntos,
                'mediaPuntos' => $jugador->mediaPuntos,
                'partidos' => $jugador->partidos,
                'goles' => $jugador->goles,
                'tarjetas' => $jugador->tarjetas,
                'estado' => $jugador->estado
            ];
        });

        return response()->json($jugadores);
    }
}

