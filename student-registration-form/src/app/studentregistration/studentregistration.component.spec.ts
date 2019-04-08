import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentregistrationComponent } from './studentregistration.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('StudentregistrationComponent', () => {
  let component: StudentregistrationComponent;
  let fixture: ComponentFixture<StudentregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule
      ],
      declarations: [
        StudentregistrationComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('removeAddress function should remove the selected address', () => {
    expect(component.removeAddress(89045)).toHaveBeenCalled;
  })

  it('onSubmit function should have been called', () => {
    expect(component.onSubmit()).toHaveBeenCalled;
  })
});
