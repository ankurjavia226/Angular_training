import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/component/header/header.component';
import { AboutUsComponent } from './component/header-component/about-us/about-us.component';
import { HomeComponent } from './component/header-component/home/home.component';
import { ContactUsComponent } from './component/header-component/contact-us/contact-us.component';
import { UserLoginComponent } from './component/user-login/user-login.component';
import { UserRegistrationComponent } from './component/user-registration/user-registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
        AboutUsComponent,
        HomeComponent,
        ContactUsComponent,
        UserLoginComponent,
        UserRegistrationComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
