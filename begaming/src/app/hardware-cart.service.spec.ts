import { TestBed } from '@angular/core/testing';

import { HardwareCartService } from './hardware-cart.service';

describe('HardwareCartService', () => {
  let service: HardwareCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HardwareCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
