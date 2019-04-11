import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLoginComponent } from './user-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Component } from '@angular/core';

describe('UserLoginComponent', () => {
  let component: UserLoginComponent;
  let fixture: ComponentFixture<UserLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([
          {path: 'user-login', component: userLoginDummyComponent},
          {path: 'user-registration', component: userRegistrationDummyComponent},
          {path: 'about-us', component: AbouUsDummyComponent},
        ])
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

  it('onSubmit should have been called', () => {
    expect(component.onSubmit()).toHaveBeenCalled;
  });
});

@Component({template:''})
class AbouUsDummyComponent {}

@Component({template:''})
class userLoginDummyComponent {}

@Component({template:''})
class userRegistrationDummyComponent {}

