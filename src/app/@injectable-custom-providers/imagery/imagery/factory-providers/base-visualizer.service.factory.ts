import { Injector } from '@angular/core';
import { BaseVisualizer } from '../../visualizers/base-visualizer';
import { VISUALIZERS_COLLECTION } from '../../visualizers/visualizers-collection.injecton-token';

export function BaseVisualizerServiceUseFactory(providersCollection: any[], parent: Injector) {
  const providers = providersCollection.reduce((v, i) => [...v, ...i], []);
  const childInjector = Injector.create({ providers, parent });
  if (providers.length === 0) {
    return [];
  }
  return childInjector.get(BaseVisualizer);

}

export const BaseVisualizerServiceFactory = {
  provide: BaseVisualizer,
  useFactory: BaseVisualizerServiceUseFactory,
  deps: [VISUALIZERS_COLLECTION, Injector]
};
