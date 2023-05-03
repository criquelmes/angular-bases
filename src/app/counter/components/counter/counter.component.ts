import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: ` <h3>Counter: {{ counter }}</h3>

    <button (click)="increaseBy(+1)">Incrementar</button>
    <button (click)="resetCounter(10)">Reset</button>
    <button (click)="increaseBy(-1)">Decrementar</button>`,
})
export class CounterComponent {
  public counter: number = 10;

  increaseBy(value: number): void {
    this.counter += value;
  }

  resetCounter(value: number): void {
    this.counter = value;
  }
}
