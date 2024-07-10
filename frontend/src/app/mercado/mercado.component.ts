import { CommonModule } from '@angular/common';
import { Component, NgModule, ElementRef, ViewChild } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Jugador } from '../models/jugador';
import { JugadorService } from '../services/jugador.service';
import $ from 'jquery';
import { Equipos } from '../models/equipos';
import { EquipoService } from '../services/equipo.service';
import { PartidoService } from '../services/partido.service';
import { Partido }  from '../models/partido';

@Component({
  selector: 'app-mercado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mercado.component.html',
  styleUrl: './mercado.component.scss'
})
export class MercadoComponent {
  hotPicks: Jugador[] = [];
  jugadoresTop: Jugador[] = [];
  equipos: Equipos[] = [];
  partidos: Partido[] = [];
  jornadaActual: number = 1;
  jornadas: number[] = []; // Aquí almacenaremos las jornadas disponibles
  jornadaSeleccionada: number = 1; // Jornada seleccionada por defecto

  constructor(
    private equipoService: EquipoService,
    private partidoService: PartidoService,
    private jugadorService: JugadorService
  ) {}
  ngOnInit(): void {
    this.obtenerEquipos();
    this.obtenerPartidos(this.jornadaActual);
    this.jugadorService.getHotPicks().subscribe(
      data => {
        this.hotPicks = data;
      },
      error => {
        console.error('Error fetching hot picks', error);
      }
    );
    // Configuración inicial del desplegable de jornadas
    this.jornadas = Array.from({ length: 38 }, (_, i) => 38 - i); // Generamos jornadas del 1 al 38
    this.jugadorService.getTopJugadores().subscribe(
      data => {
        this.jugadoresTop = data; // Asignar los jugadores al arreglo local
      },
      error => {
        console.error('Error al obtener los jugadores top:', error);
      }
    );
  }

  obtenerEquipos() {
    this.equipoService.getAllEquipos().subscribe(
      equiposLeidos => {
        this.equipos = equiposLeidos;
      },
      error => {
        console.error('Error al obtener los equipos:', error);
      }
    );
  }

  obtenerPartidos(jornadaId: number): void {
    this.partidoService.getPartidosPorJornada(jornadaId).subscribe(
      partidosLeidos => {
        this.partidos = partidosLeidos;
      },
      error => {
        console.error('Error al obtener los partidos:', error);
      }
    );
  }

  onSelect(event: Event, dropdown: number): void {
    const value = (event.target as HTMLSelectElement).value;
    if (dropdown === 2) {
      this.jornadaActual = +value; // Convertir a número y asignar como jornada actual
      this.obtenerPartidos(this.jornadaActual);
    }
  }

  onChangeJornada(): void {
    this.obtenerPartidos(this.jornadaSeleccionada);
  }

  jsonData1 = [
    { label: 'Clasificación promedio', value: 'ClasificacionProm' },
    { label: 'Goles', value: 'Goles' },
    { label: 'Asistencias', value: 'Asistencias' },
    { label: 'Tiros a puerta', value: 'Tiros' }
  ];

  jsonData2 = Array.from({ length: 38 }, (_, i) => ({ label: `Jornada ${38 - i}`, value: `${38 - i}` }));

  puntuacion: number = 33;

  closeModel() {
    // Implementación si es necesaria
  }

  openModel() {
    const modelDiv = document.getElementById('passModal');
    if (modelDiv != null) {
      modelDiv.style.display = 'block';
    }
  }
}
