import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environment/environment';
import { Equipos } from '../models/equipos'; // Asegúrate de que la ruta y nombre del modelo sean correctos

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  private apiUrl = environment.apiUrl + '/equipos'; // Asegúrate de que la URL de la API esté configurada correctamente en tu archivo environment

  constructor(private http: HttpClient) { }

  // Método para obtener todos los equipos
  getAllEquipos(): Observable<Equipos[]> {
    return this.http.get<Equipos[]>(this.apiUrl).pipe(
      map(equipos => equipos.filter(equipo => equipo.equipo_id !== 0))
    );
  }

  // Otros métodos del servicio como getById, create, update, delete, etc.
}

