import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegistrationComponent } from './user-registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('UserRegistrationComponent', () => {
  let component: UserRegistrationComponent;
  let fixture: ComponentFixture<UserRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        UserRegistrationComponent 
      ],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create user-registration component', () => {
    expect(component).toBeTruthy();
  });

  it('onSubmit function should have been called', () => {
    expect(component.onSubmit()).toHaveBeenCalled;
  });

  it('removeAddress function should have been called', () => {
    let index: number;
    expect(component.removeAddress(index)).toHaveBeenCalled;
  })
});
