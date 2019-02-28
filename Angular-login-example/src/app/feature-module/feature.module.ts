import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { HomeComponent } from './components';
import { UserListComponent } from './components/user-list/user-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, UserListComponent],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    ReactiveFormsModule
  ]
})
export class FeatureModule { }