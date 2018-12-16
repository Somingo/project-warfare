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


    constructor(tileSet: TileSet, options: TileOptions, x: number, y: number) {
        this.tileSet = tileSet;
        this.options = options;
        this.width = this.options.width;
        this.height = this.options.height;
        this.x = x;
        this.y = y;
    }

    draw(ctx: CanvasRenderingContext2D): void {
        ctx.drawImage(this.tileSet.spriteSheet,
            this.options.x, this.options.y, this.options.width, this.options.height,
            this.x, this.y, this.width, this.height
        );
    }

    init(): void {
    }

    update(e: UpdateEvent): void {
    }

}

