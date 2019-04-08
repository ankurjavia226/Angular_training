import { TestBed, async } from '@angular/core/testing';

import { RegistrationService } from './registration.service';
import { HttpClientModule } from '@angular/common/http';

describe('RegistrationService', () => {
  let service: RegistrationService;

  beforeEach(async(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ],
  })));

  beforeEach(() => {
    service = TestBed.get(RegistrationService);
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('register function should have been called', () => {
    expect(service.register({})).toHaveBeenCalled;
  })
});
