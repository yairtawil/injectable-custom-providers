import { Injectable } from '@angular/core';

@Injectable()
export abstract class BaseVisualizerService {
  creatingNum = Math.floor(Math.random() * 100);

  abstract setEntities(): void;

  constructor() {
  }

}
