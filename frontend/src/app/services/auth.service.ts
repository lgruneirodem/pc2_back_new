// auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000/api'; // Reemplaza con la URL de tu backend Laravel
  private isAdmin = false;

  constructor(private http: HttpClient) { }

  register(usuario: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, usuario);
  }

  login(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials)
      .pipe(
        map(response => {
          // Guardar el token y otros datos en el almacenamiento local si es necesario
          localStorage.setItem('access_token', response.access_token);
          this.isAdmin = response.isAdmin;
          return response;
        })
      );
  }
  userIsAdmin(): boolean {
    return this.isAdmin;
  }
  logout() {
    // Puedes implementar el logout si es necesario
    localStorage.removeItem('access_token');
  }

  getToken(): string | null {
    return localStorage.getItem('access_token');
  }

  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }
}
