import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './auth module component/user-login/user-login.component';
import { UserRegistrationComponent } from './auth module component/user-registration/user-registration.component';
import { LoginActivateGuard } from './auth module guard/login-activate.guard';

const secondaryRoutes: Routes = [
  {
    path: 'user-login',
    component: UserLoginComponent,
    canActivate: [LoginActivateGuard]
  },
  {
    path: 'user-registration',
    component: UserRegistrationComponent,
    canActivate: [LoginActivateGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(secondaryRoutes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }