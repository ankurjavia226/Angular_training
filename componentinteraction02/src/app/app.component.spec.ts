import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent.component';
import { ChildOneComponent } from './childone.component';
import { ChildTwoComponent } from './childtwo.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ParentComponent, 
        ChildOneComponent,
        ChildTwoComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
