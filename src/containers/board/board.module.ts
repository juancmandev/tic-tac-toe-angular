import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardContainer } from './board.container';
import { SquareModule } from 'src/components/square/square.module';

@NgModule({
  imports: [
    CommonModule,
    SquareModule
  ],
  declarations: [
    BoardContainer
  ],
  exports: [
    BoardContainer
  ]
})
export class BoardModule { }