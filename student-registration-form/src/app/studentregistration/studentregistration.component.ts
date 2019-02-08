import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-studentregistration',
  templateUrl: './studentregistration.component.html',
  styleUrls: ['./studentregistration.component.css']
})

export class StudentregistrationComponent implements OnInit {

  // data variables
  courses = ['B.E.', 'B.A.', 'B.Com.', 'Diploma'];
  selectedFile = [];
  file: File = null;

  // state variable
  lastAddress: Boolean = true;
  agreeWithCondition: Boolean = false;


  // form variables
  studentRegistrationForm: FormGroup;

  constructor (private _fb: FormBuilder) {}

  ngOnInit() {
    this.createStudentRegistrationForm();
    this.addAlternateAddress ();
  }

  createStudentRegistrationForm = ()=>{
    this.studentRegistrationForm = this._fb.group({
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      gender: ['',Validators.required],
      email: ['',Validators.required],
      addressList: this._fb.array([]),
      phoneNumber: ['',Validators.required],
      file:['',Validators.required],
      degree: ['',Validators.required],
      acceptTermsAndCondition: ['',Validators.required] 
    });
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

  checkAgreement = (event) => {
    this.agreeWithCondition = !event.target.checked;
  }

  onFileSelected = (event) =>{
    this.file = event.target.files[0];
    this.selectedFile.push({'Resume':this.file}); // key value [{requirekey:'profilepicture',file:file}]
    this.formControls['file'].setValue(this.file.name)
  }

  onSubmit = () => {  
    console.log(this.studentRegistrationForm.value);
    console.log(this.selectedFile);
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

  get degree (){
    return this.formControls['degree'];
  }

  get addressList (){
    return this.formControls['addressList'] as FormArray;
  }

  get formControls (){
    return this.studentRegistrationForm.controls;
  }
}