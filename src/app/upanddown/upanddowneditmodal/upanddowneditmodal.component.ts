import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UpAndDownGame } from '../upanddowngame.model';

@Component({
  selector: 'app-upanddowneditmodal',
  templateUrl: './upanddowneditmodal.component.html',
  styleUrls: ['./upanddowneditmodal.component.css']
})
export class UpanddowneditmodalComponent implements OnInit {
  @Input() game: UpAndDownGame;
  @Input() editRound: number;

  constructor() { }

  ngOnInit() {
    console.log("Edit Modal Round Number Sent: " + this.editRound)
  }

}
