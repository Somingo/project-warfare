import {Rectangle} from './engine/collision/Rectangle';
import {Sprite} from './engine/Sprite';
import {UpdateEvent} from './engine/UpdateEvent';
import BlockColors from './BlockColors';
import {Game} from './Game';
import {Vector} from './engine/Vector';

export class Block extends Rectangle implements Sprite {

    color: string;
    game: Game;

    hitBoxToBall: Rectangle;

    constructor(position: Vector, size: Vector, game: Game) {
        super(position, size);
        this.game = game;
    }

    draw(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.strokeStyle = '#fff';
        ctx.strokeRect(this.hitBoxToBall.x,this.hitBoxToBall.y,this.hitBoxToBall.width,this.hitBoxToBall.height);
    }

    init(): void {
        const rad = this.game.ball.radius;
        this.color = BlockColors.getRandomColor();
        this.hitBoxToBall = this.hitBox;
    }

    update(e: UpdateEvent): void {
    }

    get hitBox(): Rectangle {
        const r = this.game.ball.radius;
        const topleft = this.position.clone();
        topleft.x -= r;
        topleft.y -= r;
        const size = this.size.clone();
        size.x += 2 * r;
        size.y += 2 * r;
        return new Rectangle(topleft, size);
    }

}