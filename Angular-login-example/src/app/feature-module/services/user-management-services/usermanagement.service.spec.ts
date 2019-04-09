import { TestBed } from '@angular/core/testing';

import { UsermanagementService } from './usermanagement.service';
import { HttpClientModule } from '@angular/common/http';

describe('UsermanagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: UsermanagementService = TestBed.get(UsermanagementService);
    expect(service).toBeTruthy();
  });
});
