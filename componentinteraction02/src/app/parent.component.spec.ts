import { ParentComponent } from "./parent.component";
import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { ChildOneComponent } from './childone.component';
import { ChildTwoComponent } from './childtwo.component';

describe('Parent.Component', () => {
  let component: ParentComponent;
  let fixture: ComponentFixture<ParentComponent>;
  let text ;

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
    fixture = TestBed.createComponent(ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    text = 'asdfg';
  });

  it('should create an instance of parent component', () => {
    expect(component).toBeTruthy();
  });

  it('saveData function should have been called', () => {
    expect(component.saveData(text)).toHaveBeenCalled;
  });

  it('printSum function should have been called', () => {
    expect(component.printSum(text)).toHaveBeenCalled;
  });

  it('printMsg function should have been called', () => {
    expect(component.printMsg(text)).toHaveBeenCalled;
  })
});
