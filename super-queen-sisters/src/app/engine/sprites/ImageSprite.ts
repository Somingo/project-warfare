import {Sprite} from "../Sprite";
import {UpdateEvent} from "../UpdateEvent";
import {ImageLoader} from "../ImageLoader";

export type ImageDescriptor = {
  url: string;
  offsetX: number;
  offsetY: number;
  width: number;
  height: number;
}

export class ImageSprite implements Sprite {
  public positionX: number = 0;
  public positionY: number = 0;
  private image: HTMLImageElement;

  constructor(public descriptor: ImageDescriptor) {
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.drawImage(this.image,
      this.descriptor.offsetX, this.descriptor.offsetY, this.descriptor.width, this.descriptor.height,
      this.positionX, this.positionY, this.descriptor.width, this.descriptor.height
    );
  }

  init(): void {
    this.image = ImageLoader.loadImage(this.descriptor.url);
  }

  update(e: UpdateEvent): void {
  }

  clone(): ImageSprite {
    let result = new ImageSprite(this.descriptor);
    result.positionX = this.positionX;
    result.positionY = this.positionY;
    return result;
  }

}
