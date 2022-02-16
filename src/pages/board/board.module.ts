import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BoardPage } from './board.page';
import { SquareModule } from 'src/components/square/square.module';
import { NbButtonModule } from '@nebular/theme';

const routes: Routes = [
  {
    path: '',
    component: BoardPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SquareModule,
    NbButtonModule
  ],
  declarations: [
    BoardPage
  ],
})
export class BoardModule { }