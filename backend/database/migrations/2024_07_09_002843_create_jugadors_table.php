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
            $table->increments('jugador_id')->primary()->unsigned();
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
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('jugadores');
    }
};
