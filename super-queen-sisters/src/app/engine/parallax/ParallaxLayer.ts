import {Sprite} from '../Sprite';
import {UpdateEvent} from '../UpdateEvent';
import {ParallaxLayerOptions} from './ParallaxLayerOptions';
import {EnvironmentConfig} from '../EnvironmentConfig';


export class ParallaxLayer implements Sprite {
    posX = 0;
    options: ParallaxLayerOptions;
    image: HTMLImageElement;
    public viewPortX = 0;

    constructor(options: ParallaxLayerOptions) {
        this.options = options;
    }

    draw(ctx: CanvasRenderingContext2D): void {
        const w = (EnvironmentConfig.get().height * this.options.aspectRatio);
        const px = this.posX % w;
        ctx.drawImage(this.image, px, 0, w, EnvironmentConfig.get().height);
        ctx.drawImage(this.image, px - w, 0, w, EnvironmentConfig.get().height);
        ctx.drawImage(this.image, px + w, 0, w, EnvironmentConfig.get().height);
    }

    init(): void {
        this.image = new Image();
        this.image.src = this.options.imageUrl;
    }

    update(e: UpdateEvent): void {
        this.posX = this.viewPortX / 1000 * this.options.speed;
    }

}
