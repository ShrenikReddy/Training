import {
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-test',
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css',
})
export class TestComponent implements AfterViewInit, AfterContentChecked, AfterViewChecked {
  ngAfterContentChecked(): void {
    console.log('ngAfterContentCheck() hook invoked');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit() hook invoked');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewCheck() hook invoked');
  }
}
