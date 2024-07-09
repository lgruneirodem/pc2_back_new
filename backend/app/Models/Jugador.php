<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Jugador extends Model
{
    use HasFactory;

    // Especificar la tabla asociada con el modelo
    protected $table = 'jugadores';

    // Especificar la clave primaria
    protected $primaryKey = 'jugador_id';

    // Indicar que la clave primaria es auto-incremental
    public $incrementing = true;

    // Indicar que el tipo de la clave primaria es entero
    protected $keyType = 'int';

    // Campos que pueden ser llenados masivamente
    protected $fillable = [
        'equipo_id',
        'Nombre',
        'Foto',
        'Posicion',
        'Edad',
        'Altura',
        'Peso',
        'valor',
        'puntos',
        'mediaPuntos',
        'partidos',
        'goles',
        'tarjetas',
        'estado'
    ];

    // Si no utilizas timestamps, añade esto
    public $timestamps = false;

    // Definir la relación con el modelo Equipo
    public function equipo()
    {
        return $this->belongsTo(Equipo::class, 'equipo_id', 'equipo_id');
    }
}
