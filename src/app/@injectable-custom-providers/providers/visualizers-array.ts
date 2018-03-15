import { BaseVisualizer } from '../imagery/visualizers/base-visualizer';
import { Visualizer2Service } from './visualizers/visualizer2.service';
import { Visualizer1Service } from './visualizers/visualizer1.service';

export const visualizers = [
  { provide: BaseVisualizer, useClass: Visualizer1Service, multi: true, deps: [] },
  { provide: BaseVisualizer, useClass: Visualizer2Service, multi: true, deps: [] }
];
