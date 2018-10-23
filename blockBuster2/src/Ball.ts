import {Circle} from './engine/collision/Circle';
import {Sprite} from './engine/Sprite';
import {UpdateEvent} from './engine/UpdateEvent';
import {Game} from './Game';
import {Vector} from './engine/Vector';
import {Point} from './engine/collision/Point';
import {Collision} from './engine/collision/Collision';
import * as _ from 'lodash';

export class Ball extends Circle implements Sprite {

    speed: number;
    speedVector: Vector;
    game: Game;
    image: HTMLImageElement;

    constructor(game: Game, startPoint:Point) {
        super(startPoint, 8);
        this.speed = 100;
        this.speedVector = Vector.getRandomVector().getUnit().divideWithConst(3 / this.speed);
        this.game = game;
    }

    draw(ctx: CanvasRenderingContext2D): void {
        ctx.drawImage(this.image, this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);

        if (this.game.renderHitBoxes) {
            ctx.strokeStyle = '#fff';
            ctx.strokeRect(this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
        }
    }

    init(): void {
        this.image = new Image();
        this.image.src = '/assets/ball.png';
    }

    update(e: UpdateEvent): void {

        const oldPosition = this.center.clone();
        const adjustVector = this.speedVector.clone().divideWithConst(e.deltaTime);

        this.center.add(adjustVector);

        if (!Collision.isOnInterval(this.x, this.game.hitBoxToBall.x, this.game.hitBoxToBall.width)) {
            this.speedVector.x *= -1;
        }

        if (!Collision.isOnInterval(this.y, this.game.hitBoxToBall.y, this.game.hitBoxToBall.height)) {
            this.speedVector.y *= -1;
        }

        if (Collision.collisionPointToRectangle(this.center, this.game.paddle.hitBox)) {
            this.speedVector = this.center.clone().substract(this.game.paddle.center.addY(this.game.paddle.width / 2)).getUnit().divideWithConst(1 / this.speed);
        }

        const blockToRemove = this.game.blocks.filter(value => Collision.collisionPointToRectangle(this.center, value.hitBoxToBall));

        if (blockToRemove.length > 0) {
            if (blockToRemove.length === 3) {
                this.speedVector.x *= -1;
                this.speedVector.y *= -1;
            } else if (blockToRemove.length === 2) {
                if (blockToRemove[0].x === blockToRemove[1].x) {
                    this.speedVector.x *= -1;
                } else if (blockToRemove[0].y === blockToRemove[1].y) {
                    this.speedVector.y *= -1;
                } else {
                    this.speedVector.x *= -1;
                    this.speedVector.y *= -1;
                }
            } else {
                const target = blockToRemove[0];
                this.speedVector = this.center.clone().substract(target.center).getUnit().divideWithConst(1 / this.speed);
            }
        }

        _.pullAll(this.game.sprites, blockToRemove);
        _.pullAll(this.game.blocks, blockToRemove);

    }

}