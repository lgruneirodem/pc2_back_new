import { Component, Renderer2, ElementRef, inject  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { Jugador } from '../models/jugador';
import { PlantillaService } from '../services/plantilla.service';
import { JugadorService } from '../services/jugador.service';

@Component({
  selector: 'app-jugadores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jugadores.component.html',
  styleUrl: './jugadores.component.scss'
})
export class JugadoresComponent {
  jugadores: Jugador[] = [];

  constructor(private dialog: MatDialog, private plantillaService: PlantillaService) {}

  ngOnInit(): void {
    const plantillaId = 1; // Reemplaza con el ID de la plantilla que deseas cargar

    this.plantillaService.getJugadoresPorPlantilla(plantillaId).subscribe(
      jugadores => {
        this.jugadores = jugadores;
        console.log(this.jugadores); // Para verificar en consola
      },
      error => {
        console.error('Error al cargar jugadores:', error);
      }
    );
  }

  openDialog(jugador: Jugador): void {
    this.dialog.open(PopUpComponent, {
      data: jugador
    });
  }
}