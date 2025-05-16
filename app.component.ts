import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent  {
  user = {
    name: 'John Doe',
  };
  changeUserName(){
    this.user.name = 'Jane Doe';
  }
  
}
