import { Component, Input, OnInit } from '@angular/core';
import { UpAndDownGame } from '../upanddowngame.model';
import { UpAndDownPlayer } from '../upanddownplayer.model';

@Component({
  selector: 'app-upandownbidcontent',
  templateUrl: './upandownbidcontent.component.html',
  styleUrls: ['./upandownbidcontent.component.css']
})
export class UpandownbidcontentComponent implements OnInit {

  @Input() game: UpAndDownGame;
  @Input() round: number;

  changeBids(player: UpAndDownPlayer, delta: number) {
    if (player.bids[this.round - 1] + delta > this.game.displayRounds[this.round - 1]) {
      // Maybe, alert that it's too high
    } else if (player.bids[this.round - 1] + delta < 0) {
      // Do nothing, it's obvious to see that they can't go higher than 0.
    } else {
      // Otherwise we're fine.
      player.bids[this.round - 1] = player.bids[this.round - 1] + delta;
    }
  }

  constructor() { }

  ngOnInit() {
    console.log("Bid Content Round Number Sent: " + this.round)    
  }
}
