import { Component,Inject,OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import * as $ from 'jquery';


@Component({
  selector: 'app-pop-up-admin',
  standalone: true,
  imports: [],
  templateUrl: './pop-up-admin.component.html',
  styleUrl: './pop-up-admin.component.scss'
})
export class PopUpAdminComponent implements OnInit {
  jugador;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.jugador = data;
  }

  ngOnInit(): void {

  }

}
