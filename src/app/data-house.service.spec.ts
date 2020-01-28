import { TestBed } from '@angular/core/testing';

import { DataHouseService } from './data-house.service';

describe('DataHouseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataHouseService = TestBed.get(DataHouseService);
    expect(service).toBeTruthy();
  });
});
