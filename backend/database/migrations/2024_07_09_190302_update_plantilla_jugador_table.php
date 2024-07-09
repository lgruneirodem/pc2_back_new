<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdatePlantillaJugadorTable extends Migration
{
    public function up()
    {
        // Eliminar restricciones de clave externa que puedan afectar
        Schema::table('plantilla_jugador', function (Blueprint $table) {
            $table->dropForeign(['jugador_id']);
            $table->dropForeign(['plantilla_id']);
        });

        // Modificar la estructura de la tabla
        Schema::table('plantilla_jugador', function (Blueprint $table) {
            // Eliminar la clave primaria compuesta
            $table->dropPrimary(['plantilla_id', 'jugador_id']);

            // Agregar una nueva clave primaria solo para jugador_id
            $table->primary('jugador_id');

            // Añadir una restricción única para la combinación de plantilla_id y jugador_id
            $table->unique(['plantilla_id', 'jugador_id']);
        });

        // Volver a agregar las restricciones de clave externa
        Schema::table('plantilla_jugador', function (Blueprint $table) {
            $table->foreign('jugador_id')->references('jugador_id')->on('jugadores');
            $table->foreign('plantilla_id')->references('plantilla_id')->on('plantillas');
        });
    }

    public function down()
    {
        // En el método down, revertir los cambios
        Schema::table('plantilla_jugador', function (Blueprint $table) {
            // Eliminar la restricción única y la clave primaria
            $table->dropUnique(['plantilla_id', 'jugador_id']);
            $table->dropPrimary('jugador_id');

            // Agregar de nuevo la clave primaria compuesta
            $table->primary(['plantilla_id', 'jugador_id']);
        });

        // Eliminar restricciones de clave externa que se volvieron a agregar
        Schema::table('plantilla_jugador', function (Blueprint $table) {
            $table->dropForeign(['jugador_id']);
            $table->dropForeign(['plantilla_id']);
        });

        // Volver a agregar las restricciones de clave externa originales
        Schema::table('plantilla_jugador', function (Blueprint $table) {
            $table->foreign('jugador_id')->references('jugador_id')->on('jugadores');
            $table->foreign('plantilla_id')->references('plantilla_id')->on('plantillas');
        });
    }
}
