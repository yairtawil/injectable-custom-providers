import { Injectable } from '@angular/core';
import { CustomService } from '../services/custom.service';
import { BaseVisualizer } from '@injectable-custom-providers/imagery';

@Injectable()
export class VisualizerCustom1Service extends BaseVisualizer {
  setEntities(): void {
    console.log(this.constructor.name, 'setEntities');
  }

  constructor(public customService: CustomService) {
    super();
    console.log({ customService });
  }

}
