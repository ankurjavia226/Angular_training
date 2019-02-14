import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { UserLoginComponent } from './component/user-login/user-login.component';
import { UserRegistrationComponent } from './component/user-registration/user-registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { NavigationMenuComponent } from './component/navigation-menu/navigation-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutUsComponent,
    HomeComponent,
    ContactUsComponent,
    UserLoginComponent,
    UserRegistrationComponent,
    NavigationMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
