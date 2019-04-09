import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegistrationComponent } from './user-registration.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('UserRegistrationComponent', () => {
  let component: UserRegistrationComponent;
  let fixture: ComponentFixture<UserRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ 
        RouterTestingModule,
        ReactiveFormsModule
      ],
      declarations: [ 
        UserRegistrationComponent
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

  it('onSubmit should have been called', () => {
    expect(component.onSubmit()).toHaveBeenCalled;
  });

  it('removeAddress should have been called', () => {
    let index: number;
    expect(component.removeAddress(index)).toHaveBeenCalled;
  })
});
