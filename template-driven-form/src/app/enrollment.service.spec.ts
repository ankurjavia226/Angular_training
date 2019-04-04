import { TestBed, async } from '@angular/core/testing';

import { EnrollmentService } from './enrollment.service';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { AppComponent } from './app.component';
import { User } from './user';
import { observable, throwError, Observable } from 'rxjs';
import { errorHandler } from '@angular/platform-browser/src/browser';

describe('EnrollmentService', () => {
  let service: EnrollmentService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserModule,
        FormsModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  beforeAll(() => {
    service = TestBed.get(EnrollmentService);
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('enroll function should return an observable', () => {
    let user: User;

    // const spy = spyOn(service, 'enroll').and.returnValue(observable);
    // expect(spy).toHaveBeenCalled;
  
    expect(service.enroll(user)).toHaveBeenCalled;
  
  })

  it('errorHandler function should throw an httpErrorResponse', () => {
    let error: HttpErrorResponse;

    // const spy = spyOn(service, 'errorHandler').and.returnValue(throwError);
    // expect(spy).toHaveBeenCalled;

    expect(service.errorHandler(error)).toHaveBeenCalled;
  })
});
