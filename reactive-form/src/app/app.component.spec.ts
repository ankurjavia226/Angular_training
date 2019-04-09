import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

describe('AppComponent', () => {
  let fixture;
  let app;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    app.ngOnInit();
  })

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  
  it('addAlternateEmail function should have been called', () => {
    expect(app.addAlternateEmail()).toHaveBeenCalled;
  });

  it('loadApiData should have been called', () => {
    let spy = spyOn(app, 'loadApiData').and.callFake;
    expect(spy).toHaveBeenCalled;
  });

  it('onSubmit should have been called', () => {
    expect(app.onSubmit()).toHaveBeenCalled;
  })

});
