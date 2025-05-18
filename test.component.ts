import {
  AfterContentChecked,
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
export class TestComponent
  implements AfterContentInit, AfterContentChecked, AfterViewInit
{
  @ViewChild('wrapper') wrapper!: ElementRef;
  @ContentChild('contentWrapper') content!: ElementRef;

  ngAfterContentInit(): void {
    console.log('ngAfterContentChecked() was invoked');
    console.log('ngAfterContentInit-wrapper', this.wrapper);
    console.log('ngAftercontentInit-content', this.content);
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked() was invoked');
  }

  ngAfterViewInit(): void {
    const divElement: HTMLElement = this.wrapper.nativeElement;
    divElement.style.color = 'maroon';
    divElement.style.fontSize = '15px';
    divElement.style.fontWeight = '300';
    console.log('ngAfterViewInit was invoked');
  }
}
