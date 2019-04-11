import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

describe('AppComponent', () => {
  let fixture;
  let app;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    app.ngOnInit();
  })

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(app.registrationForm.valid).toBeFalsy();
  });

  it('userName field validity', () => {
    let errors = {};
    let userName = app.registrationForm.controls['userName'];
    expect(userName.valid).toBeFalsy();

    // firstName field is required
    errors = userName.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('email field validity', () => {
    let errors = {};
    let email = app.registrationForm.controls['email'];
    expect(email.valid).toBeTruthy();
  });

  it('subscribe field validity', () => {
    let errors = {};
    let subscribe = app.registrationForm.controls['subscribe'];
    expect(subscribe.valid).toBeTruthy();
  });

  it('password field validity', () => {
    let errors = {};
    let password = app.registrationForm.controls['password'];
    expect(password.valid).toBeTruthy();
  });

  it('email field validity', () => {
    let errors = {};
    let email = app.registrationForm.controls['email'];
    expect(email.valid).toBeTruthy();
  });

  it('confirmPassword field validity', () => {
    let errors = {};
    let confirmPassword = app.registrationForm.controls['confirmPassword'];
    expect(confirmPassword.valid).toBeTruthy();
  });
  
  it('addAlternateEmail function should have been called', () => {
    expect(app.addAlternateEmail()).toHaveBeenCalled;
  });

  it('loadApiData should have been called', () => {
    let spy = spyOn(app, 'loadApiData').and.callFake;
    expect(spy).toHaveBeenCalled;
  });

  it('onSubmit should have been called', () => {
    expect(app.onSubmit()).toHaveBeenCalled;
  })

});
