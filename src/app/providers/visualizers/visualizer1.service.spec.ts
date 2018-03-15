import { TestBed, inject } from '@angular/core/testing';

import { Visualizer1Service } from './visualizer1.service';

describe('Visualizer1Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Visualizer1Service]
    });
  });

  it('should be created', inject([Visualizer1Service], (service: Visualizer1Service) => {
    expect(service).toBeTruthy();
  }));
});
