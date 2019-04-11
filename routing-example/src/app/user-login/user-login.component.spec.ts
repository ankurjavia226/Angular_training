import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { UserLoginComponent } from './user-login.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Location } from '@angular/common'
import { By } from '@angular/platform-browser';
import { debug } from 'util';

describe('UserLoginComponent', () => {
  let component: UserLoginComponent;
  let fixture: ComponentFixture<UserLoginComponent>;
  let router: Router;
  let location: Location;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        UserLoginComponent,
        DashboardComponent,
        userLoginDummyComponent,
        aboutDummyComponent
      ],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([
          {path: 'user-login', component: userLoginDummyComponent},
          {path: 'about', component: aboutDummyComponent},
        ])
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLoginComponent);
    component = fixture.componentInstance;
    sessionStorage.clear();
    location = TestBed.get(Location);
    // router = TestBed.get(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to about component if login sucess onSubmit ', () => {   
    const button = fixture.debugElement.queryAll(By.css('button'));
    const loginBtn: HTMLButtonElement = button[1].nativeElement;
    loginBtn.click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(location.path()).toBe('/user-login');

      component.userLoginForm.setValue({userName: 'asda', password: 'asdf'});
      const button = fixture.debugElement.queryAll(By.css('button'));
      const loginBtn: HTMLButtonElement = button[2].nativeElement;
      loginBtn.click();
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(component.onSubmit()).toHaveBeenCalled();
        expect(location.path()).toBe('/about');
      })
    })

    //let spy = spyOn(router, 'navigateByUrl');
    //component.onSubmit();
    //expect(spy).toHaveBeenCalledWith('/about');
    // router.navigate(["/about"]).then(() => {
    //   expect(location.path()).toBe("/about");
    // });
  });
});

@Component({template:''})
class userLoginDummyComponent {}

@Component({template:''})
class aboutDummyComponent {}
