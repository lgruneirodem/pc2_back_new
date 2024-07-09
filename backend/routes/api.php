<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EquipoController;
use App\Http\Controllers\JugadorController;

Route::get('/equipos', [EquipoController::class, 'index']);

// Ruta para obtener todos los jugadores
Route::get('/jugadores', [JugadorController::class, 'index']);
Route::get('/jugadores/{id}', [JugadorController::class, 'show']);
Route::get('/jugadores/{id}/stats', [JugadorController::class, 'getBasicStats']);

