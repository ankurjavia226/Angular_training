import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoUrlComponent } from './video-url.component';

describe('VideoUrlComponent', () => {
  let component: VideoUrlComponent;
  let fixture: ComponentFixture<VideoUrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoUrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
