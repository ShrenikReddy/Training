import { Component, DoCheck } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './test/test.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements DoCheck {
  dataFromParent: number | undefined;
  ngDoCheck(): void {
    console.log('DoCheck called');
  }

  sendDataToChild(): void {
    let random = Math.floor(Math.random() * 10);
    this.dataFromParent = random;
  }
}
