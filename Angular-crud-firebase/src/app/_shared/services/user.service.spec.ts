import { TestBed, async } from '@angular/core/testing';

import { UserService } from './user.service';
import { AppComponent } from 'src/app/app.component';
import { UserComponent, UserDisplayComponent } from 'src/app/feature-module/components';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';
import { APP_BASE_HREF } from '@angular/common';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async(() => TestBed.configureTestingModule({
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
                {provide: APP_BASE_HREF, useValue: '/'}, 
                UserService],
  })));

  beforeAll(() => {
    service = TestBed.get(UserService);
  })
});
