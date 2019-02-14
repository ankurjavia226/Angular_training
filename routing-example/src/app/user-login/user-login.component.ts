import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { checkLocalStorage } from '../shared/localStorageData';

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
    this.userDetailArray = checkLocalStorage();
    
    for(let i=0; i<this.userDetailArray.length; i++){
      if(this.userName.value == this.userDetailArray[i].email && 
          this.password.value == this.userDetailArray[i].password){

            sessionStorage.setItem('loggedinUser',this.userName.value);
            this._router.navigateByUrl('/about');
      }
    }

    if(!sessionStorage.length){
      alert('Please enter correct cradential.!');
    }
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