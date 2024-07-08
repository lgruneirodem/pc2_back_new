import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-equipo',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './equipo.component.html',
  styleUrl: './equipo.component.scss'
})
export class EquipoComponent {
  nombreEquipo?: string;

  constructor(private route: ActivatedRoute) { }

}


