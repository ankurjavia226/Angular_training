import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent, UserListComponent } from './components';
import { AllowAccessGuard } from './guard';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AllowAccessGuard]  
  },
  {
    path: 'user-list',
    component: UserListComponent,
    canActivate: [AllowAccessGuard]  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }

