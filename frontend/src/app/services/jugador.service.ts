// jugador.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Jugador } from '../models/jugador';
import { environment } from '../../environment/environment';

@Injectable({
    providedIn: 'root'
})
export class JugadorService {
  private apiUrl = environment.apiUrl; // Reemplaza con la URL de tu servidor Laravel

    constructor(private http: HttpClient) { }

    // Obtener todos los jugadores
    getJugadores(): Observable<Jugador[]> {
        return this.http.get<Jugador[]>(`${this.apiUrl}/jugadores`);
    }

    // Obtener detalles de un jugador por ID
    getJugador(id: number): Observable<Jugador> {
        return this.http.get<Jugador>(`${this.apiUrl}/jugadores/${id}`);
    }

    // Obtener estadísticas básicas de un jugador por ID
    getBasicStats(id: number): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/jugadores/${id}/stats`);
    }

    // Obtener los jugadores top por puntos
    getTopJugadores(): Observable<Jugador[]> {
        return this.http.get<Jugador[]>(`${this.apiUrl}/jugadores/top`);
    }

    // Obtener los hot picks
    getHotPicks(): Observable<Jugador[]> {
        return this.http.get<Jugador[]>(`${this.apiUrl}/jugadores/hotpicks`);
    }

    // Obtener los jugadores top por goles
    getTopJugadoresPorGoles(): Observable<Jugador[]> {
        return this.http.get<Jugador[]>(`${this.apiUrl}/jugadores/top-goles`);
    }

    // Obtener los jugadores top por valor
    getTopJugadoresPorValor(): Observable<Jugador[]> {
        return this.http.get<Jugador[]>(`${this.apiUrl}/jugadores/top-valor`);
    }

    // Obtener los jugadores top por media de puntos
    getTopJugadoresPorMediaPuntos(): Observable<Jugador[]> {
        return this.http.get<Jugador[]>(`${this.apiUrl}/jugadores/top-media`);
    }
}
