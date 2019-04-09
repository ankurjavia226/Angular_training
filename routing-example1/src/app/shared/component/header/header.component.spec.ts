import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ 
        HeaderComponent 
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('logOutCurrentSession function should remove data stored in session storage', () => {
    sessionStorage.setItem('data', 'asdf');
    expect(component.logOutCurrentSession()).toHaveBeenCalled;

    sessionStorage.clear;
    fixture.detectChanges();

    expect(sessionStorage.length).not.toBeTruthy;
  })
});
