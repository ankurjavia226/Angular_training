import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EnrollmentService } from './enrollment.service';
import { User } from './user';
import { observable } from 'rxjs';

describe('AppComponent', () => {
  let fixture;
  let app;
  let service;

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

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
  })

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should render title in a h1 tag', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Bootcamp Enrollment Form');
  });

  it(`validateTopic function will check for that topic is selected or not, 
      if not then sets error `, () => {
    
      expect(app.validateTopic('default')).toHaveBeenCalled;
      expect(app.topicHasError).toEqual(true)
      expect(app.validateTopic('Angular')).toHaveBeenCalled;      
      fixture.detectChanges();
      expect(app.topicHasError).toEqual(false);    
  })

  it('onSubmit function will save the submitted data', () => {
    expect(app.onSubmit()).toHaveBeenCalled;
  })
});
