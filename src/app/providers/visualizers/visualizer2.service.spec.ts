import { TestBed, inject } from '@angular/core/testing';

import { Visualizer2Service } from './visualizer2.service';

describe('Visualizer2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Visualizer2Service]
    });
  });

  it('should be created', inject([Visualizer2Service], (service: Visualizer2Service) => {
    expect(service).toBeTruthy();
  }));
});
