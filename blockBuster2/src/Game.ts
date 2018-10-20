import {Sprite} from './engine/Sprite';
import {UpdateEvent} from './engine/UpdateEvent';

export class Game implements Sprite {

    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    init(): void {
    }

    update(e: UpdateEvent): void {
    }

    draw(ctx: CanvasRenderingContext2D): void {
        ctx.clearRect(0, 0, this.width, this.height);
    }

}