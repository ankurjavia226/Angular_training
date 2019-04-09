import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/header-components/home/home.component';
import { ContactUsComponent } from './components/header-components/contact-us/contact-us.component';
import { AboutUsComponent } from './components/header-components/about-us/about-us.component';
import { SharedModule } from './shared module/shared.module';
import { AuthModule } from './auth module/auth.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HomeComponent,
        AboutUsComponent,
        ContactUsComponent
      ],
      imports: [
        RouterTestingModule,
        AuthModule,
        SharedModule
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
