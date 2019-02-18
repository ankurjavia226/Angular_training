import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const sharedRoute: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(sharedRoute)],
  exports: [RouterModule]
})
export class sharedRoutingModule { }