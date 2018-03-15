import { VisualizerCustom1Service } from './visualizers/visualizer-custom.service';
import { BaseVisualizerService } from '../imagery/visualizers/base-visualizer.service';
import { CustomService } from './services/custom.service';
import { VisualizerCustom2Service } from './visualizers/visualizer-custom2.service';

export const customVisualizers = [
  { provide: BaseVisualizerService, useClass: VisualizerCustom1Service, multi: true, deps: [CustomService] },
  { provide: BaseVisualizerService, useClass: VisualizerCustom2Service, multi: true, deps: [CustomService] }
];
