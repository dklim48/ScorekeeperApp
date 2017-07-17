import { Component, OnInit } from '@angular/core';
import { UpAndDownGame } from './upanddowngame.model';

@Component({
  selector: 'app-upanddown',
  templateUrl: './upanddown.component.html',
  styleUrls: ['./upanddown.component.css']
})
export class UpanddownComponent implements OnInit {
  players: string[] = [];
  fullRounds:  number[] = [];

  setupGame(gameSettings: UpAndDownGame) {
    this.players = gameSettings.players;
    for (var i = 0; i < gameSettings.rounds * 2; i++) {
      if (i < gameSettings.rounds) {
        this.fullRounds.push(i + 1);
      } else {
        this.fullRounds.push(gameSettings.rounds - (i - gameSettings.rounds));
      }
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
