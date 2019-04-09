import { TestBed } from '@angular/core/testing';

import { LoginAuthenticationService } from './login-authentication.service';
import { HttpClientModule } from '@angular/common/http';

describe('LoginAuthenticationService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: LoginAuthenticationService = TestBed.get(LoginAuthenticationService);
    expect(service).toBeTruthy();
  });
});
