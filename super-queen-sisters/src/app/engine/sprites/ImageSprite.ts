import {Sprite} from '../Sprite';
import {UpdateEvent} from '../UpdateEvent';
import {ImageLoader} from '../ImageLoader';

export interface ImageDescriptor {
    offsetX: number;
    offsetY: number;
    width: number;
    height: number;
}

export class ImageSprite implements Sprite {
    public positionX = 0;
    public positionY = 0;

    constructor(public descriptor: ImageDescriptor, private image: HTMLImageElement) {
    }

    draw(ctx: CanvasRenderingContext2D): void {
        ctx.drawImage(this.image,
            this.descriptor.offsetX, this.descriptor.offsetY, this.descriptor.width, this.descriptor.height,
            this.positionX, this.positionY, this.descriptor.width, this.descriptor.height
        );
    }

    init(): void {
    }

    update(e: UpdateEvent): void {
    }

    clone(): ImageSprite {
        const result = new ImageSprite(this.descriptor, this.image);
        result.positionX = this.positionX;
        result.positionY = this.positionY;
        return result;
    }

}
