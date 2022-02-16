import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SquareComponent } from './square.component';
import { NbButtonModule } from '@nebular/theme';

@NgModule({
  imports: [
    CommonModule,
    NbButtonModule
  ],
  declarations: [
    SquareComponent
  ],
  exports: [
    SquareComponent
  ]
})
export class SquareModule { }