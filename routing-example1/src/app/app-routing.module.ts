import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './component/user-login/user-login.component';
import { UserRegistrationComponent } from './component/user-registration/user-registration.component';
import { HomeComponent } from './component/header-component/home/home.component';
import { AboutUsComponent } from './component/header-component/about-us/about-us.component';
import { ContactUsComponent } from './component/header-component/contact-us/contact-us.component';
import { LoginActivateGuard } from './guard/login-activate.guard';
import { AllowAccessGuard } from './guard/allow-access.guard';

const routes: Routes = [
  {path: 'home', component: HomeComponent, canActivate: [AllowAccessGuard]}, 
  {path: 'about-us', component: AboutUsComponent, canActivate: [AllowAccessGuard]},
  {path: 'contact-us', component: ContactUsComponent, canActivate: [AllowAccessGuard]},
  {path: 'user-login', component: UserLoginComponent, canActivate: [LoginActivateGuard]},
  {path: 'user-registration', component: UserRegistrationComponent, canActivate: [LoginActivateGuard]},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 