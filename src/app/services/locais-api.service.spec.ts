import { TestBed } from '@angular/core/testing';

import { LocaisApiService } from './locais-api.service';

describe('LocaisApiService', () => {
  let service: LocaisApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocaisApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
