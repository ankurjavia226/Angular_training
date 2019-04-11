import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentregistrationComponent } from './studentregistration.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('StudentregistrationComponent', () => {
  let component: StudentregistrationComponent;
  let fixture: ComponentFixture<StudentregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule
      ],
      declarations: [
        StudentregistrationComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.studentRegistrationForm.valid).toBeFalsy();
  });

  it('firstName field validity', () => {
    let errors = {};
    let firstName = component.studentRegistrationForm.controls['firstName'];
    expect(firstName.valid).toBeFalsy();

    // firstName field is required
    errors = firstName.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('lastName field validity', () => {
    let errors = {};
    let lastName = component.studentRegistrationForm.controls['lastName'];
    expect(lastName.valid).toBeFalsy();

    // lastName field is required
    errors = lastName.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('gender field validity', () => {
    let errors = {};
    let gender = component.studentRegistrationForm.controls['gender'];
    expect(gender.valid).toBeFalsy();

    // gender field is required
    errors = gender.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('email field validity', () => {
    let errors = {};
    let email = component.studentRegistrationForm.controls['email'];
    expect(email.valid).toBeFalsy();

    // email field is required
    errors = email.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('file field validity', () => {
    let errors = {};
    let file = component.studentRegistrationForm.controls['file'];
    expect(file.valid).toBeFalsy();

    // file field is required
    errors = file.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('phoneNumber field validity', () => {
    let errors = {};
    let phoneNumber = component.studentRegistrationForm.controls['phoneNumber'];
    expect(phoneNumber.valid).toBeFalsy();

    // phoneNumber field is required
    errors = phoneNumber.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('degree field validity', () => {
    let errors = {};
    let degree = component.studentRegistrationForm.controls['degree'];
    expect(degree.valid).toBeFalsy();

    // degree field is required
    errors = degree.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('acceptTermsAndCondition field validity', () => {
    let errors = {};
    let acceptTermsAndCondition = component.studentRegistrationForm.controls['acceptTermsAndCondition'];
    expect(acceptTermsAndCondition.valid).toBeFalsy();

    // acceptTermsAndCondition field is required
    errors = acceptTermsAndCondition.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('onSubmit function should have been called', () => {  
    expect(component.studentRegistrationForm.valid).toBeFalsy();

    component.studentRegistrationForm.controls['firstName'].setValue("Ankur");
    component.studentRegistrationForm.controls['lastName'].setValue("Javia");
    component.studentRegistrationForm.controls['gender'].setValue("male");
    component.studentRegistrationForm.controls['email'].setValue("arjavia@gmail.com");
    component.studentRegistrationForm.controls['addressList'].setValue([ "5 Hari om bunglow\nnear podar school" ]);
    component.studentRegistrationForm.controls['phoneNumber'].setValue(9408239141);
    component.studentRegistrationForm.controls['file'].setValue("Ankur Javia.pdf");
    component.studentRegistrationForm.controls['degree'].setValue("B.E.");
    component.studentRegistrationForm.controls['acceptTermsAndCondition'].setValue(true);

    expect(component.studentRegistrationForm.valid).toBeTruthy();
    expect(component.onSubmit()).toHaveBeenCalled;
  });

  it('removeAddress function should remove the selected address', () => {
    expect(component.removeAddress(0)).toHaveBeenCalled;
  });

});
