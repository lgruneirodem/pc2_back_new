<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class EsUsuarioMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        if (Auth::check() && !Auth::user()->isAdmin) {
            return $next($request);
        }

        return response()->json(['error' => 'Unauthorized'], 401);
    }
}
