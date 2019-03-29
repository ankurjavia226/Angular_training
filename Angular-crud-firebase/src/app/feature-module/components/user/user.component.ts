import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/_shared/services';
import { ToastrService } from 'ngx-toastr';
import { Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() updateData;
  registrationForm: FormGroup;

  constructor(private _fb: FormBuilder,
              private _userService: UserService,
              private _toaster: ToastrService) { }

  ngOnInit() {
    this.createRegistrationForm();
  }

  ngOnChanges(){
    if(this.updateData) 
      this.updateForm(this.updateData);
  }

  updateForm(data){
    this.registrationForm.patchValue({
      name: data.name,
      email: data.email,
      phoneNo: data.phoneNo,
      city: data.city
    });


  }

  createRegistrationForm() {
    this.registrationForm = this._fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phoneNo: ['', Validators.required],
      city: ['', Validators.required]
    });
  }

  submitForm(){
    if(this.updateData){
      this.updateUser();
    }
    else{
      this.addNewUser();
    }
  }

  addNewUser(){
    this._userService.createUser(this.registrationForm.value);
    this._toaster.success('User Added Sucessfully.');
    this.registrationForm.reset();
  }

  updateUser(){
    this._userService.updateUser(this.updateData.id, this.registrationForm.value);
    this.registrationForm.reset();
  }

  get name (){
    return this.formControls['name'];
  }

  get email (){
    return this.formControls['email'];
  }

  get phoneNo (){
    return this.formControls['phoneNo']; 
  }

  get city (){
    return this.formControls['city'];
  }

  get formControls (){
    return this.registrationForm.controls;
  }
}
