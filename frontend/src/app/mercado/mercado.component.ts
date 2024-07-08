import { CommonModule } from '@angular/common';
import { Component, NgModule, ElementRef, ViewChild } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Jugador } from '../models/jugador';
import { JugadoresService } from '../services/jugadores.service';
import $ from 'jquery';

@Component({
  selector: 'app-mercado',
  standalone: true, // This property is not valid in Angular components
  imports: [CommonModule],
  templateUrl: './mercado.component.html',
  styleUrl: './mercado.component.scss'
})
export class MercadoComponent {

  name = 'Angular';
  jsonData1 = [
    { label: 'Clasificación promedio', value: 'ClasificacionProm' },
    { label: 'Goles', value: 'Goles' },
    { label: 'Asistencias', value: 'Asistencias' },
    { label: 'Tiros a puerta', value: 'Tiros' }
];

  jsonData2 = [
    { label: 'Jornada 38', value: 'Jornada38' },
    { label: 'Jornada 37', value: 'Jornada37' },
    { label: 'Jornada 36', value: 'Jornada36' },
    { label: 'Jornada 35', value: 'Jornada35' },
    { label: 'Jornada 34', value: 'Jornada34' },
    { label: 'Jornada 33', value: 'Jornada33' },
    { label: 'Jornada 32', value: 'Jornada32' },
    { label: 'Jornada 31', value: 'Jornada31' },
    { label: 'Jornada 30', value: 'Jornada30' },
    { label: 'Jornada 29', value: 'Jornada29' },
    { label: 'Jornada 28', value: 'Jornada28' },
    { label: 'Jornada 27', value: 'Jornada27' },
    { label: 'Jornada 26', value: 'Jornada26' },
    { label: 'Jornada 25', value: 'Jornada25' },
    { label: 'Jornada 24', value: 'Jornada24' },
    { label: 'Jornada 23', value: 'Jornada23' },
    { label: 'Jornada 22', value: 'Jornada22' },
    { label: 'Jornada 21', value: 'Jornada21' },
    { label: 'Jornada 20', value: 'Jornada20' },
    { label: 'Jornada 19', value: 'Jornada19' },
    { label: 'Jornada 18', value: 'Jornada18' },
    { label: 'Jornada 17', value: 'Jornada17' },
    { label: 'Jornada 16', value: 'Jornada16' },
    { label: 'Jornada 15', value: 'Jornada15' },
    { label: 'Jornada 14', value: 'Jornada14' },
    { label: 'Jornada 13', value: 'Jornada13' },
    { label: 'Jornada 12', value: 'Jornada12' },
    { label: 'Jornada 11', value: 'Jornada11' },
    { label: 'Jornada 10', value: 'Jornada10' },
    { label: 'Jornada 9', value: 'Jornada9' },
    { label: 'Jornada 8', value: 'Jornada8' },
    { label: 'Jornada 7', value: 'Jornada7' },
    { label: 'Jornada 6', value: 'Jornada6' },
    { label: 'Jornada 5', value: 'Jornada5' },
    { label: 'Jornada 4', value: 'Jornada4' },
    { label: 'Jornada 3', value: 'Jornada3' },
    { label: 'Jornada 2', value: 'Jornada2' },
    { label: 'Jornada 1', value: 'Jornada1' }
  ];

  jsonData3 = [
    { label: 'Clasificación promedio', value: 'ClasificacionProm' },
    { label: 'Goles', value: 'Goles' }
  ];

  selectedValue1: string = '';
  selectedValue2: string = '';
  selectedValue3: string = '';

  onSelect(event: Event, dropdown: number) {
    const value = (event.target as HTMLSelectElement).value;
    if (dropdown === 1) {
      this.selectedValue1 = value;
    } else if (dropdown === 2) {
      this.selectedValue2 = value;
    } else if (dropdown === 3) {
      this.selectedValue3 = value;
    }
  }

  puntuacion: number = 33;

  getColor(): string {
    if (this.puntuacion < 50) {
      return '#f00'; 
    } else if (this.puntuacion >= 50 && this.puntuacion < 70) {
      return '#ff0'; 
    } else if (this.puntuacion >= 70 && this.puntuacion < 90) {
      return '#0f0'; 
    } else {
      return '#00f'; 
    }
  }

  closeModel() {
    // You might want to implement this method properly
    // For now, let's remove the error
  }

  openModel() {
    const modelDiv = document.getElementById('passModal');
    if (modelDiv != null) {
      modelDiv.style.display = 'block';
    }
  }
}
