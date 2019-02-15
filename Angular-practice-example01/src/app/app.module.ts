import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth module/auth.module';
import { HeaderComponent } from './components/header-components/header/header.component';
import { HomeComponent } from './components/header-components/home/home.component';
import { AboutUsComponent } from './components/header-components/about-us/about-us.component';
import { ContactUsComponent } from './components/header-components/contact-us/contact-us.component';
import { AuthRoutingModule } from './auth module/auth-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    AuthRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }