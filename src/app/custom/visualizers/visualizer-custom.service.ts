import { Injectable } from '@angular/core';
import { BaseVisualizerService } from '../../imagery/visualizers/base-visualizer.service';
import { CustomService } from '../services/custom.service';

@Injectable()
export class VisualizerCustom1Service extends BaseVisualizerService {
  setEntities(): void {
    console.log(this.constructor.name, 'setEntities');
  }

  constructor(public customService: CustomService) {
    super();
    console.log({ customService });
  }

}
