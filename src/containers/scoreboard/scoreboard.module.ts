import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoreboardContainer } from './scoreboard.container';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ScoreboardContainer
  ],
  exports: [
    ScoreboardContainer
  ]
})
export class ScoreboardModule { }