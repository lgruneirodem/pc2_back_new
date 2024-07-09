<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EquipoController;
use App\Http\Controllers\JugadorController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AdminMiddleware;
use App\Http\Controllers\EsUsuarioMiddleware;

Route::get('/equipos', [EquipoController::class, 'index']);

// Ruta para obtener todos los jugadores
Route::get('/jugadores', [JugadorController::class, 'index']);
Route::get('/jugadores/{id}', [JugadorController::class, 'show']);
Route::get('/jugadores/{id}/stats', [JugadorController::class, 'getBasicStats']);

Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);

//grupo de endpoints para usuarios EsUsuario
Route::group(['middleware' => [EsUsuarioMiddleware::class]], function () {
    Route::get('/user', [AuthController::class, 'getAuthenticatedUser']);
});

//grupo de endpoints para usuarios Admin
Route::group(['middleware' => [AdminMiddleware::class]], function (){

});


