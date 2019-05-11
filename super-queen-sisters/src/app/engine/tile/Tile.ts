import {Sprite} from '../Sprite';
import {UpdateEvent} from '../UpdateEvent';
import {TileSet} from './TileSet';
import {TileOptions} from './TileOptions';
import {Rectangle} from '../collision/Rectangle';
import {Vector} from '../Vector';

export class Tile implements Sprite {
    public x: number;
    public y: number;
    width: number;
    height: number;
    tileSet: TileSet;
    options: TileOptions;
    image: HTMLImageElement;
    public bounds: Rectangle;


    constructor(tileSet: TileSet, options: TileOptions, x: number, y: number) {
        this.tileSet = tileSet;
        this.options = options;
        this.width = this.options.width;
        this.height = this.options.height;
        this.x = x;
        this.y = y;
        this.updateBounds();
    }

    draw(ctx: CanvasRenderingContext2D): void {
        ctx.drawImage(this.image,
            this.options.x, this.options.y, this.options.width, this.options.height,
            this.x, this.y, this.width, this.height
        );
        ctx.strokeRect(this.bounds.x, this.bounds.y, this.bounds.width, this.bounds.height);
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

    updateBounds(): void {
        this.bounds = new Rectangle(new Vector(this.x, this.y), new Vector(this.width, this.height));
    }
}

