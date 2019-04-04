import { CourseComponent } from "./courses.component";
import { async, TestBed } from '@angular/core/testing';
import { CoursesServices } from './courses.service';

describe('CourseComponent', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [
          CourseComponent
        ],
        providers: [
          CoursesServices
        ],
      }).compileComponents();
    });

    it(`should have as title 'List Of Courses'`, () => {
      const fixture = TestBed.createComponent(CourseComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app.title).toEqual('List Of Courses');
    });
    
    it('should render title in a h2 tag', () => {
      const fixture = TestBed.createComponent(CourseComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h2').textContent).toContain('List Of Courses');
    });
})