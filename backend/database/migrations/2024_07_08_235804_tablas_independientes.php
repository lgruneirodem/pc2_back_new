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
        Schema::create('equipos', function (Blueprint $table) {
            $table->integer('equipo_id')->primary()->unsigned();
            $table->string('nombre', 200);
            // Assuming equipo_id is not auto-incrementing since it's not specified
        });

        Schema::create('jornadas', function (Blueprint $table) {
            $table->integer('jornada_id')->primary()->unsigned();
            $table->integer('numero_jornada')->unsigned();
            // Assuming jornada_id is not auto-incrementing since it's not specified
        });

        Schema::create('usuarios', function (Blueprint $table) {
            $table->increments('usuario_id')->primary();
            $table->string('nombre', 200);
            $table->string('email', 200)->unique(); // Asegura que el email sea único
            $table->string('user', 200)->unique();  // Asegura que el username sea único
            $table->string('password', 200);
            $table->boolean('esAdmin')->default(false);
            $table->timestamps(); // Agrega columnas de timestamps (created_at y updated_at)
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('equipos');
        Schema::dropIfExists('jornadas');
        Schema::dropIfExists('usuarios');
    }
};
