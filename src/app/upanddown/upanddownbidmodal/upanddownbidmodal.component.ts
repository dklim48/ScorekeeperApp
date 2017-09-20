import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UpAndDownGame } from '../upanddowngame.model';

@Component({
  selector: 'app-upanddownbidmodal',
  templateUrl: './upanddownbidmodal.component.html',
  styleUrls: ['./upanddownbidmodal.component.css']
})
export class UpanddownbidmodalComponent implements OnInit {
  @Input() game: UpAndDownGame;
  @Output() resetBids = new EventEmitter<number>();

  cancelBids() {
    this.resetBids.emit(this.game.currentRound);
  }

  constructor() { }

  ngOnInit() { }

}