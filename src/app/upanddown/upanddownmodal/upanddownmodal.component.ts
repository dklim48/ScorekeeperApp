import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UpAndDownSetup } from '../upanddowngamesetup.model';

@Component({
  selector: 'app-upanddownmodal',
  templateUrl: './upanddownmodal.component.html',
  styleUrls: ['./upanddownmodal.component.css']
})
export class UpanddownmodalComponent implements OnInit {
  badName: boolean = false;
  gameSettings: UpAndDownSetup = new UpAndDownSetup();
  playerName: string = "";

  @Output() gameSettingsSelected = new EventEmitter<UpAndDownSetup>();

  addPlayer() {
    if (this.playerName === "") {
      this.badName = true;
    } else {
      this.badName = false;
      this.gameSettings.players.push(this.playerName);
      this.playerName = "";
      if (this.gameSettings.rounds > this.maxRounds()) {
        this.gameSettings.rounds = this.maxRounds();
      }
    }
  }

  changeRounds(delta: number) {
    if (this.gameSettings.rounds + delta >= 1 && this.gameSettings.rounds + delta <= this.maxRounds()) {
      this.gameSettings.rounds += delta;
    }
  }

  constructor() { }

  isValid() {
    if (this.gameSettings.players.length >= 2 && this.gameSettings.rounds > 0) {
      return true;
    }
    return false;
  }

  maxRounds() {
    return Math.floor(51 / this.gameSettings.players.length);
  }

  ngOnInit() { }

  removePlayer(index: number) {
    this.gameSettings.players.splice(index, 1);
  }

  startGame() {
    this.gameSettingsSelected.emit(this.gameSettings);
  }
}