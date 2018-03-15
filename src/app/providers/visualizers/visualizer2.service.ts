import { Injectable } from '@angular/core';
import { BaseVisualizerService } from '../../imagery/visualizers/base-visualizer.service';

@Injectable()
export class Visualizer2Service extends BaseVisualizerService{
  setEntities(): void {
    console.log('Visualizer2Service setEntities');
  }
}
