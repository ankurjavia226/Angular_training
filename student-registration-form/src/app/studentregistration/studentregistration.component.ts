import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-studentregistration',
  templateUrl: './studentregistration.component.html',
  styleUrls: ['./studentregistration.component.css']
})

export class StudentregistrationComponent implements OnInit {

  courses = ['B.E.', 'B.A.', 'B.Com.', 'Diploma'];
  degreeHasError: Boolean = true;
  agreeWithCondition: Boolean = false;
  selectedFile: File = null;
  studentRegistrationForm: FormGroup;
  studentData = null;

  constructor (private fb: FormBuilder, private cd: ChangeDetectorRef) {}

  get firstName (){
    return this.studentRegistrationForm.get('firstName');
  }

  get lastName (){
    return this.studentRegistrationForm.get('lastName');
  }

  get gender () {
    return this.studentRegistrationForm.get('gender');
  }

  get email (){
    return this.studentRegistrationForm.get('email');
  }

  get address (){
    return this.studentRegistrationForm.get('address');
  }

  get phoneNumber (){
    return this.studentRegistrationForm.get('phoneNumber');
  }

  get degree (){
    return this.studentRegistrationForm.get('degree');
  }

  ngOnInit() {
    this.studentRegistrationForm = this.fb.group({
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      gender: ['',Validators.required],
      email: ['',Validators.required],
      address: ['',Validators.required],
      phoneNumber: ['',Validators.required],
      degree: ['',Validators.required],
      file: [null,Validators.required],
      acceptTermsAndCondition: ['',Validators.required] 
    });
  }

  checkAgreement(event){
    this.agreeWithCondition = !event.target.checked;
  }

  checkDegree(value){
      this.degreeHasError = value === 'default'; 
  }

  onFileSelected(event) {
    //this.selectedFile = file.item(0);
    const reader = new FileReader();
    const [file] = event.target.files;

    reader.readAsDataURL(file);

    reader.onload = () => {
      this.studentRegistrationForm.patchValue({
        file: reader.result
      });

      this.cd.markForCheck();
    };
  }

  onSubmit() {
    this.studentData = this.studentRegistrationForm.value; 
    console.log(this.studentData);
  }
}