import { TestBed, inject } from '@angular/core/testing';

import { VisualizerCustomService } from './visualizer-custom.service';

describe('VisualizerCustomService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VisualizerCustomService]
    });
  });

  it('should be created', inject([VisualizerCustomService], (service: VisualizerCustomService) => {
    expect(service).toBeTruthy();
  }));
});
