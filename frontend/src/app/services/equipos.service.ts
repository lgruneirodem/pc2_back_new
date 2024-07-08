import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Equipos } from "../models/equipos";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class EquiposService {
    constructor(private http: HttpClient) {  }
    public getEquipo(id:number): Observable<Equipos> {
      return this.http.get<Equipos>('http://127.0.0.1:8000/api/equipos/get/1');}
    public GetAll(): Observable<Equipos[]> {
      return this.http.get<Equipos[]>("http://127.0.0.1:8000/api/equipos/getall");}
    public EquipoExists(id: number):Observable<Equipos>{ 
      return this.http.get<Equipos>("http://127.0.0.1:8000/api/equipos/equipoExiste/"+id);}
    public Create(equipo: Equipos): Observable<Equipos> {
      return this.http.post<Equipos>("http://127.0.0.1:8000/api/equipos/create", equipo);}
    public Delete(id: number):Observable<Equipos>{ 
      return this.http.delete<Equipos>("http://127.0.0.1:8000/api/equipos/delete/" + id);}
}
