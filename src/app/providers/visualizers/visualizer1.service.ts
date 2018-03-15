import { Injectable } from '@angular/core';
import { BaseVisualizerService } from '../../imagery/visualizers/base-visualizer.service';

@Injectable()
export class Visualizer1Service extends BaseVisualizerService{
  setEntities(): void {
    console.log('Visualizer1Service setEntities');
  }
}


