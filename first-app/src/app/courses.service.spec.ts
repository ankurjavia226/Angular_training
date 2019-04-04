import { TestBed } from '@angular/core/testing';

import { CoursesServices } from './courses.service';

describe('CoursesService', () => {
  let service: CoursesServices = new CoursesServices();
  //service = TestBed.get(CoursesServices);

  beforeEach(() => TestBed.configureTestingModule({
    providers: [CoursesServices]
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have getCourses function', () => {
    expect(service.getCourses).toBeTruthy();
  });

  it('Output of getCourses function should have array', () => {
    expect(service.getCourses()).toEqual(['course1', 'course2', 'course3', 'course4']);
  })
});
