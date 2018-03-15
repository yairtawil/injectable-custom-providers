import { Component, Inject, OnInit } from '@angular/core';
import { BaseVisualizer } from '../visualizers/base-visualizer';
import { BaseVisualizerServiceFactory } from './factory-providers/base-visualizer.service.factory';

@Component({
  selector: 'app-imagery',
  templateUrl: './imagery.component.html',
  styleUrls: ['./imagery.component.css'],
  providers: [BaseVisualizerServiceFactory]
})
export class ImageryComponent implements OnInit {
  static imageryNum = 0;

  get visualizers() {
    return this.baseVisualizerService.map((ins: BaseVisualizer) => ({
      name: ins.constructor.name,
      creatingNum: ins.creatingNum
    }));
  }

  imageryNum = ++ImageryComponent.imageryNum;

  constructor(@Inject(BaseVisualizer) protected baseVisualizerService: BaseVisualizer[]) {
  }

  ngOnInit() {
  }

}
