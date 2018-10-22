import {Sprite} from './engine/Sprite';
import {UpdateEvent} from './engine/UpdateEvent';
import {FpsMeter} from './engine/FpsMeter';
import {Paddle} from './Paddle';
import {Ball} from './ball/Ball';
import {Rectangle} from './engine/collision/Rectangle';
import {Vector} from './engine/Vector';
import {Block} from './Block';

export class Game implements Sprite {

    width: number;
    height: number;

    sprites: Sprite[] = [];

    // named Sprites
    paddle: Paddle;
    ball: Ball;

    hitboxToBall: Rectangle;
    blocks: Block[] = [];

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
        this.paddle = new Paddle(this);
        this.ball = new Ball(this);

        this.sprites.push(new FpsMeter());
        this.sprites.push(this.paddle);
        this.sprites.push(this.ball);
        this.hitboxToBall = new Rectangle(new Vector(this.ball.radius, this.ball.radius), new Vector(width - 2 * this.ball.radius, height - 2 * this.ball.radius));
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 5; j++) {
                this.blocks.push(new Block(new Vector(i * 80, j * 40 + 100), new Vector(80, 40), this));
            }
        }
        this.blocks.forEach(block => this.sprites.push(block));
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