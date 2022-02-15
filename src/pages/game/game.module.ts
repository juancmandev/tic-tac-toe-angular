import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { GamePage } from './game.page';
import { ScoreboardModule } from 'src/containers/scoreboard/scoreboard.module';
import { BoardModule } from 'src/containers/board/board.module';

const routes: Routes = [
  {
    path: '',
    component: GamePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ScoreboardModule,
    BoardModule
  ],
  declarations: [
    GamePage
  ],
  exports: [
    GamePage
  ]
})
export class GameModule { }