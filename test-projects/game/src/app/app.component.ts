import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'game';

  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  // Here we define what we do with the event from game-control.component.ts
  // that we listened to in app.component.html . Remember: this was an
  // interval counter.
  // We called the function onInterValfired and defined its output as a number.
  onIntervalFired(firedNumber: number) {
    if (firedNumber % 2 === 0) {
      this.evenNumbers.push(firedNumber);
    } else {
      this.oddNumbers.push(firedNumber);
    }
  }
}
