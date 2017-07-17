import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UpAndDownPlayer } from '../upanddownplayer.model';

@Component({
  selector: 'app-upanddownbidmodal',
  templateUrl: './upanddownbidmodal.component.html',
  styleUrls: ['./upanddownbidmodal.component.css']
})
export class UpanddownbidmodalComponent implements OnInit {
  @Input() allRounds: number[];
  @Input() game: UpAndDownPlayer[];
  @Input() round: number;

  changeBids(player: UpAndDownPlayer, delta: number) {
    var arrayRound: number = this.round - 1;
    if (player.bids[arrayRound] + delta > this.allRounds[arrayRound]) {
      // Maybe, alert that it's too high
    } else if (player.bids[arrayRound] + delta < 0) {
      // Do nothing, it's obvious to see that they can't go higher than 0.
    } else {
      // Otherwise we're fine.
      player.bids[this.round - 1] = player.bids[arrayRound] + delta;
    }
  }

  constructor() { }

  ngOnInit() { }

}