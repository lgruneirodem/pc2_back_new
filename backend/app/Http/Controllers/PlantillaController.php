<?php
namespace App\Http\Controllers;

use App\Models\Plantilla;
use Illuminate\Http\Request;

class PlantillaController extends Controller
{
    public function statsPlantilla($id)
    {
        // Buscar la plantilla por ID
        $plantilla = Plantilla::findOrFail($id);

        // Seleccionar solo las estadísticas básicas
        $basicStats = [
            'plantilla_id' => $plantilla->plantilla_id,
            'Alineacion' => $plantilla->Alineacion,
            'Media_puntosTotal' => $plantilla->Media_puntosTotal,
            'saldo_actual' => $plantilla->saldo_actual,
            'deudaMax' => $plantilla->deudaMax,
            'usuario_id' => $plantilla->usuario_id
        ];

        // Devolver las estadísticas básicas como respuesta JSON
        return response()->json($basicStats);
    }
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

