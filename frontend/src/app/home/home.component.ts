import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Equipos } from '../models/equipos';
import { EquipoService } from '../services/equipo.service';

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
  constructor(private equipoService: EquipoService) { }
  ngOnInit(): void {
    this.obtenerEquipos();
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
}