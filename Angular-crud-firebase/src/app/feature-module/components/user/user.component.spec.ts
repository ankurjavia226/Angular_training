import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { AppComponent } from 'src/app/app.component';
import { UserDisplayComponent } from '../user-display/user-display.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment.prod';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';
import { UserService } from 'src/app/_shared/services';
import { APP_BASE_HREF } from '@angular/common';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/_shared/model';

describe('UserComponent', () => {
  let component: UserComponent;
  let service: UserService;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        UserComponent,
        UserDisplayComponent
      ],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
        AppRoutingModule,
        ReactiveFormsModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule 
      ],
      providers: [AngularFirestore, 
                  {provide: APP_BASE_HREF, useValue: '/'}, 
                  UserService],
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    service = TestBed.get(UserService);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.ngOnInit();
    component.ngOnChanges();
  });

  it('create component', () => {
    expect(component).toBeTruthy();
  });

  it('createRegistrationForm function call', () => {
    expect(component.createRegistrationForm()).toHaveBeenCalled;
  });

  it('form group should have 4 controls & should be invalid when empty', () => {
    expect(component.registrationForm.contains('name')).toBeTruthy();
    expect(component.registrationForm.contains('email')).toBeTruthy();
    expect(component.registrationForm.contains('phoneNo')).toBeTruthy();
    expect(component.registrationForm.contains('city')).toBeTruthy();

    expect(component.registrationForm.valid).toBeFalsy();
  });

  it('form group control should be required', () => {
    let name = component.registrationForm.get('name');
    let email = component.registrationForm.get('email');
    let phoneNo = component.registrationForm.get('phoneNo');
    let city = component.registrationForm.get('city');

    name.setValue('');
    email.setValue('');
    phoneNo.setValue('');
    city.setValue('');

    expect(name.valid).toBeFalsy();
    expect(email.valid).toBeFalsy();
    expect(phoneNo.valid).toBeFalsy();
    expect(city.valid).toBeFalsy();
  });

  it('updateForm function should have been called with data & patch data into form', () => {
    expect(component.updateData).not.toBeUndefined;

    expect(component.updateForm).toHaveBeenCalled;
    expect(component.registrationForm.patchValue).toBeTruthy();
  })

  it('submitForm function', () => {
    expect(component.submitForm()).toHaveBeenCalled;
  })

  it('addNewUser function', () => {
    const spy = spyOn(service, 'createUser').and.callFake;
    component.addNewUser();
    expect(spy).toHaveBeenCalled;
    expect(component.registrationForm.reset).toBeTruthy();
  })

  it('updateUser function', () => {
    let spy = spyOn(service, 'updateUser').and.callFake(() => {
      return Observable;
    });
    
    expect(component.updateData).not.toBeUndefined;
    expect(spy).toHaveBeenCalled;
    expect(component.registrationForm.reset).toBeTruthy();
  })
});
