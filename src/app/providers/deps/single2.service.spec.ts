import { TestBed, inject } from '@angular/core/testing';

import { Single2Service } from './single2.service';

describe('Single2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Single2Service]
    });
  });

  it('should be created', inject([Single2Service], (service: Single2Service) => {
    expect(service).toBeTruthy();
  }));
});
