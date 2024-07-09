<?php

namespace App\Http\Controllers;

use App\Models\Partido;
use Illuminate\Http\Request;

class PartidoController extends Controller
{
    public function partidosPorJornada($jornada_id)
    {
        $partidos = Partido::where('jornada_id', $jornada_id)
            ->with('equipo1', 'equipo2')
            ->get()
            ->map(function ($partido) {
                return [
                    'equipo1' => $partido->equipo1->nombre,
                    'equipo2' => $partido->equipo2->nombre,
                    'Resultado' => $partido->Resultado,
                ];
            });

        return response()->json([
            'partidos' => $partidos
        ]);
    }
}



