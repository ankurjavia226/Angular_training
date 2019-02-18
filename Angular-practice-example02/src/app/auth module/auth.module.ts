import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './auth module component/user-login/user-login.component';
import { UserRegistrationComponent } from './auth module component/user-registration/user-registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared module/shared.module';

@NgModule({
  declarations: [
    UserLoginComponent,
    UserRegistrationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    SharedModule
  ],
  exports: [ ]
})
export class AuthModule { }