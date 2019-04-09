import { TestBed, async, inject } from '@angular/core/testing';

import { PublicGuard } from './public.guard';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

describe('LoginActivateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
        PublicGuard
      ]
    });
  });

  it('This guard will guard the auth module component', inject([PublicGuard], (guard: PublicGuard) => {
    let next: ActivatedRouteSnapshot;
    let state: RouterStateSnapshot;

    expect(guard).toBeTruthy();
    expect(guard.canActivate(next, state)).toHaveBeenCalled;
  }));
});
