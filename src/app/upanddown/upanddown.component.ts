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
  round: number;
  gameInProgress: boolean = false;

  addRound(gameSettings: UpAndDownSetup) {
    for (var i = 0; i < this.game.length; i++) {
      var player = new UpAndDownPlayer();
      player.name = gameSettings.players[i];
      this.game.push(player);
    }
  }

  completeRound (round: number) {
    var arrRound : number = this.round - 1;
    for (var i = 0; i < this.game.length; i++) {
      var delta = this.game[i].bids[arrRound] === this.game[i].books[arrRound] ? 10 + this.game[i].books[arrRound] : this.game[i].books[arrRound];
      this.game[i].gain[arrRound] = delta;
      this.game[i].total += delta;
    }
    this.round += 1;
  }

  constructor() { }

  ngOnInit() { }

  setBids() {
    for (var i = 0; i < this.game.length; i++) {
      this.game[i].bids[this.round - 1] = 0;
    }
  }

  setBooks() {
    for (var i = 0; i < this.game.length; i++) {
      this.game[i].books[this.round - 1] = 0;
    }
  }

  setupGame(gameSettings: UpAndDownSetup) {
    this.gameInProgress = true;
    this.round = 1;
    this.game = [];
    this.fullRounds = [];
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
}