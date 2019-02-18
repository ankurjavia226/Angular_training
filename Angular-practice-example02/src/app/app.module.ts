import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth module/auth.module';
import { HomeComponent } from './components/header-components/home/home.component';
import { AboutUsComponent } from './components/header-components/about-us/about-us.component';
import { ContactUsComponent } from './components/header-components/contact-us/contact-us.component';
import { SharedModule } from './shared module/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }