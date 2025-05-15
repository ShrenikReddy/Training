import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  age: number = 0;
  isEligible: boolean = false;

  checkEligibility() {
    this.isEligible = this.age >= 18;
  }
}
