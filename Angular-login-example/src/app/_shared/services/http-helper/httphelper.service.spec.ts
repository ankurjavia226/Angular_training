import { TestBed } from '@angular/core/testing';

import { HttphelperService } from './httphelper.service';
import { HttpClientModule } from '@angular/common/http';

describe('HttphelperService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: HttphelperService = TestBed.get(HttphelperService);
    expect(service).toBeTruthy();
  });
});
