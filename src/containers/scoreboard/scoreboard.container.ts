import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.container.html',
  styleUrls: ['./scoreboard.container.scss']
})
export class ScoreboardContainer {
  @Input() currentPlayer: any;
}