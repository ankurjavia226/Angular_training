import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Component } from '@angular/core';
import { Location } from '@angular/common'
import { By } from '@angular/platform-browser';
import { text } from '@angular/core/src/render3';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let toggleRegandLoginbtn: Boolean;
  let toggleLogoutbtn: Boolean;
  let location: Location;
  //let dh: DOMHelper;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        DashboardComponent,
        dashboardDummyComponent,
        userLoginDummyComponent,
        userRegistrationDummyComponent 
      ],
      imports: [
        RouterTestingModule.withRoutes([
          {path: '', component: dashboardDummyComponent},
          {path: 'user-login', component: userLoginDummyComponent},
          {path: 'user-registration', component: userRegistrationDummyComponent},
        ])
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    toggleRegandLoginbtn = true;
    toggleLogoutbtn = false;
    sessionStorage.clear();
    location = TestBed.get(Location);
    //dh = new DOMHelper(fixture);
  });

  it('should create dashboard component', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to / when application start', () => {
    expect(location.path()).toBe('');
  });

  it('should navigate to /user-registration when registration button clicked', () => {
    const button = fixture.debugElement.queryAll(By.css('button'));
    const registrationBtn: HTMLButtonElement = button[0].nativeElement;
    registrationBtn.click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(location.path()).toBe('/user-registration');
    })
  });

  it('should navigate to /user-login when login button clicked', () => {
    const button = fixture.debugElement.queryAll(By.css('button'));
    const loginBtn: HTMLButtonElement = button[1].nativeElement;
    //dh.text('button'));
    loginBtn.click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(location.path()).toBe('/user-login');
    })
  });

  it('logOutCurrentSession function should have been called on logout button click', () => {
    sessionStorage.setItem('Data', 'asd');

    const button = fixture.debugElement.queryAll(By.css('button'));
    const logoutBtn: HTMLButtonElement = button[0].nativeElement;
    logoutBtn.click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.logOutCurrentSession()).toHaveBeenCalled;
      //expect(location.path()).toBe('');
    })
  })
});

@Component({template:''})
class dashboardDummyComponent {}

@Component({template:''})
class userLoginDummyComponent {}

@Component({template:''})
class userRegistrationDummyComponent {}

// class DOMHelper {
//   private fixture: ComponentFixture<DashboardComponent>
//   constructor(fixtur: ComponentFixture<DashboardComponent>){
//     this.fixture = fixtur;
//   }

//   text(tagName: string): string{
//     const element = this.fixture.debugElement.query(By.css(tagName));
//     if(element){
//       return element.nativeElement.textContent;
//     }
//   }
// }