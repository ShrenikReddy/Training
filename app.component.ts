import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  count: number = 0;
  countInterval: any;
  startCounter() {
    setInterval(() => {
      if (this.count <= 5) {
        console.log(this.count++);
      } else {
        clearInterval(this.countInterval);
      }
    }, 1000);
  }
  ngOnInit(): void {
    console.log('ngOnInit: Component has been initialized');
  }
  constructor() {
    console.log('Constructor: Component is being constructed');
  }
}
