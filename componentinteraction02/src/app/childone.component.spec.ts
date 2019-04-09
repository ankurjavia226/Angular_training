import { ChildOneComponent } from "./childone.component";
import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { ParentComponent } from './parent.component';
import { ChildTwoComponent } from './childtwo.component';

describe('Childone.Component', () => {

  let component: ChildOneComponent;
  let fixture: ComponentFixture<ChildOneComponent>;

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
    fixture = TestBed.createComponent(ChildOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance of childOne component', () => {
    expect(component).toBeTruthy();
  });

  it('addStudent function should have been called', () => {
    expect(component.addStudent()).toHaveBeenCalled;
  });

  it('sendMsg function should have been called', () => {
    expect(component.sendMsg()).toHaveBeenCalled;
  })
});
