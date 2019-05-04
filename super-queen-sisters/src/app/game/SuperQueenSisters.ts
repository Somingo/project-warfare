import {Sprite} from "../engine/Sprite";
import {UpdateEvent} from "../engine/UpdateEvent";

export class SuperQueenSisters implements Sprite {


  draw(ctx: CanvasRenderingContext2D): void {
    ctx.fillText('Hello World!', 50, 50);
  }

  init(): void {
  }

  update(e: UpdateEvent): void {
  }

}
