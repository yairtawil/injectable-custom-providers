import { BaseVisualizerService } from '../imagery/visualizers/base-visualizer.service';
import { Visualizer2Service } from './visualizers/visualizer2.service';
import { Visualizer1Service } from './visualizers/visualizer1.service';

export const visualizers = [
  { provide: BaseVisualizerService, useClass: Visualizer1Service, multi: true, deps: [] },
  { provide: BaseVisualizerService, useClass: Visualizer2Service, multi: true, deps: [] }
];
