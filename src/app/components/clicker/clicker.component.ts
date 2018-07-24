import { Component } from '@angular/core';

@Component({
  selector: 'app-clicker',
  templateUrl: './clicker.component.html',
  styleUrls: ['./clicker.component.css']
})
export class ClickerComponent {
  clicks = 5;

  increment(amount: number) {
    this.clicks += amount;
  }
}
