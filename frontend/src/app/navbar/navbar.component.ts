import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { AuthStateService } from '../services/auth-state-service.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {

  scrolled: boolean = false;
  isAdmin: boolean = false;
  isLoggedIn: boolean = false;

  constructor(private authStateService: AuthStateService, private authService: AuthService) {}

  ngOnInit() {
    this.authStateService.isLoggedIn$.subscribe(
      isLoggedIn => this.isLoggedIn = isLoggedIn
    );
    this.authStateService.isAdmin$.subscribe(
      isAdmin => this.isAdmin = isAdmin
    );
  }

  logout() {
    this.authService.logout();
    // Handle additional logout logic here if needed
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Lógica para determinar si se ha hecho scroll
    if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
      this.scrolled = true;
    } else if (this.scrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
      this.scrolled = false;
    }
  }
}