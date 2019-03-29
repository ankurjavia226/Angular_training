import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent, UserDisplayComponent } from './feature-module/components';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, AngularFirestore, FirestoreSettingsToken } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { UserService } from './_shared/services';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserDisplayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule 
  ],
  providers: [AngularFirestore, 
              { provide: FirestoreSettingsToken, useValue: {} }, 
              UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
