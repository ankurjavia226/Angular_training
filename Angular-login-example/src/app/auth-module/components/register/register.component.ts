import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UsermanagementService } from 'src/app/feature-module/services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // data variables
  localstorageDataKey: string = 'UserData';
  userDetailArray = [];
  userArrayString;

  // form variables
  userRegistrationForm: FormGroup;

  constructor (private _fb: FormBuilder,
              private _router: Router,
              private _userManagementService: UsermanagementService) {}

  ngOnInit() {
    this.createuserForm();
  }

  createuserForm = ()=>{
    this.userRegistrationForm = this._fb.group({
      name: ['',Validators.required],
      job: ['',Validators.required]
    })
  }

  onSubmit = () => {
    this.userDetailArray.push(this.userRegistrationForm.value);
    this.userArrayString = JSON.stringify(this.userDetailArray);

    this.addNewUser();
    this._router.navigateByUrl('');
  }

  addNewUser(){
    this._userManagementService.createUser(this.userArrayString)
          .subscribe(res => alert('User Registered Sucessfully.'));
  }

  get name (){
    return this.formControls['name'];
  }

  get job (){
    return this.formControls['job'];
  }

  get formControls (){
    return this.userRegistrationForm.controls;
  }
}