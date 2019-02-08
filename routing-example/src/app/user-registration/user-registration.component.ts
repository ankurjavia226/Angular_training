import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  // data variables
  courses = ['B.E.', 'B.A.', 'B.Com.', 'Diploma'];
  selectedFile: File = null;

  // form variables
  userRegistrationForm: FormGroup;

  constructor (private _fb: FormBuilder,
              private _router: Router) {}

  ngOnInit() {
    this.createuserRegistrationForm();
  }

  createuserRegistrationForm = ()=>{
    this.userRegistrationForm = this._fb.group({
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      gender: ['male',Validators.required],
      email: ['',Validators.required],
      address: ['',Validators.required],
      phoneNumber: ['',Validators.required]
    });
  }

  onSubmit = () => {   
    console.log(this.userRegistrationForm.value);
    this._router.navigateByUrl('/home');
  }
  
  get firstName (){
    return this.formControls['firstName'];
  }

  get lastName (){
    return this.formControls['lastName'];
  }

  get gender () {
    return this.formControls['gender'];
  }

  get email (){
    return this.formControls['email'];
  }

  get phoneNumber (){
    return this.formControls['phoneNumber'];
  }

  get address (){
    return this.formControls['address'] ;
  }

  get formControls (){
    return this.userRegistrationForm.controls;
  }
}