import { TestBed, inject } from '@angular/core/testing';

import { Single1Service } from './single1.service';

describe('Single1Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Single1Service]
    });
  });

  it('should be created', inject([Single1Service], (service: Single1Service) => {
    expect(service).toBeTruthy();
  }));
});
