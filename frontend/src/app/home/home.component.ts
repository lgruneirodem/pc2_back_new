import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Equipos } from '../models/equipos';
import { EquiposService } from '../services/equipos.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
  //Arrays
  equipos: Equipos[] = [];

  // Llamamos a los servicios
  constructor(private equiposService: EquiposService) {}
  ngOnInit(): void{
    // Funciones de los servicios
    this.equiposService.GetAll().subscribe(equiposLeidos => {
      // Guardamos los datos
      this.equipos = equiposLeidos;
    });
  }
}