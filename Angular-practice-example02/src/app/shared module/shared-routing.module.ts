import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './shared module component/header/header.component';

const sharedRoute: Routes = [
  {
    path: '', 
    redirectTo: '/HeaderComponent',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(sharedRoute)],
  exports: [RouterModule]
})
export class sharedRoutingModule { }