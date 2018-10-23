import {Rectangle} from './engine/collision/Rectangle';
import {Sprite} from './engine/Sprite';
import {UpdateEvent} from './engine/UpdateEvent';
import BlockColors from './BlockColors';
import {Game} from './Game';
import {Vector} from './engine/Vector';

export class Block extends Rectangle implements Sprite {

    color: string;
    game: Game;

    constructor(position: Vector, size: Vector, game: Game, color?: string) {
        super(position, size);
        this.game = game;
        this.color = color || BlockColors.getRandomColor();
    }

    draw(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        if (this.game.renderHitBoxes) {
            ctx.strokeStyle = '#fff';
            ctx.strokeRect(this.hitBoxToBall.x, this.hitBoxToBall.y, this.hitBoxToBall.width, this.hitBoxToBall.height);
        }
    }

    init(): void {
    }

    update(e: UpdateEvent): void {
    }

    get hitBoxToBall(): Rectangle {
        const r = this.game.ball.radius;
        const topLeft = this.position.clone();
        topLeft.x -= r;
        topLeft.y -= r;
        const size = this.size.clone();
        size.x += 2 * r;
        size.y += 2 * r;
        return new Rectangle(topLeft, size);
    }

}