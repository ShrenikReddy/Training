import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})
export class AppComponent {
  nm = '';
  em = '';
  ph = '';
  add = '';
  submitted: boolean = false;
  showHeading: boolean = true;
  qualification = [{ school : '', degree: '', year: ''}];

  addQualification(){
    this.qualification.push({ school:'', degree:'', year:'' });
  }
  formSubmit(){
    this.submitted = true;
    this.showHeading = false;
  }
  formEdit(){
    this.submitted = false;
    this.showHeading = true;
  }
}


