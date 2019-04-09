import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildComponentComponent } from './child-component.component';

describe('ChildComponentComponent', () => {
  let component: ChildComponentComponent;
  let fixture: ComponentFixture<ChildComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create child component', () => {
    expect(component).toBeTruthy();
  });

  it('onChange function should have been called while enter the text', () => {
    let text = "ankur";
    expect(component.onChange(text)).toHaveBeenCalled;
  })
});
