<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('jugadores', function (Blueprint $table) {
            $table->integer('jugador_id')->primary()->unsigned();
            $table->integer('equipo_id')->unsigned();
            $table->foreign('equipo_id')->references('equipo_id')->on('equipos');
            $table->string('Nombre', 200);
            $table->string('Foto', 50)->nullable();
            $table->string('Posicion', 200);
            $table->integer('Edad');
            $table->string('Altura', 200);
            $table->string('Peso', 200);
            $table->integer('valor');
            $table->integer('puntos');
            $table->float('mediaPuntos');
            $table->integer('partidos');
            $table->integer('goles');
            $table->integer('tarjetas');
            $table->string('estado', 200);
        });
        Schema::create('partidos', function (Blueprint $table) {
            $table->integer('partido_id')->primary();
            $table->integer('equipo1_id')->unsigned()->nullable();
            $table->integer('equipo2_id')->unsigned()->nullable();
            $table->integer('jornada_id')->unsigned()->nullable();
            $table->string('Resultado', 200);

            $table->foreign('equipo1_id')->references('equipo_id')->on('equipos');
            $table->foreign('equipo2_id')->references('equipo_id')->on('equipos');
            $table->foreign('jornada_id')->references('jornada_id')->on('jornadas');
        });

        Schema::create('plantillas', function (Blueprint $table) {
            $table->integer('plantilla_id')->primary()->unsigned();
            $table->string('Alineacion', 200);
            $table->float('Media_puntosTotal');
            $table->integer('saldo_actual');
            $table->integer('deudaMax');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('jugadores');
        Schema::dropIfExists('partidos');
        Schema::dropIfExists('plantillas');
    }
};
