import {Sprite} from './engine/Sprite';
import {UpdateEvent} from './engine/UpdateEvent';
import {FpsMeter} from './engine/FpsMeter';
import {Paddle} from './Paddle';

export class Game implements Sprite {

    width: number;
    height: number;

    sprites: Sprite[] = [];

    // named Sprites
    paddle:Paddle;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
        this.paddle = new Paddle(this);

        this.sprites.push(new FpsMeter());
        this.sprites.push(this.paddle);
    }

    init(): void {
        this.sprites.forEach(sprite=>sprite.init());
    }

    update(updateEvent: UpdateEvent): void {
        this.sprites.forEach(sprite=>sprite.update(updateEvent));
    }

    draw(ctx: CanvasRenderingContext2D): void {
        ctx.clearRect(0, 0, this.width, this.height);
        this.sprites.forEach(sprite=>sprite.draw(ctx));
    }

}