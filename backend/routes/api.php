<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EquipoController;
use App\Http\Controllers\JugadorController;
use App\Http\Controllers\AuthController;
use App\Http\Middleware\AdminMiddleware;
use App\Http\Middleware\EsUsuarioMiddleware;
use App\Http\Controllers\PartidoController;
use App\Http\Controllers\PlantillaController;
use App\Http\Controllers\UsuarioController;

Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);

Route::get('/check-admin/{email}', [AuthController::class, 'checkAdmin']);


Route::get('/equipos', [EquipoController::class, 'index']);


Route::get('/partidos/j{jornada_id}', [PartidoController::class, 'partidosPorJornada']);

Route::get('/jugadores/top', [JugadorController::class, 'topJugadores']);
Route::get('/jugadores/hotpicks', [JugadorController::class, 'hotPicks']);
Route::get('/jugadores/top-goles', [JugadorController::class, 'topJugadoresPorGoles']);
Route::get('/jugadores/top-valor', [JugadorController::class, 'topJugadoresPorValor']);
Route::get('/jugadores/top-media', [JugadorController::class, 'topJugadoresPorMediaPuntos']);
Route::get('/jugadores/{id}/stats', [JugadorController::class, 'getBasicStats']);
Route::get('/jugadores/{id}', [JugadorController::class, 'show']);
Route::get('/jugadores', [JugadorController::class, 'index']);

Route::get('/plantillas/{id}/stats', [PlantillaController::class, 'statsPlantilla']);
Route::get('/plantillas/{id}/jugadores', [PlantillaController::class, 'jugadoresPorPlantilla']);

//grupo de endpoints para usuarios EsUsuario
Route::middleware(['jwt.user'])->group(function () {
});

//grupo de endpoints para usuarios Admin
Route::middleware(['jwt.admin'])->group(function () {  
    Route::get('/usuarios', [UsuarioController::class, 'index']);
});


