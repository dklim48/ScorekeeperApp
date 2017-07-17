import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UpAndDownPlayer } from '../upanddownplayer.model';

@Component({
  selector: 'app-upanddownbooksmodal',
  templateUrl: './upanddownbooksmodal.component.html',
  styleUrls: ['./upanddownbooksmodal.component.css']
})
export class UpanddownbooksmodalComponent implements OnInit {
  @Input() game: UpAndDownPlayer[];
  @Input() round: number;
  @Input() allRounds: number[];
  @Output() completeRound = new EventEmitter<number>();

  changeBooks(player: UpAndDownPlayer, delta: number) {
    var arrayRound: number = this.round - 1;
    var totalBooks: number = 0;
    for (var i = 0; i < this.game.length; i++) {
      totalBooks += this.game[i].books[arrayRound];
    }
    if (totalBooks + delta > this.allRounds[arrayRound]) {
      // Maybe alert that it's too high
    } else if (player.books[arrayRound] + delta < 0) {
      // Do nothing, it's obvious to see that they can't go higher than 0.
    } else {
      // Otherwise we're fine.
      player.books[this.round - 1] = player.books[arrayRound] + delta;
    }
  }

  exit() {
    this.completeRound.emit(this.round);
  }

  constructor() { }

  ngOnInit() { }

}