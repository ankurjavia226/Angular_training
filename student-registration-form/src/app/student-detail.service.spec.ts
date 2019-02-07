import { TestBed } from '@angular/core/testing';

import { StudentDetailService } from './student-detail.service';

describe('StudentDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentDetailService = TestBed.get(StudentDetailService);
    expect(service).toBeTruthy();
  });
});
