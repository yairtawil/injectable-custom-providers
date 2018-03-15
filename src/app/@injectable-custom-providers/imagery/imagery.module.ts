import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageryComponent } from './imagery/imagery.component';
import { VISUALIZERS_COLLECTION } from './visualizers/visualizers-collection.injecton-token';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ImageryComponent],
  exports: [ImageryComponent],
  providers: [{
    provide: VISUALIZERS_COLLECTION,
    useValue: [],
    multi: true
  }]
})
export class ImageryModule {
}
