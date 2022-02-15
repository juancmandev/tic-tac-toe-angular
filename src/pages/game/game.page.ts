import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss']
})
export class GamePage {
  @ViewChild('Board') Board!: ElementRef;
}