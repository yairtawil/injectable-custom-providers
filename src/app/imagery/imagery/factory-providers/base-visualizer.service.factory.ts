import { Injector } from '@angular/core';
import { BaseVisualizerService } from '../../visualizers/base-visualizer.service';
import { VISUALIZERS_COLLECTION } from '../../visualizers/visualizers-collection';

export function BaseVisualizerServiceUseFactory(providersCollection: any[], parent: Injector) {
  const providers = providersCollection.reduce((v, i) => [...v, ...i], []);
  const childInjector = Injector.create({ providers, parent });
  if (providers.length === 0) {
    return [];
  }
  return childInjector.get(BaseVisualizerService);

}

export const BaseVisualizerServiceFactory = {
  provide: BaseVisualizerService,
  useFactory: BaseVisualizerServiceUseFactory,
  deps: [VISUALIZERS_COLLECTION, Injector]
};
