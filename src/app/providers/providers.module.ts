import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VISUALIZERS_COLLECTION } from '../imagery/visualizers/visualizers-collection';
import { visualizers } from './visualizers-array';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: VISUALIZERS_COLLECTION,
      useValue: visualizers,
      multi: true
    }
  ],
  declarations: []
})
export class ProvidersModule {
}
