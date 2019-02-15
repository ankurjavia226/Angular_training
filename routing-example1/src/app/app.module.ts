import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './component/user-login/user-login.component';
import { UserRegistrationComponent } from './component/user-registration/user-registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './shared/component/header/header.component';
import { AboutUsComponent } from './component/header-component/about-us/about-us.component';
import { HomeComponent } from './component/header-component/home/home.component';
import { ContactUsComponent } from './component/header-component/contact-us/contact-us.component';
import { LoginActivateGuard } from './guard/login-activate.guard';
import { AuthService } from './service/auth.service';
import { AllowAccessGuard } from './guard/allow-access.guard';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutUsComponent,
    HomeComponent,
    ContactUsComponent,
    UserLoginComponent,
    UserRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, LoginActivateGuard, AllowAccessGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
