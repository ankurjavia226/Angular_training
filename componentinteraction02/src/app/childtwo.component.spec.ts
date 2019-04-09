import { ChildTwoComponent } from "./childtwo.component";
import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { ParentComponent } from './parent.component';
import { ChildOneComponent } from './childone.component';

describe('Childtwo.Component', () => {

  let component: ChildTwoComponent;
  let fixture: ComponentFixture<ChildTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ParentComponent,
        ChildOneComponent,
        ChildTwoComponent 
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create an instance of childTwo component', () => {
    expect(component).toBeTruthy();
  });

  xit('addNumber function should have been called', () => {
    expect(component.addNumber()).toHaveBeenCalled;
  })
});
