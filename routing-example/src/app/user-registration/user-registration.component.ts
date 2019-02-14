import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators, FormBuilder, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { passwordValidator } from '../shared/password.validator';
import { checkLocalStorage } from '../shared/localStorageData';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  // data variables
  courses = ['B.E.', 'B.A.', 'B.Com.', 'Diploma'];
  selectedFile: File = null;
  datakey: string = 'UserData';
  userDetailArray = [];

  // state variable
  lastAddress: Boolean = true;

  // form variables
  userRegistrationForm: FormGroup;

  constructor (private _fb: FormBuilder,
              private _router: Router) {}

  ngOnInit() {
    this.createuserRegistrationForm();
    this.addAlternateAddress();
  }

  createuserRegistrationForm = ()=>{
    this.userRegistrationForm = this._fb.group({
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      gender: ['male',Validators.required],
      email: ['',Validators.required],
      password: [''],
      confirmPassword: [''],
      addressList: this._fb.array([]),
      phoneNumber: ['',[Validators.required,
                        Validators.pattern('^[1-9]{1}[0-9]{9}$')]]
    }, {validators: passwordValidator});
  }

  addAlternateAddress =  () => {
    this.addressList.push(this._fb.control('',Validators.required));
    if(this.addressList.length > 1){
      this.lastAddress = false;
    }  
  }

  removeAddress = (index) => { 
      this.addressList.removeAt(index);
      this.lastAddress = this.addressList.length === 1;
  }

  onSubmit = () => {
    this.userDetailArray = checkLocalStorage();
    this.userDetailArray.push(this.userRegistrationForm.value);

    let userArrayString = JSON.stringify(this.userDetailArray);
    localStorage.setItem(this.datakey,userArrayString);

    this._router.navigateByUrl('');
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

  get addressList (){
    return this.formControls['addressList'] as FormArray;
  }

  get formControls (){
    return this.userRegistrationForm.controls;
  }
}