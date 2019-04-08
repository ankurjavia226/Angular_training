import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { StudentregistrationComponent } from './studentregistration/studentregistration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Component } from '@angular/core';

describe('AppComponent', () => {
  let fixture;
  let app;
  let title = 'Student Registration Form';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule
      ],
      declarations: [
        AppComponent,
        StudentregistrationComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app =  fixture.debugElement.componentInstance;
  })

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });
});
