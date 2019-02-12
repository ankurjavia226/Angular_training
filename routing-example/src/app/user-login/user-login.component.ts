import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  // Form variable
  userLoginForm: FormGroup;

  //data variables
  datakey: string = 'UserData';
  userDetailArray = [];

  //state variable
  verifyUser: Boolean = false;

  constructor(private _fb: FormBuilder,
              private _router: Router) { }

  ngOnInit() {
    this.userLogin();
  }

  userLogin = () => {
    this.userLoginForm = this._fb.group({
      userName: ['',Validators.required],
      password: ['',Validators.required]
    });
  }

  onSubmit = () => {
    this.userDetailArray = this.checkLocalStorage();
    
    for(let i=0; i<this.userDetailArray.length; i++){
      if(this.userDetailArray[i].email == this.userLoginForm.value.userName && 
          this.userDetailArray[i].password == this.userLoginForm.value.password){
            this._router.navigateByUrl('/about');
            this.verifyUser = true;
      }
    }

    if(!this.verifyUser){
      alert('Please enter correct cradential.!');
    }
  }

  checkLocalStorage = () => {
    let currentData = [];
    if(localStorage.getItem(this.datakey)){
      currentData = JSON.parse(localStorage.getItem(this.datakey))
    }
    return currentData;
  }

  get userName() {
    return this.formControls['userName'];
  }

  get password() {
    return this.formControls['password'];
  }

  get formControls() {
    return this.userLoginForm.controls;
  }
}
