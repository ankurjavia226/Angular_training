import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule  } from '@angular/fire/database';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { UserComponent, UserDisplayComponent } from './feature-module/components';
import { AngularFirestore,FirestoreSettingsToken, AngularFirestoreModule } from '@angular/fire/firestore';
import { UserService } from './_shared/services';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserDisplayComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebse),
    AngularFirestoreModule 
  ],
  providers: [AngularFirestore, 
              { provide: FirestoreSettingsToken, useValue: {} }, 
              UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
