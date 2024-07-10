<?php
namespace App\Http\Controllers;

use App\Models\Usuario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

class AuthController extends Controller
{
    // Método para registrar un nuevo usuario
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nombre' => 'required|string|max:200',
            'email' => 'required|string|email|max:200|unique:usuarios',
            'user' => 'required|string|max:200|unique:usuarios',
            'password' => 'required|string|min:6|confirmed',
            'esAdmin' => 'boolean'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $usuario = Usuario::create([
            'nombre' => $request->nombre,
            'email' => $request->email,
            'user' => $request->user,
            'password' => bcrypt($request->password),
            'esAdmin' => $request->esAdmin ?? false,
        ]);

        $token = JWTAuth::fromUser($usuario);

        return response()->json(compact('usuario', 'token'), 201);
    }

    // Método para iniciar sesión
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        try {
            if (!$token = JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'Invalid credentials'], 400);
            }
        } catch (JWTException $e) {
            return response()->json(['error' => 'Could not create token'], 500);
        }

        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ]);
        
    }
    public function checkAdmin($email)
    {
        $user = Usuario::where('email', $email)->first();
    
        if ($user) {
            return response()->json($user->esAdmin);
        }
    
        return response()->json(false);
    }
}
