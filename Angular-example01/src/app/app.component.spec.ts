import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { VideoUrlComponent } from './video-url/video-url.component';
import { VideoDisplayComponent } from './video-display/video-display.component';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule   
      ],
      declarations: [
        AppComponent,
        VideoUrlComponent,
        VideoDisplayComponent
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

  it('getInputURL function should get data from the event set them to property', () => {
    let event;
    expect(app.getInputURL(event)).toHaveBeenCalled;
  });

  it('clearURL function will clear the property data', () => {
    let event;
    expect(app.clearURL(event)).toHaveBeenCalled;
  })
});
