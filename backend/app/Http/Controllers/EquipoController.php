<?php

namespace App\Http\Controllers;

use App\Models\Equipo;
use Illuminate\Http\Request;

class EquipoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // Obtener todos los equipos
        $equipos = Equipo::all();

        // Devolver los equipos como respuesta JSON
        return response()->json($equipos);
    }
}
