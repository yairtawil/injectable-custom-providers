import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { visualizers } from './visualizers-array';
import { VISUALIZERS_COLLECTION } from '@injectable-custom-providers/imagery';

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
