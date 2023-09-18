import { TestBed } from '@angular/core/testing';

import { NewsservicesService } from './newsservices.service';

describe('NewsservicesService', () => {
  let service: NewsservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
