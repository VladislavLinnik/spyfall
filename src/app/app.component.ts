import { Component } from '@angular/core';
import {locations} from './locations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  playersNumber = 3;
  spiesNumber = 1;
  secondsNumber = 30;
  isStartScreenComplete = false;
  isHiddenCard = true;
  location: string;
  currentPlayer = {};
  currentPlayerNumber = 1;
  timer = null;
  randomSpy = Math.floor(Math.random() * this.playersNumber) + 1;

  showRoles(): void {
    this.isStartScreenComplete = true;
    const random = Math.floor(Math.random() * locations.length);
    this.location = locations[random];
    this.generatePlayers();
  }

  nextPlayer(): void {
    this.isHiddenCard = true;

    if (this.currentPlayerNumber === this.playersNumber) {
      const intervalId = setInterval(() => {
        this.timer = this.secondsNumber--;
        if (this.timer === 0) {
          clearInterval(intervalId);
        }
      }, 1000);
    } else {
      this.currentPlayerNumber++;
      this.generatePlayers();
    }
  }

  refreshPage(): void {
    location.reload();
  }

  private generatePlayers(): void {
    const role = this.randomSpy === this.currentPlayerNumber ? 'Шпион' : 'Местный';
    this.currentPlayer = Object.assign({}, {
      number: this.currentPlayerNumber,
      role
    });
  }
}
