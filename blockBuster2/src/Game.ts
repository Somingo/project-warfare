import {Sprite} from './engine/Sprite';
import {UpdateEvent} from './engine/UpdateEvent';
import {FpsMeter} from './engine/FpsMeter';
import {Paddle} from './Paddle';
import {Ball} from './ball/Ball';
import {Rectangle} from './engine/collision/Rectangle';
import {Vector} from './engine/Vector';

export class Game implements Sprite {

    width: number;
    height: number;

    sprites: Sprite[] = [];

    // named Sprites
    paddle: Paddle;
    ball: Ball;

    hitboxToBall: Rectangle;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
        this.paddle = new Paddle(this);
        this.ball = new Ball(this);

        this.sprites.push(new FpsMeter());
        this.sprites.push(this.paddle);
        this.sprites.push(this.ball);
        this.hitboxToBall = new Rectangle(new Vector(this.ball.radius, this.ball.radius), new Vector(width - 2 * this.ball.radius, height - 2 * this.ball.radius))
    }

    init(): void {
        this.sprites.forEach(sprite => sprite.init());
    }

    update(updateEvent: UpdateEvent): void {
        this.sprites.forEach(sprite => sprite.update(updateEvent));
    }

    draw(ctx: CanvasRenderingContext2D): void {
        ctx.clearRect(0, 0, this.width, this.height);
        this.sprites.forEach(sprite => sprite.draw(ctx));
    }

}