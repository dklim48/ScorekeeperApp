import { Component, OnInit } from '@angular/core';
import { UpAndDownSetup } from './upanddowngamesetup.model';
import { UpAndDownPlayer } from './upanddownplayer.model';

@Component({
  selector: 'app-upanddown',
  templateUrl: './upanddown.component.html',
  styleUrls: ['./upanddown.component.css']
})
export class UpanddownComponent implements OnInit {
  game: UpAndDownPlayer[] = [];
  fullRounds: number[] = [];

  setupGame(gameSettings: UpAndDownSetup) {
    for (var i = 0; i < gameSettings.players.length; i++) {
      var player = new UpAndDownPlayer();
      player.name = gameSettings.players[i];
      this.game.push(player);
    }
    for (var i = 0; i < gameSettings.rounds * 2; i++) {
      if (i < gameSettings.rounds) {
        this.fullRounds.push(i + 1);
      } else {
        this.fullRounds.push(gameSettings.rounds - (i - gameSettings.rounds));
      }
    }
  }

  addRound(gameSettings: UpAndDownSetup) {
    for (var i = 0; i < this.game.length; i++) {
      var player = new UpAndDownPlayer();
      player.name = gameSettings.players[i];
      this.game.push(player);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
