import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent, RegisterComponent } from './components';
import { LoginActivateGuard } from './guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    canActivate: [LoginActivateGuard]  
  },
  {
    path: 'registration',
    component: RegisterComponent,
    canActivate: [LoginActivateGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
