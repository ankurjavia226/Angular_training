import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    service = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });

  it('isLoggedIn function should return the loggedInStatus value', () => {
    expect(service.isLoggedIn).toHaveBeenCalled;
  })

  it('setLoggedIn function have been called and set value to the loggedInStatus property', () => {
    let loggedInStatus = false;

    expect(service.setLoggedIn(true)).toHaveBeenCalled;
  })
});
