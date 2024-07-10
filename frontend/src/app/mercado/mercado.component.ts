import { CommonModule } from '@angular/common';
import { Component, NgModule, ElementRef, ViewChild } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Jugador } from '../models/jugador';
import { JugadoresService } from '../services/jugadores.service';
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

  equipos: Equipos[] = [];
  partidos: Partido[] = [];
  jornadaActual: number = 1;

  constructor(private equipoService: EquipoService, private partidoService: PartidoService) { }
  ngOnInit(): void {
    this.obtenerEquipos();
    this.obtenerPartidos(this.jornadaActual);
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

  jsonData1 = [
    { label: 'Clasificación promedio', value: 'ClasificacionProm' },
    { label: 'Goles', value: 'Goles' },
    { label: 'Asistencias', value: 'Asistencias' },
    { label: 'Tiros a puerta', value: 'Tiros' }
];

  jsonData2 = [
    { label: 'Jornada 38', value: '38' },
    { label: 'Jornada 37', value: '37' },
    { label: 'Jornada 36', value: '36' },
    { label: 'Jornada 35', value: '35' },
    { label: 'Jornada 34', value: '34' },
    { label: 'Jornada 33', value: '33' },
    { label: 'Jornada 32', value: '32' },
    { label: 'Jornada 31', value: '31' },
    { label: 'Jornada 30', value: '30' },
    { label: 'Jornada 29', value: '29' },
    { label: 'Jornada 28', value: '28' },
    { label: 'Jornada 27', value: '27' },
    { label: 'Jornada 26', value: '26' },
    { label: 'Jornada 25', value: '25' },
    { label: 'Jornada 24', value: '24' },
    { label: 'Jornada 23', value: '23' },
    { label: 'Jornada 22', value: '22' },
    { label: 'Jornada 21', value: '21' },
    { label: 'Jornada 20', value: '20' },
    { label: 'Jornada 19', value: '19' },
    { label: 'Jornada 18', value: '18' },
    { label: 'Jornada 17', value: '17' },
    { label: 'Jornada 16', value: '16' },
    { label: 'Jornada 15', value: '15' },
    { label: 'Jornada 14', value: '14' },
    { label: 'Jornada 13', value: '13' },
    { label: 'Jornada 12', value: '12' },
    { label: 'Jornada 11', value: '11' },
    { label: 'Jornada 10', value: '10' },
    { label: 'Jornada 9', value: '9' },
    { label: 'Jornada 8', value: '8' },
    { label: 'Jornada 7', value: '7' },
    { label: 'Jornada 6', value: '6' },
    { label: 'Jornada 5', value: '5' },
    { label: 'Jornada 4', value: '4' },
    { label: 'Jornada 3', value: '3' },
    { label: 'Jornada 2', value: '2' },
    { label: 'Jornada 1', value: '1' }
  ];

  selectedValue1: string = '';
  selectedValue2: string = '';

  puntuacion: number = 33;

  closeModel() {

  }

  openModel() {
    const modelDiv = document.getElementById('passModal');
    if (modelDiv != null) {
      modelDiv.style.display = 'block';
    }
  }
}
