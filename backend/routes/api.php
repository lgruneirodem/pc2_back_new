<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EquipoController;
use App\Http\Controllers\JugadorController;
use App\Http\Controllers\AuthController;
use App\Http\Middleware\AdminMiddleware;
use App\Http\Middleware\EsUsuarioMiddleware;
use App\Http\Controllers\PartidoController;

Route::get('/equipos', [EquipoController::class, 'index']);
Route::get('/partidos/j{jornada_id}', [PartidoController::class, 'partidosPorJornada']);

// Ruta para obtener todos los jugadores

Route::get('/jugadores/top-goles', [JugadorController::class, 'topJugadoresPorGoles']);
Route::get('/jugadores/top-valor', [JugadorController::class, 'topJugadoresPorValor']);
Route::get('/jugadores/top-media', [JugadorController::class, 'topJugadoresPorMediaPuntos']);
Route::get('/jugadores/{id}/stats', [JugadorController::class, 'getBasicStats']);
Route::get('/jugadores/{id}', [JugadorController::class, 'show']);
Route::get('/jugadores', [JugadorController::class, 'index']);

Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);

//grupo de endpoints para usuarios EsUsuario
Route::group(['middleware' => [EsUsuarioMiddleware::class]], function () {
});

//grupo de endpoints para usuarios Admin
Route::group(['middleware' => [AdminMiddleware::class]], function (){

});


