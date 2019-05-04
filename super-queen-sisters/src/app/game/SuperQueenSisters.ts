import {Sprite} from "../engine/Sprite";
import {UpdateEvent} from "../engine/UpdateEvent";
// @ts-ignore
import parallaxes from './parallaxes.json';
import {Parallax} from "../engine/parallax/Parallax";
import {ParallaxOptions} from "../engine/parallax/ParallaxOptions";

export class SuperQueenSisters implements Sprite {
  parallax:Parallax = null;

  draw(ctx: CanvasRenderingContext2D): void {
    if (this.parallax) this.parallax.draw(ctx);
    ctx.fillText('Hello World!', 50, 50);
  }

  init(): void {
    console.log('loaded?', parallaxes);
    let parallaxOptions = ParallaxOptions.fromObject(parallaxes[0]);
    this.parallax = new Parallax(parallaxOptions.layerOptions);
    this.parallax.init();
  }

  update(e: UpdateEvent): void {
    if (this.parallax) this.parallax.update(e);
  }

}