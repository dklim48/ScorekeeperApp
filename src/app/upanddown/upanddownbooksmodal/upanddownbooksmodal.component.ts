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
  @Output() completeRound = new EventEmitter<number[]>();

  books: number[] = [];
  isValid: boolean = false;

  changeBooks(index: number, delta: number) {
    var totalBooks: number = 0;
    if (!this.books[index]) {
      this.books[index] = 0;
    }
    for (var i = 0; i < this.books.length; i++) {
      totalBooks += this.books[i];
    }
    if (totalBooks + delta > this.allRounds[this.round - 1]) {
      // Maybe alert that it's too high
    } else if (this.books[index] + delta < 0) {
      // Do nothing, it's obvious to see that they can't go lower than 0.
    } else {
      // Otherwise we're fine.
      this.books[index] = this.books[index] + delta;
      // Check to see if we have a valid amount of books to save
      if (totalBooks + delta === this.round) {
        this.isValid = true;
      } else {
        this.isValid = false;
      }
    }
  }

  constructor() { }

  save() {
    this.completeRound.emit(this.books);
  }

  ngOnInit() { }
}