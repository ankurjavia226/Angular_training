import { TestBed, async, inject } from '@angular/core/testing';

import { AllowAccessGuard } from './allow-access.guard';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

describe('AllowAccessGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
        AllowAccessGuard
      ]
    });
  });

  it('This guard should guard the header components', inject([AllowAccessGuard], (guard: AllowAccessGuard) => {
    let next: ActivatedRouteSnapshot;
    let state: RouterStateSnapshot;

    expect(guard).toBeTruthy();
    expect(guard.canActivate(next, state)).toHaveBeenCalled;
  }));
});
