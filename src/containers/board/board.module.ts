import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardContainer } from './board.container';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BoardContainer
  ],
  exports: [
    BoardContainer
  ]
})
export class BoardModule { }