import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UpAndDownGame } from '../upanddowngame.model';
import { UpAndDownPlayer } from '../upanddownplayer.model';

declare var jQuery: any;

@Component({
  selector: 'app-upanddownbooksmodal',
  templateUrl: './upanddownbooksmodal.component.html',
  styleUrls: ['./upanddownbooksmodal.component.css']
})
export class UpanddownbooksmodalComponent implements OnInit {
  @Input() game: UpAndDownGame;
  @Output() resetBooks = new EventEmitter<number>();
  @Output() completeRound = new EventEmitter<number>();

  cancel() {
    this.resetBooks.emit(this.game.currentRound);
  }

  constructor() { }

  save() {
    this.completeRound.emit(this.game.currentRound);
    jQuery('#gameBooksModal').modal('hide');
  }

  ngOnInit() { }
}