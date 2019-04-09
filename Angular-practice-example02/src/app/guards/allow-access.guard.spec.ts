import { TestBed, async, inject } from '@angular/core/testing';

import { AllowAccessGuard } from './allow-access.guard';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

describe('AllowAccessGuard', () => {
  beforeEach(() => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
        AllowAccessGuard,
        {provide: Router, useValue: routerSpy}
      ]
    });
  });

  it('This guard will guard the header component ', inject([AllowAccessGuard], (guard: AllowAccessGuard) => {
    let next: ActivatedRouteSnapshot;
    let state: RouterStateSnapshot;

    expect(guard).toBeTruthy();
    expect(guard.canActivate(next, state)).toHaveBeenCalled;
  }));

  // xit('should navigate to the component', () => {
  //   const spy = router.navigate as jasmine.Spy;
  //   expect(spy).toHaveBeenCalled;
  // })
});
