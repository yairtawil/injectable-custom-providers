import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VISUALIZERS_COLLECTION } from '../imagery/visualizers/visualizers-collection';
import { ImageryModule } from '../imagery/imagery.module';
import { CustomService } from './services/custom.service';
import { customVisualizers } from './custom-visalizers-array';

@NgModule({
  imports: [
    CommonModule,
    ImageryModule
  ],
  providers: [
    CustomService,
    {
      provide: VISUALIZERS_COLLECTION,
      useValue: customVisualizers,
      multi: true
    }
  ]
})
export class CustomModule {
}
