
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import {ChangeDetectionStrategy} from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';
import { AuthService } from '../services/auth.service'; // Ajusta la ruta según tu estructura de proyecto
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  nombre: string = '';
  usuario: string = '';
  password_confirmation: string = '';
  isRegistering: boolean = false;
  error: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    // No need to use document.getElementById in Angular, use ViewChild or ElementRef for DOM manipulation
  }


  onSelect(event: any): void {
    console.log('Selected value:', event.target.value);
    // Aquí puedes manejar la lógica de acuerdo al valor seleccionado
  }

  login(): void {
    this.authService.login(this.email, this.password).subscribe(
      response => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/dashboard']); // Cambia esto por la ruta que corresponda
      },
      error => {
        console.error(error);
        alert('Login failed');
      }
    );
  }

  register(): void {
    this.authService.register(this.nombre, this.email, this.usuario, this.password, this.password_confirmation).subscribe(
      response => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/dashboard']); // Cambia esto por la ruta que corresponda
      },
      error => {
        console.error(error);
        alert('Registration failed');
      }
    );
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
