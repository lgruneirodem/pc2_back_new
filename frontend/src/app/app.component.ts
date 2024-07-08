import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Dream League Assistant';
  //constructor(private authService: AuthService) {}

  // constructor (private JugadoresService: JugadoresService) {}

  // ngOnInit (): void{
  //   this.JugadoresService.getJugador(1).subscribe(  //el profe tieen jugadoresService REVISAR MINUSCULA
  //     next: (data) => {

  //     },
  //     error: (error) => {
  //     }
  //   );
  // }

  // isLoggedIn(): boolean {
  //   return this.authService.isLoggedInUser();
  // }
}