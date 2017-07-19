import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UpAndDownGame } from '../upanddowngame.model';
import { UpAndDownPlayer } from '../upanddownplayer.model';

@Component({
  selector: 'app-upanddownbidmodal',
  templateUrl: './upanddownbidmodal.component.html',
  styleUrls: ['./upanddownbidmodal.component.css']
})
export class UpanddownbidmodalComponent implements OnInit {
  @Input() game: UpAndDownGame;
  @Output() resetBids = new EventEmitter<number>();

  changeBids(player: UpAndDownPlayer, delta: number) {
    if (player.bids[this.game.currentRound - 1] + delta > this.game.displayRounds[this.game.currentRound - 1]) {
      // Maybe, alert that it's too high
    } else if (player.bids[this.game.currentRound - 1] + delta < 0) {
      // Do nothing, it's obvious to see that they can't go higher than 0.
    } else {
      // Otherwise we're fine.
      player.bids[this.game.currentRound - 1] = player.bids[this.game.currentRound - 1] + delta;
    }
  }

  cancel() {
    this.resetBids.emit(this.game.currentRound);
  }

  constructor() { }

  ngOnInit() { }

}