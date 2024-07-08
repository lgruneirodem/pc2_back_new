<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/jugadores', [Controller::class, 'getJugadores']);
