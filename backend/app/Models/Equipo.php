<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Equipo extends Model
{
    use HasFactory;

    // Especificar la tabla asociada con el modelo
    protected $table = 'equipos';

    // Especificar la clave primaria
    protected $primaryKey = 'equipo_id';

    // Indicar que la clave primaria no es auto-incremental
    public $incrementing = false;

    // Indicar que el tipo de la clave primaria es entero
    protected $keyType = 'int';

    // Campos que pueden ser llenados masivamente
    protected $fillable = ['equipo_id', 'nombre'];

    // Si no utilizas timestamps, añade esto
    public $timestamps = false;
}
