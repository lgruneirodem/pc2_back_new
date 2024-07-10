<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class EsUsuarioMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        if (auth()->user() && !auth()->user()->admin) {
            return $next($request);
        }

        return response()->json(['error' => 'No autorizado'], 403);
    }
    
}
