import { TestBed, inject } from '@angular/core/testing';

import { BaseVisualizerService } from './base-visualizer.service';

describe('BaseVisualizerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BaseVisualizerService]
    });
  });

  it('should be created', inject([BaseVisualizerService], (service: BaseVisualizerService) => {
    expect(service).toBeTruthy();
  }));
});
