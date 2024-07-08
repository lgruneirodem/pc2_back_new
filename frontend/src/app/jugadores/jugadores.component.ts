import { Component, Renderer2, ElementRef, inject  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { Jugador } from '../models/jugador';
import { JugadoresService } from '../services/jugadores.service';

@Component({
  selector: 'app-jugadores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jugadores.component.html',
  styleUrl: './jugadores.component.scss'
})
export class JugadoresComponent {
  jugadores: Jugador[] = [];

  constructor(private dialogRef: MatDialog, private jugadoresService: JugadoresService) {}
  ngOnInit(): void{
    // Funciones de los servicios
    this.jugadoresService.GetAll().subscribe(jugadoresLeidos => {
      // Guardamos los datos
      this.jugadores = jugadoresLeidos;
      console.log(this.jugadores)
    });
  }

  openDialog(jugador:any) {
    this.dialogRef.open(PopUpComponent, {
      data: jugador
    });
  }
}