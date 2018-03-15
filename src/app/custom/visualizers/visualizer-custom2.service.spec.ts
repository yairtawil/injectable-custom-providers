import { TestBed, inject } from '@angular/core/testing';

import { VisualizerCustom2Service } from './visualizer-custom2.service';

describe('VisualizerCustom2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VisualizerCustom2Service]
    });
  });

  it('should be created', inject([VisualizerCustom2Service], (service: VisualizerCustom2Service) => {
    expect(service).toBeTruthy();
  }));
});
