import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
 
  ngOnInit(): void {
    
  }
  credentials = {
    nombre: '',
    email: '',
    user: '',
    password: '',
    password_confirmation: '',
    esAdmin: false
  };

  loginCredentials = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    this.authService.login(this.loginCredentials).subscribe(
      () => {
        console.log('Login exitoso');
        // Redireccionar a otra página después del login (por ejemplo, al dashboard)
        this.router.navigate(['/Inicio']);
      },
      error => {
        console.log('Error en el login:', error);
        // Mostrar mensaje de error al usuario si es necesario
      }
    );
  }

  register() {
    this.authService.register(this.credentials).subscribe(
      () => {
        console.log('Registro exitoso');
        // Redireccionar a otra página después del registro (por ejemplo, al login)
        this.router.navigate(['/Inicio']);
      },
      error => {
        console.log('Error en el registro:', error);
        // Mostrar mensaje de error al usuario si es necesario
      }
    );
  }

  onSelect(event: any): void {
    console.log('Selected value:', event.target.value);
  }

  toggleSignIn(): void {
    const container = document.getElementById('container');
    if (container) {
      container.classList.remove("active");
    }
  }

  toggleSignUp(): void {
    const container = document.getElementById('container');
    if (container) {
      container.classList.add("active");
    }
  }

  getSelectedValue(option: any): void {
    console.log(`Option ${option.label} is ${option.checked ? 'checked' : 'unchecked'}`);
  }
}
