// plantilla.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Jugador } from '../models/jugador';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class PlantillaService {
  private apiUrl = environment.apiUrl; // Reemplaza con la URL de tu API Laravel

  constructor(private http: HttpClient) {}

  getStatsPlantilla(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/plantillas/${id}/stats`);
  }

  getJugadoresPorPlantilla(id: number): Observable<Jugador[]> {
    return this.http.get<Jugador[]>(`${this.apiUrl}/plantillas/${id}/jugadores`);
  }
}
