import { Injectable } from '@angular/core';
import { CustomService } from '../services/custom.service';
import { BaseVisualizer } from '@injectable-custom-providers/imagery';

@Injectable()
export class VisualizerCustom2Service extends BaseVisualizer {
  setEntities(): void {
  }

  constructor(public customService: CustomService) {
    super();
    console.log({ customService });
  }

}
