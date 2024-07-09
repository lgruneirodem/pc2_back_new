import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.rutaApi; 
  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password })
      .pipe(
        map(response => {
          if (response.token) {
            localStorage.setItem('token', response.token);
          }
          return response;
        })
      );
  }

  register(nombre: string, email: string, user: string, password: string, esAdmin: boolean): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, email)
      .pipe(
        map(response => {
          if (response.token) {
            localStorage.setItem('token', response.token);
          }
          return response;
        })
      );
  }
}
