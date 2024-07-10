// partido.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';
import { Partido } from '../models/partido'; // Importas el modelo

@Injectable({
    providedIn: 'root'
})
export class PartidoService {
  private apiUrl = environment.apiUrl; // Ajusta la URL según tu configuración de Laravel

    constructor(private http: HttpClient) {}

    getPartidosPorJornada(jornadaId: number): Observable<Partido[]> {
        return this.http.get<Partido[]>(`${this.apiUrl}/api/partidos/j${jornadaId}`);
    }
}
