import { Component, Renderer2, ElementRef, inject  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tec',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './tec.component.html',
  styleUrl: './tec.component.scss'
})
export class TecComponent {
  constructor(private dialogRef : MatDialog){}

  openDialog(){
    this.dialogRef.open(PopUpComponent);
  }
}
