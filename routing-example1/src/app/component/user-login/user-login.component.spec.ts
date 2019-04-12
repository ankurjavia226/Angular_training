import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLoginComponent } from './user-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('UserLoginComponent', () => {
  let component: UserLoginComponent;
  let fixture: ComponentFixture<UserLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        RouterTestingModule
      ],
      declarations: [ 
        UserLoginComponent 
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create user-login component', () => {
    expect(component).toBeTruthy();
  });

  xit('should navigate to about component if login sucess onSubmit ', () => {
    component.userLoginForm.setValue({userName: 'asda', password: 'asdf'});
    const router = TestBed.get(Router);
    spyOn(router, 'navigateByUrl');
    const button = fixture.debugElement.query(By.css('button'));
    const loginBtn: HTMLButtonElement = button.nativeElement;
    loginBtn.click();
    expect(router.navigateByUrl).
      toHaveBeenCalledWith(router.createUrlTree(['/user-login']),
      {skipLocationChange: false, replaceUrl: false});
  });

  it('onSubmit should have been called', () => {
    expect(component.onSubmit()).toHaveBeenCalled;
  });

});