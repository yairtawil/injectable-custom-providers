import { VisualizerCustom1Service } from './visualizers/visualizer-custom.service';
import { CustomService } from './services/custom.service';
import { VisualizerCustom2Service } from './visualizers/visualizer-custom2.service';
import { BaseVisualizer } from '@injectable-custom-providers/imagery';

export const customVisualizers = [
  { provide: BaseVisualizer, useClass: VisualizerCustom1Service, multi: true, deps: [CustomService] },
  { provide: BaseVisualizer, useClass: VisualizerCustom2Service, multi: true, deps: [CustomService] }
];
