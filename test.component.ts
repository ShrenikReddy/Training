import { Component, DoCheck, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-test',
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent implements DoCheck{
  @Input() user : any;
  private previousUserName: string | undefined;
  
  ngDoCheck(): void {
    if (this.user.name != this.previousUserName) {
      this.previousUserName = this.user.name;
      console.log('ngDoCheck called - User name changed to:', this.user.name);
  }
}
