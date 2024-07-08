import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Jugador } from "../models/jugador";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class JugadoresService {
    constructor(private http: HttpClient) {  }
    public getEquipo(id:number): Observable<Jugador> {
      return this.http.get<Jugador>('http://127.0.0.1:8000/api/jugadores/get/1');}
    public GetAll(): Observable<Jugador[]> {
      return this.http.get<Jugador[]>("http://127.0.0.1:8000/api/jugadores/getAll");}
    public EquipoExists(id: number):Observable<Jugador>{ 
      return this.http.get<Jugador>("http://127.0.0.1:8000/api/jugadores/jugadorExiste/"+id);}
    public Create(equipo: Jugador): Observable<Jugador> {
      return this.http.post<Jugador>("http://127.0.0.1:8000/api/jugadores/create", equipo);}
    public Delete(id: number):Observable<Jugador>{ 
      return this.http.delete<Jugador>("http://127.0.0.1:8000/api/jugadores/delete/" + id);}
}