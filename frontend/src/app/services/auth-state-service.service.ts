// auth-state.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthStateService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(this.hasToken());
  private isAdminSubject = new BehaviorSubject<boolean>(this.checkAdmin());

  isLoggedIn$ = this.isLoggedInSubject.asObservable();
  isAdmin$ = this.isAdminSubject.asObservable();

  private tokenKey = 'access_token';
  private isAdminKey = 'isAdmin';

  private hasToken(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  private checkAdmin(): boolean {
    const isAdmin = localStorage.getItem(this.isAdminKey);
    return isAdmin === 'true';
  }

  updateAuthState(isLoggedIn: boolean, isAdmin: boolean) {
    this.isLoggedInSubject.next(isLoggedIn);
    this.isAdminSubject.next(isAdmin);
  }
}
