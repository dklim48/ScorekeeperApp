import { Component, OnInit } from '@angular/core';
import { UpAndDownSetup } from './upanddowngamesetup.model';
import { UpAndDownGame } from './upanddowngame.model';
import { UpAndDownPlayer } from './upanddownplayer.model';

@Component({
  selector: 'app-upanddown',
  templateUrl: './upanddown.component.html',
  styleUrls: ['./upanddown.component.css']
})
export class UpanddownComponent implements OnInit {
  game: UpAndDownGame = new UpAndDownGame();
  gameInProgress: boolean = false;
  winners: string[] = [];

  completeRound() {
    var arrRound: number = this.game.currentRound - 1;
    for (var i = 0; i < this.game.players.length; i++) {
      var delta = this.game.players[i].bids[arrRound] === this.game.players[i].books[arrRound] ? 10 + this.game.players[i].books[arrRound] : this.game.players[i].books[arrRound];
      this.game.players[i].gain[arrRound] = delta;
      this.game.players[i].total += delta;
    }
    if (this.game.currentRound === this.game.displayRounds.length) {
      this.determineWinner();
    } else {
      this.game.currentRound += 1;
    }
  }

  determineWinner() {
    var highest: number = 0;
    for (var i = 0; i < this.game.players.length; i++) {
      if (this.game.players[i].total === highest) {
        this.winners.push(this.game.players[i].name);
      } else if (this.game.players[i].total > highest) {
        this.winners = [];
        this.winners.push(this.game.players[i].name);
        highest = this.game.players[i].total;
      }
    }
  }

  doneGame() {
    this.game = new UpAndDownGame();
    this.winners = [];
    this.gameInProgress = false;
  }

  constructor() { }

  initBids() {
    for (var i = 0; i < this.game.players.length; i++) {
      if (!this.game.players[i].bids[this.game.currentRound - 1]) {
        this.game.players[i].bids[this.game.currentRound - 1] = 0;
      }
    }
  }

  initBooks() {
    for (var i = 0; i < this.game.players.length; i++) {
      if (!this.game.players[i].books[this.game.currentRound - 1]) {
        this.game.players[i].books[this.game.currentRound - 1] = 0;
      }
    }
  }

  ngOnInit() { }

  resetBids(round: number) {
    for (var i = 0; i < this.game.players.length; i++) {
      this.game.players[i].bids[this.game.currentRound - 1] = 0;
    }
  }

  resetBooks(round: number) {
    for (var i = 0; i < this.game.players.length; i++) {
      this.game.players[i].books[this.game.currentRound - 1] = 0;
    }
  }

  resetGame() {
    this.gameInProgress = true;
    this.winners = [];
    this.game.currentRound = 1;
    for (var i = 0; i < this.game.players.length; i++) {
      this.game.players[i].bids = [];
      this.game.players[i].books = [];
      this.game.players[i].gain = [];
      this.game.players[i].total = 0;
    }
  }

  setupGame(gameSettings: UpAndDownSetup) {
    this.gameInProgress = true;
    this.game.currentRound = 1;
    for (var i = 0; i < gameSettings.players.length; i++) {
      var player = new UpAndDownPlayer();
      player.name = gameSettings.players[i];
      this.game.players.push(player);
    }
    for (var i = 0; i < gameSettings.rounds * 2; i++) {
      if (i < gameSettings.rounds) {
        this.game.displayRounds.push(i + 1);
      } else {
        this.game.displayRounds.push(gameSettings.rounds - (i - gameSettings.rounds));
      }
    }
  }
}