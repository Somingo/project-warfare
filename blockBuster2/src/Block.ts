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
    }

    init(): void {
        const rad = this.game.ball.radius;
        this.color = BlockColors.getRandomColor();
        this.hitBoxToBall = new Rectangle(this.position.clone().addX(-rad).addY(-rad), new Vector(this.width + 2 * rad, this.height + 2 * rad));

    }

    update(e: UpdateEvent): void {
    }

}