import { TestBed } from '@angular/core/testing';

import { SeatServiceService } from './seat-service.service';

describe('SeatServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SeatServiceService = TestBed.get(SeatServiceService);
    expect(service).toBeTruthy();
  });
});
