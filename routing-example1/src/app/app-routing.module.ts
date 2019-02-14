import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { UserLoginComponent } from './component/user-login/user-login.component';
import { UserRegistrationComponent } from './component/user-registration/user-registration.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { HeaderComponent } from './component/header/header.component';

const routes: Routes = [
  {path: ' ', redirectTo:'/header'}, 
  {path: 'about-us', component: AboutUsComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'user-login', component: UserLoginComponent},
  {path: 'user-registration', component: UserRegistrationComponent},
  {path: '**', redirectTo: '/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }