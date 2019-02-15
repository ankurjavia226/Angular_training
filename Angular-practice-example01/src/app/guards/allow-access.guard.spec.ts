import { TestBed, async, inject } from '@angular/core/testing';

import { AllowAccessGuard } from './allow-access.guard';

describe('AllowAccessGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllowAccessGuard]
    });
  });

  it('should ...', inject([AllowAccessGuard], (guard: AllowAccessGuard) => {
    expect(guard).toBeTruthy();
  }));
});
