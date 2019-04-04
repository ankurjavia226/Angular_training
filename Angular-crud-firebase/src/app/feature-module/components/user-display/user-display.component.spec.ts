import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDisplayComponent } from './user-display.component';
import { AppComponent } from 'src/app/app.component';
import { UserComponent } from '../user/user.component';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment.prod';
import { APP_BASE_HREF } from '@angular/common';
import { UserService } from 'src/app/_shared/services';

describe('UserDisplayComponent', () => {
  let component: UserDisplayComponent;
  let service: UserService;
  let fixture: ComponentFixture<UserDisplayComponent>;

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
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDisplayComponent);
    component = fixture.componentInstance;
    service = TestBed.get(UserService);
    component.ngOnInit();
  });

  it('create component', () => {
    expect(component).toBeTruthy();
  });

  it('updateUser', () => {
    expect(component.updateUser({})).toHaveBeenCalled;
  })

  it('removeUser', () => {
    const spy = spyOn(service, 'deleteUser');

    expect(component.removeUser(1)).toHaveBeenCalled;
    expect(spy).toHaveBeenCalled;
  });
});
