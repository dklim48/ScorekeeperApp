import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UpAndDownPlayer } from '../upanddownplayer.model';

@Component({
  selector: 'app-upanddownbidmodal',
  templateUrl: './upanddownbidmodal.component.html',
  styleUrls: ['./upanddownbidmodal.component.css']
})
export class UpanddownbidmodalComponent implements OnInit {
  @Input() allRounds: number[];
  @Input() round: number;
  @Input() game: UpAndDownPlayer[];
  @Output() roundBids = new EventEmitter<number[]>();

  bids: number[] = [];

  changeBids(index: number, delta: number) {
    if(!this.bids[index]) {
      this.bids[index] = 0;
    }
    if (this.bids[index] + delta > this.allRounds[this.round - 1]) {
      // Maybe, alert that it's too high
    } else if (this.bids[index] + delta < 0) {
      // Do nothing, it's obvious to see that they can't go higher than 0.
    } else {
      // Otherwise we're fine.
      this.bids[index] = this.bids[index] + delta;
    }
  }

  save() {
    this.roundBids.emit(this.bids);
  }

  constructor() { }

  ngOnInit() { }

}