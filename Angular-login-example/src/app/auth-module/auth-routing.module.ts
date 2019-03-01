import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent, RegisterComponent } from './components';
import { PublicGuard } from '../_guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    canActivate: [PublicGuard]  
  },
  {
    path: 'registration',
    component: RegisterComponent,
    canActivate: [PublicGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
