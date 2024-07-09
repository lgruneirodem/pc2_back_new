<?php
namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Tymon\JWTAuth\Contracts\JWTSubject;

class Usuario extends Authenticatable implements JWTSubject
{
    use HasFactory, Notifiable;

    protected $primaryKey = 'usuario_id';

    protected $fillable = [
        'nombre',
        'email',
        'user',
        'password',
        'esAdmin', 
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    // Métodos requeridos por JWTSubject
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [
            'esAdmin' => $this->esAdmin,
        ];
    }

    public function plantillas()
    {
        return $this->hasMany(Plantilla::class, 'usuario_id', 'id');
    }
}
