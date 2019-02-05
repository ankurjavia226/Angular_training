import { Component, OnInit } from '@angular/core';  
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { forbiddenNameValidator } from './shared/user-name.validator';
import { passwordValidator } from './shared/password.validator';
import { RegistrationService } from './registration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  registrationForm: FormGroup;

  get userName (){
    return this.registrationForm.get('userName');
  }

  get email (){
    return this.registrationForm.get('email');
  }

  get alternateEmails (){
    return this.registrationForm.get('alternateEmails') as FormArray;
  }

  addAlternateEmail() {
    this.alternateEmails.push(this.fb.control(''));
  }

  constructor(private fb: FormBuilder, private _registrationService: RegistrationService) { }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      userName: ['',[Validators.required, Validators.minLength(3), forbiddenNameValidator(/admin/)]],
      email: [''],
      subscribe: [false],
      password: [''],
      confirmPassword: [''],
      address: this.fb.group({
        city: [''],
        state: [''],
        postalCode: ['']
      }),
      alternateEmails: this.fb.array([])
    }, {validators: passwordValidator});

    this.registrationForm.get('subscribe').valueChanges
      .subscribe( checkValue => {
        const email = this.registrationForm.get('email');
        if(checkValue){
          email.setValidators(Validators.required);
        }
        else {
          email.clearValidators();
        }
        email.updateValueAndValidity();
      })
  }
  
  loadApiData() {
    this.registrationForm.patchValue({
      userName: 'Ankur',
      password: 'asdf',
      confirmPassword: 'asdf'
    });
  }

  onSubmit(){
    this._registrationService.register(this.registrationForm.value)
      .subscribe(
        response => console.log(response),
        error => console.error('Error', error)        
      );
  }
}
