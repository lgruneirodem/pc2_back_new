<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Plantilla extends Model
{
    use HasFactory;

    protected $table = 'plantillas';
    protected $primaryKey = 'plantilla_id';
    public $incrementing = true;
    protected $keyType = 'int';

    protected $fillable = [
        'Alineacion', 
        'Media_puntosTotal', 
        'saldo_actual', 
        'deudaMax',
        'usuario_id'
    ];

    public $timestamps = false;

    // Definir la relación con Jugador a través de la tabla pivote plantilla_jugador
    public function jugadores()
    {
        return $this->belongsToMany(Jugador::class, 'plantilla_jugador', 'plantilla_id', 'jugador_id');
    }

    // Definir la relación con el modelo Usuario
    public function usuario()
    {
        return $this->belongsTo(Usuario::class, 'usuario_id', 'id');
    }
}

