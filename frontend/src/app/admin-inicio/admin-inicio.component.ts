import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Usuario {
  nombre: string;
  correo: string;
}
interface Administrador {
  nombre: string;
}

@Component({
  selector: 'app-admin-inicio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-inicio.component.html',
  styleUrls: ['./admin-inicio.component.scss']
})
export class AdminInicioComponent implements OnInit {
  usuarios: Usuario[] = [
    { nombre: "Usuario 1", correo: "usuario1@example.com" },
    { nombre: "Usuario 2", correo: "usuario2@example.com" },
    { nombre: "Usuario 3", correo: "usuario3@example.com" }
  ];
  admins: Administrador[] = [
    { nombre: "admin 1" }
  ];

  usuariosFiltrados: Usuario[] = [];
  searchText: string = '';

  constructor() { }

  ngOnInit(): void {
    this.usuariosFiltrados = this.usuarios;
  }

  onSearchTextChanged(): void {
    if (this.searchText) {
      this.usuariosFiltrados = this.usuarios.filter(usuario =>
        usuario.nombre.toLowerCase().includes(this.searchText.toLowerCase()));
    } else {
      this.usuariosFiltrados = this.usuarios;
    }
  }

  openModel(): void {
    // Logic to open the modal goes here
    console.log("Modal opened");
  }
}
