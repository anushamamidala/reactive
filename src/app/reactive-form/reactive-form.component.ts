import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  empRegistrationForm:FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.empRegistrationForm = new FormGroup({
      'fullName':new FormControl(null),
      'address':new FormControl(null),
      'city':new FormControl(null),
      'email':new FormControl(null),
      'phoneNo':new FormControl(null),
      'password':new FormControl(null),
      'confirmPassword':new FormControl(null),
      'termsandconditions': new FormControl(null)
    });
  }

  onSubmit(){
    console.log(this.empRegistrationForm.value)
  }
}
