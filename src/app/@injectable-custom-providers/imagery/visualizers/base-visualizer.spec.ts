import { TestBed, inject } from '@angular/core/testing';
import { BaseVisualizer } from './base-visualizer';

describe('BaseVisualizer', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BaseVisualizer]
    });
  });

  it('should be created', inject([BaseVisualizer], (service: BaseVisualizer) => {
    expect(service).toBeTruthy();
  }));
});
