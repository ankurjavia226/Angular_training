import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './shared module component/header/header.component';
import { sharedRoutingModule } from './shared-routing.module';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    sharedRoutingModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class SharedModule { }
