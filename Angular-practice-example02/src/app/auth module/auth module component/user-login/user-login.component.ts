import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { checkLocalStorage } from '../../../shared module/storage data info/localStorageData';
import { AuthService } from '../../../auth module/auth module service/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  // Form variable
  userLoginForm: FormGroup;

  //data variables
  sessionstorageDataKey: string = 'loggedinUser';
  userDetailArray = [];

  constructor(private _fb: FormBuilder,
              private _router: Router,
              private _auth: AuthService) { }

  ngOnInit() {
    this.userLogin();
  }

  userLogin = () => {
    this.userLoginForm = this._fb.group({
      userName: ['asda',Validators.required],
      password: ['asdf',Validators.required]
    });
  }

  onSubmit = () => {
    this.userDetailArray = checkLocalStorage();

    for(let i=0; i<this.userDetailArray.length; i++){
      if(this.userName.value == this.userDetailArray[i].email && 
          this.password.value == this.userDetailArray[i].password){

            sessionStorage.setItem(this.sessionstorageDataKey,this.userName.value);
            this._auth.setLoggedIn(true);
            this._router.navigateByUrl('/about-us'); 
            return;
      }
    }

    if(!sessionStorage.getItem(this.sessionstorageDataKey)){
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