import {Sprite} from '../Sprite';
import {UpdateEvent} from '../UpdateEvent';
import {ParallaxLayer} from './ParallaxLayer';
import {ParallaxLayerOptions} from './ParallaxLayerOptions';

export class Parallax implements Sprite {

  layers: ParallaxLayer[] = [];
  public viewPortX: number = 0;

  constructor(layerUrls: ParallaxLayerOptions[]) {
    this.layers = layerUrls.map(url => new ParallaxLayer(url));
  }

  draw(ctx: CanvasRenderingContext2D): void {
    this.layers.forEach(l => l.draw(ctx));
  }

  init(): void {
    this.layers.forEach(l => l.init());
  }

  update(e: UpdateEvent): void {
    this.layers.forEach(l => {
      l.viewPortX = this.viewPortX;
      l.update(e);
    });
  }

}
