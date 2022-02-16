import { TestBed } from '@angular/core/testing';

import { PhonesService } from '../app/phone.service';

describe('PhonesService', () => {
  let service: PhonesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhonesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
