// auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthStateService } from './auth-state-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000/api'; // Reemplaza con la URL de tu backend Laravel
  private tokenKey = 'access_token';
  private isAdminKey = 'isAdmin';

  constructor(private http: HttpClient, private authStateService: AuthStateService) { }

  register(usuario: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, usuario);
  }

  login(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials)
      .pipe(
        map(response => {
          localStorage.setItem(this.tokenKey, response.access_token);
          this.checkAdmin(credentials.email).subscribe(
            isAdmin => {
              localStorage.setItem(this.isAdminKey, isAdmin ? 'true' : 'false');
              this.authStateService.updateAuthState(true, isAdmin);
            },
            error => {
              localStorage.removeItem(this.isAdminKey);
              this.authStateService.updateAuthState(true, false);
            }
          );
          return response;
        })
      );
  }

  isAdmin(): boolean {
    const isAdmin = localStorage.getItem(this.isAdminKey);
    return isAdmin === 'true';
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.isAdminKey);
    this.authStateService.updateAuthState(false, false);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }

  private checkAdmin(email: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/check-admin/${email}`);
  }
}
