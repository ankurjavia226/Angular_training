import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoUrlComponent } from './video-url.component';
import { FormsModule } from '@angular/forms';

describe('VideoUrlComponent', () => {
  let component: VideoUrlComponent;
  let fixture: ComponentFixture<VideoUrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        VideoUrlComponent 
      ],
      imports: [
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create video-url component', () => {
    expect(component).toBeTruthy();
    expect(component.ngOnChanges()).toHaveBeenCalled;
  });

  it('playVideo function should have been called', () => {
    expect(component.playVideo()).toHaveBeenCalled;
  })
});
