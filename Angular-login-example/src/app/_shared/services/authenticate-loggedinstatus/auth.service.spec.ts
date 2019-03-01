import { TestBed } from '@angular/core/testing';
import { LoginAuthenticationService } from 'src/app/auth-module/services/login-services';

describe('LoginAuthenticationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginAuthenticationService = TestBed.get(LoginAuthenticationService);
    expect(service).toBeTruthy();
  });
});
