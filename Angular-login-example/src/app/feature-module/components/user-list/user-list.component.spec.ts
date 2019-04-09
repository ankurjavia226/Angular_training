import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        UserListComponent 
      ],
      imports: [
        ReactiveFormsModule,
        HttpClientModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create user-list component', () => {
    expect(component).toBeTruthy();
  });

  it('updateData function should have been called', () => {
    expect(component.updateData()).toHaveBeenCalled;
  })

  xit('loadDataInForm function should have been called', () => {
    let user;
    expect(component.loadDataInForm(user)).toHaveBeenCalled;
  })
});
