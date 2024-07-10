import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../models/usuario'; // Importa la interfaz Usuario
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-inicio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-inicio.component.html',
  styleUrls: ['./admin-inicio.component.scss']
})
export class AdminInicioComponent implements OnInit {
  usuarios: Usuario[] = [];
  usuariosFiltrados: Usuario[] = [];
  searchText: string = '';

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.loadUsuarios();
  }

  loadUsuarios(): void {
    this.usuarioService.getUsuarios().subscribe(
      (response: Usuario[]) => {
        this.usuarios = response;
        this.usuariosFiltrados = this.usuarios; // Inicialmente mostrar todos los usuarios
      },
      (error) => {
        console.error('Error al cargar usuarios', error);
        // Manejar errores aquí
      }
    );
  }

  onSearchTextChanged(): void {
    if (this.searchText) {
      this.usuariosFiltrados = this.usuarios.filter(usuario =>
        usuario.nombre.toLowerCase().includes(this.searchText.toLowerCase())
      );
    } else {
      this.usuariosFiltrados = this.usuarios;
    }
  }

  openModel(): void {
    // Lógica para abrir el modal
    console.log("Modal abierto");
  }
}
