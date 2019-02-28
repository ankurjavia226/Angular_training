import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserauthenticationService } from '../../services';
import { UsermanagementService } from 'src/app/feature-module/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // Form variable
  userLoginForm: FormGroup;

  constructor(private _fb: FormBuilder,
              private _router: Router,
              private _userManagementService: UsermanagementService,
              private _userAuthenticateService: UserauthenticationService) { }

  ngOnInit() {
    this.userLogin();
  } 

  userLogin = () => {
    this.userLoginForm = this._fb.group({
      email: ['asda',Validators.required],
      password: ['asdf',Validators.required]
    });
  }

  onSubmit = () => {
    this._userManagementService.setUser(this.email.value);
    this._userAuthenticateService.authenticateUser(this.userLoginForm.value)
          .subscribe(res => {
            this._router.navigateByUrl('/home'); 
          });
     
  }

  get email() {
    return this.formControls['email'];
  }

get password() {
    return this.formControls['password'];
  }
 
  get formControls() {
    return this.userLoginForm.controls;
  }
}
