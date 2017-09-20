import { Component, OnInit, Input } from '@angular/core';
import { UpAndDownGame } from '../upanddowngame.model';
import { UpAndDownPlayer } from '../upanddownplayer.model';

@Component({
  selector: 'app-upandowntrickscontent',
  templateUrl: './upandowntrickscontent.component.html',
  styleUrls: ['./upandowntrickscontent.component.css']
})
export class UpandowntrickscontentComponent implements OnInit {
  @Input() game: UpAndDownGame;
  @Input() round: number;

  changeBooks(player: UpAndDownPlayer, delta: number) {
    var totalBooks: number = 0;
    for (var i = 0; i < this.game.players.length; i++) {
      totalBooks += this.game.players[i].books[this.round - 1];
    }
    if (totalBooks + delta > this.game.displayRounds[this.round - 1]) {
      // Maybe alert that it's too high
    } else if (player.books[this.round - 1] + delta < 0) {
      // Do nothing, it's obvious to see that they can't go lower than 0.
    } else {
      // Otherwise we're fine.
      player.books[this.round - 1] = player.books[this.round - 1] + delta;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
