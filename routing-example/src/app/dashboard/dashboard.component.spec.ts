import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let toggleRegandLoginbtn: Boolean;
  let toggleLogoutbtn: Boolean;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        DashboardComponent 
      ],
      imports: [
        RouterTestingModule
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
    sessionStorage.setItem('data', 'asdf');
  });

  it('should create dashboard component', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle value of registratin, login and logout button when session storage has userlogin-data', () => {
    component.ngOnInit();
    fixture.detectChanges();

    expect(sessionStorage.length).toBeTruthy();
  })

  it('logOutCurrentSession function should have been called on logout button click', () => {
    expect(component.logOutCurrentSession()).toHaveBeenCalled;

    sessionStorage.clear();
    fixture.detectChanges();

    expect(sessionStorage.length).toBeFalsy();
  })
});
