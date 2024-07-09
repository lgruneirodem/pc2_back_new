<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Partido extends Model
{
    protected $table = 'partidos';
    protected $primaryKey = 'partido_id';
    public $timestamps = false; // Si no tienes timestamps en la tabla

    // Relación con equipos
    public function equipo1()
    {
        return $this->belongsTo(Equipo::class, 'equipo1_id', 'equipo_id');
    }

    public function equipo2()
    {
        return $this->belongsTo(Equipo::class, 'equipo2_id', 'equipo_id');
    }

    // Relación con jornadas
    public function jornada()
    {
        return $this->belongsTo(Jornada::class, 'jornada_id', 'jornada_id');
    }
}
