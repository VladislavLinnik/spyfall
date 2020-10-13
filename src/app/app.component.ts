import { Component } from '@angular/core';
import {locations} from './locations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  playersNumber = 3;
  isStartScreenComplete = false;
  isHiddenCard = true;
  location: string;
  currentPlayer = {};
  currentPlayerNumber = 1;
  isFinishedGame = false;
  randomSpy = Math.floor(Math.random() * this.playersNumber) + 1;

  start(): void {
    this.isStartScreenComplete = true;
    const random = Math.floor(Math.random() * locations.length);
    this.location = locations[random];
    this.generatePlayers();
  }

  nextPlayer(): void {
    this.isHiddenCard = true;
    ++this.currentPlayerNumber;

    if (this.currentPlayerNumber === this.playersNumber + 1) {
      this.isFinishedGame = true;
    } else {
      this.generatePlayers();
    }
  }

  private generatePlayers(): void {
    const role = this.randomSpy === this.currentPlayerNumber ? 'Шпион' : 'Местный';
    this.currentPlayer = Object.assign({}, {
      number: this.currentPlayerNumber,
      role
    });
  }
}
