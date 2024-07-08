import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { environment } from '../../environment/environment.js';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  // color1 = environment.color1;
  // color2 = environment.color2;
  // color2semit = environment.color2semit;
  // color3 = environment.color3;
}