import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { UserComponent, UserDisplayComponent } from './feature-module/components';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';
import { UserService } from './_shared/services';
import { APP_BASE_HREF } from '@angular/common';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let dataForUpdate: String;

  beforeEach(async() => {
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
        AngularFireModule.initializeApp(environment.firebse),
        AngularFirestoreModule 
      ],
      providers: [AngularFirestore, 
                  {provide: APP_BASE_HREF, useValue: '/'}, 
                  UserService],
    }).compileComponents();
  });

  beforeEach(() => {
    dataForUpdate = '';
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  })

  it('should create the appcomponent', () => {
    expect(component).toBeTruthy();
  });
  
  it('getData function', () => {
    expect(component.getData('$event')).toHaveBeenCalled;
  })
});
