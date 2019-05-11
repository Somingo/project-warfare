import {Sprite} from '../engine/Sprite';
import {UpdateEvent} from '../engine/UpdateEvent';
import {ImageSprite} from '../engine/sprites/ImageSprite';
import {Rectangle} from '../engine/collision/Rectangle';
import {EnvironmentConfig} from '../engine/EnvironmentConfig';

export class MapTile implements Sprite {

    public hitBox: Rectangle;

    constructor(private imageSprite: ImageSprite, x: number, y: number) {
        this.setPosition(x, y);
    }

    setPosition(x: number, y: number) {
        this.imageSprite.positionX = x;
        this.imageSprite.positionY = y;
        this.hitBox = Rectangle.fromNumbersWH(x, y, this.imageSprite.descriptor.width,  this.imageSprite.descriptor.height);
    }

    draw(ctx: CanvasRenderingContext2D): void {
        this.imageSprite.draw(ctx);
        if (EnvironmentConfig.get().hitBox) {
            ctx.strokeStyle = '#000000';
            ctx.strokeRect(this.hitBox.x, this.hitBox.y, this.hitBox.width, this.hitBox.height);
        }
    }

    init(): void {
        this.imageSprite.init();
    }

    update(e: UpdateEvent): void {
        this.imageSprite.update(e);
    }

}
