import { TestBed } from '@angular/core/testing';

import { ToDataService } from './to-data.service';

describe('ToDataService', () => {
  let service: ToDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
