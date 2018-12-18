import {Sprite} from '../Sprite';
import {UpdateEvent} from '../UpdateEvent';
import {TileSet} from './TileSet';
import {TileOptions} from './TileOptions';

export class Tile implements Sprite {
    x: number;
    y: number;
    width: number;
    height: number;
    tileSet: TileSet;
    options: TileOptions;
    image: HTMLImageElement;


    constructor(tileSet: TileSet, options: TileOptions, x: number, y: number) {
        this.tileSet = tileSet;
        this.options = options;
        this.width = this.options.width;
        this.height = this.options.height;
        this.x = x;
        this.y = y;
    }

    draw(ctx: CanvasRenderingContext2D): void {
        ctx.drawImage(this.image,
            this.options.x, this.options.y, this.options.width, this.options.height,
            this.x, this.y, this.width, this.height
        );
    }

    init(): void {
        if (this.options.url) {
            this.image = new Image();
            this.image.src = this.options.url;
        } else {
            this.image = this.tileSet.spriteSheet;
        }
    }

    update(e: UpdateEvent): void {
    }

}

