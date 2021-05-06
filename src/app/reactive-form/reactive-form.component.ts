import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MustMatch } from 'must-match.validator'
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  empRegistrationForm:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.empRegistrationForm = this.fb.group({
      fullName:["", Validators.required],
      address:["",Validators.required],
      city:["",Validators.required],
      email:["",[Validators.required, Validators.email]],
      phoneNo:["",[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"), Validators.minLength(10), Validators.maxLength(12)]],
      password:["",[Validators.required, Validators.minLength(6)]],
      confirmPassword:["", [Validators.required, Validators.minLength(6)]],
    })
  }

  onSubmit(){
    console.log(this.empRegistrationForm.value)
  }
}
