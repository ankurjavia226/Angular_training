import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { ReactiveFormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  let fixture, app;
  let dataList = [];
  let urlList = [];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    }).compileComponents();
  }));

  function setup() {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    return {fixture, app};
  }
  
  it('should create the app', () => {
    const { app } = setup();
    expect(app).toBeTruthy();
  });
  
  it('generateQRCode function should be called', () => {
    const { app } = setup();
    expect(app.generateQRCode()).toHaveBeenCalled;
  });

  it('generateQRCode funtion should get response and assign data to dataList.', () => {
    const { app } = setup();    
    const spy = spyOn(app, 'generateQRCode').and.callFake;

    expect(app.dataList).toBeUndefined;
    expect(spy).toHaveBeenCalled;
    expect(app.dataList).not.toBeUndefined;
  });

  it('generateURL function shuld generate urlList', () => {
    const { app } = setup();

    expect(app.urlList).toBeUndefined;
    expect(app.generateURL(['a','b'])).toHaveBeenCalled;
    expect(app.urlList).not.toBeUndefined;
  }); 

  it('downloadQRCode function should get htmlcollection from generated element', () => {
    const { app } = setup();
    
    let data = fixture.debugElement.nativeElement.querySelector('#qrcode');
    let canvas = fixture.debugElement.nativeElement.querySelector('.canvas');

    expect(data).toBeNull;
    expect(app.downloadQRCode()).toHaveBeenCalled;
  })
})
