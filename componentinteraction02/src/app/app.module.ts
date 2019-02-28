import {NgModule}           from '@angular/core';
import {BrowserModule}      from '@angular/platform-browser';
import { ChildOneComponent } from './childone.component';
import { ChildTwoComponent } from './childtwo.component';
import { ParentComponent } from './parent.component';
@NgModule({
  imports:      [BrowserModule],
  declarations: [ParentComponent, 
                 ChildOneComponent,
		             ChildTwoComponent],
  bootstrap:    [ParentComponent]
})
export class AppModule { } 