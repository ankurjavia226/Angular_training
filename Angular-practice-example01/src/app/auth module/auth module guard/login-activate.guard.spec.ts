import { TestBed, async, inject } from '@angular/core/testing';

import { LoginActivateGuard } from './login-activate.guard';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

describe('LoginActivateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
        LoginActivateGuard
      ]
    });
  });

  it('This guard should guard the user-login & user-registration components', inject([LoginActivateGuard], (guard: LoginActivateGuard) => {
    let next: ActivatedRouteSnapshot;
    let state: RouterStateSnapshot;

    expect(guard).toBeTruthy();
    expect(guard.canActivate(next, state)).toHaveBeenCalled;
  }));
});
