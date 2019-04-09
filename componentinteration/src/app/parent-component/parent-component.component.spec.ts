import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentComponentComponent } from './parent-component.component';
import { AppComponent } from '../app.component';
import { ChildComponentComponent } from '../child-component/child-component.component';
import { FormsModule } from '@angular/forms';

describe('ParentComponentComponent', () => {
  let component: ParentComponentComponent;
  let fixture: ComponentFixture<ParentComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        AppComponent,
        ParentComponentComponent,
        ChildComponentComponent 
      ],
      imports: [
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create parent component', () => {
    expect(component).toBeTruthy();
  });

  it('getChildText function should get the value from child component', () => {
    let text = 'sdfds'
    expect(component.getChildText(text)).toHaveBeenCalled;
  })
});
