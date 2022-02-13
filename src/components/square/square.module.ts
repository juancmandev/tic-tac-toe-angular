import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SquareComponent } from './square.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SquareComponent
  ],
  exports: [
    SquareComponent
  ]
})
export class SquareModule { }