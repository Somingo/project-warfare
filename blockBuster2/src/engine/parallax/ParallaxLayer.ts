import {Sprite} from '../Sprite';
import {UpdateEvent} from '../UpdateEvent';
import {Keys} from '../keyboard/Keys';
import {ParallaxLayerOptions} from './ParallaxLayerOptions';

export class ParallaxLayer implements Sprite {
    posX = 0;
    options: ParallaxLayerOptions;
    image: HTMLImageElement;

    constructor(options: ParallaxLayerOptions) {
        this.options = options;
    }

    draw(ctx: CanvasRenderingContext2D): void {
        const w = (600 * this.options.aspectRatio);
        const px = this.posX % w;
        ctx.drawImage(this.image, px, 0, w, 600);
        ctx.drawImage(this.image, px - w, 0, w, 600);
        ctx.drawImage(this.image, px + w, 0, w, 600);
    }

    init(): void {
        this.image = new Image();
        this.image.src = this.options.imageUrl;
    }

    update(e: UpdateEvent): void {
        if (e.keyMap[Keys.leftArrow]) {
            this.posX -= e.deltaTime / 1000 * this.options.speed;
        }
        if (e.keyMap[Keys.rightArrow]) {
            this.posX += e.deltaTime / 1000 * this.options.speed;
        }
    }

}
