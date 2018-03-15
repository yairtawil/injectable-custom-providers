import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomService } from './services/custom.service';
import { customVisualizers } from './custom-visalizers-array';
import { VISUALIZERS_COLLECTION } from '@injectable-custom-providers/imagery';

@NgModule({
  imports: [
    CommonModule,
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
