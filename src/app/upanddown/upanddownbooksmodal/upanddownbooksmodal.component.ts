import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UpAndDownGame } from '../upanddowngame.model';
import { UpAndDownPlayer } from '../upanddownplayer.model';

@Component({
  selector: 'app-upanddownbooksmodal',
  templateUrl: './upanddownbooksmodal.component.html',
  styleUrls: ['./upanddownbooksmodal.component.css']
})
export class UpanddownbooksmodalComponent implements OnInit {
  @Input() game: UpAndDownGame;
  @Output() resetBooks = new EventEmitter<number>();
  @Output() completeRound = new EventEmitter<number>();

  isValid: boolean = false;

  cancel() {
    this.resetBooks.emit(this.game.currentRound);
  }

  changeBooks(player: UpAndDownPlayer, delta: number) {
    var totalBooks: number = 0;
    for (var i = 0; i < this.game.players.length; i++) {
      totalBooks += this.game.players[i].books[this.game.currentRound - 1];
    }
    if (totalBooks + delta > this.game.displayRounds[this.game.currentRound - 1]) {
      // Maybe alert that it's too high
    } else if (player.books[this.game.currentRound - 1] + delta < 0) {
      // Do nothing, it's obvious to see that they can't go lower than 0.
    } else {
      // Otherwise we're fine.
      player.books[this.game.currentRound - 1] = player.books[this.game.currentRound - 1] + delta;
      // Check to see if we have a valid amount of books to save
      if (totalBooks + delta === this.game.currentRound) {
        this.isValid = true;
      } else {
        this.isValid = false;
      }
    }
  }

  constructor() { }

  save() {
    this.completeRound.emit(this.game.currentRound);
  }

  ngOnInit() { }
}