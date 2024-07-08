import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-examen',
  standalone: true,
  imports: [
    CommonModule, 
  ],
  templateUrl: './examen.component.html',
  styleUrl: './examen.component.scss'
})
export class ExamenComponent {
  constructor() { }
  getDetails() {
    alert("¡Hola! Mundo");
  }

}
