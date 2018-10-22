import {Circle} from '../engine/collision/Circle';
import {Sprite} from '../engine/Sprite';
import {UpdateEvent} from '../engine/UpdateEvent';
import {Game} from '../Game';
import {Vector} from '../engine/Vector';
import {Point} from '../engine/collision/Point';
import {Collision} from '../engine/collision/Collision';

export class Ball extends Circle implements Sprite {

    speed: number;
    speedVector: Vector;
    game: Game;
    image: HTMLImageElement;

    constructor(game: Game) {
        super(new Point(game.width / 2, game.height / 2), 8);
        this.speed = 100;
        this.speedVector = Vector.getRandomVector().getUnit().divideWithConst(1 / this.speed);
        this.game = game;
    }

    draw(ctx: CanvasRenderingContext2D): void {
        ctx.drawImage(this.image, this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
    }

    init(): void {
        this.image = new Image();
        this.image.src = '/assets/ball.png';
    }

    update(e: UpdateEvent): void {

        this.center.add(this.speedVector.clone().divideWithConst(e.deltaTime));

        if (!Collision.isOnInterval(this.x, this.game.hitboxToBall.x, this.game.hitboxToBall.width)) {
            this.speedVector.x *= -1;
        }

        if (!Collision.isOnInterval(this.y, this.game.hitboxToBall.y, this.game.hitboxToBall.height)) {
            this.speedVector.y *= -1;
        }

        if (Collision.collisionPointToRectangle(this.center, this.game.paddle)) {
            this.speedVector = this.center.clone().substract(this.game.paddle.center.addY(this.game.paddle.width/2)).getUnit().divideWithConst(1/this.speed);
        }

    }

}