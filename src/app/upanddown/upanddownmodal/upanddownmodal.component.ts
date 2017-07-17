import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UpAndDownGame } from '../upanddowngame.model';

@Component({
  selector: 'app-upanddownmodal',
  templateUrl: './upanddownmodal.component.html',
  styleUrls: ['./upanddownmodal.component.css']
})
export class UpanddownmodalComponent implements OnInit {
  gameSettings: UpAndDownGame = new UpAndDownGame();
  playerName: string = "";
  @Output() gameSettingsSelected = new EventEmitter<UpAndDownGame>();

  addPlayer() {
    this.gameSettings.players.push(this.playerName);
    this.playerName = "";
    if (this.gameSettings.rounds > this.maxRounds()) {
      this.gameSettings.rounds = this.maxRounds();
    }
  }

  removePlayer(index: number) {
    this.gameSettings.players.splice(index, 1);
  }

  changeRounds(delta: number) {
    if (this.gameSettings.rounds + delta >= 1 && this.gameSettings.rounds + delta <= this.maxRounds()) {
      this.gameSettings.rounds += delta;
    }
  }

  maxRounds() {
    return Math.floor(51 / this.gameSettings.players.length);
  }

  startGame() {
    this.gameSettingsSelected.emit(this.gameSettings);
  }

  constructor() { }

  ngOnInit() {
  }

}
