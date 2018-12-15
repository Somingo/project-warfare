import {Rectangle} from '../engine/collision/Rectangle';
import {Sprite} from '../engine/Sprite';
import {UpdateEvent} from '../engine/UpdateEvent';
import BlockColors from './BlockColors';
import {BlockBuster} from './BlockBuster';
import {Vector} from '../engine/Vector';
import DrawLibrary from "../engine/DrawLibrary";

export class Block extends Rectangle implements Sprite {

    color: string;
    game: BlockBuster;

    constructor(position: Vector, size: Vector, game: BlockBuster, color?: string) {
        super(position, size);
        this.game = game;
        this.color = color || BlockColors.getRandomColor();
    }

    draw(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = this.color;
        DrawLibrary.roundedRect(ctx, this.x, this.y, this.width, this.height);
        ctx.fill();
        let gradient = ctx.createRadialGradient(this.x, this.y - this.width * 3 + 30, 0, this.x, this.y - this.width * 3 + 30, this.width * 3);
        gradient.addColorStop(0, 'rgba(255,255,255,0)');
        gradient.addColorStop(1-10/(this.width*3), 'rgba(255,255,255,.3)');
        gradient.addColorStop(1, 'rgba(255,255,255,.0)');
        ctx.fillStyle = gradient;
        DrawLibrary.roundedRect(ctx, this.x, this.y, this.width, this.height);
        ctx.fill();

        gradient = ctx.createRadialGradient(this.x + 80, this.y + 40, 0, this.x + 80, this.y + 40, 90);
        gradient.addColorStop(0, 'rgba(255,255,255,.0)');
        gradient.addColorStop(0.8, 'rgba(255,255,255,.0)');
        gradient.addColorStop(1, 'rgba(255,255,255,.2)');
        ctx.fillStyle = gradient;
        DrawLibrary.roundedRect(ctx, this.x, this.y, 40, 40);
        ctx.fill();

        gradient = ctx.createRadialGradient(this.x + this.width - 80, this.y, 0, this.x + this.width - 80, this.y, 90);
        gradient.addColorStop(0, 'rgba(0,0,0,.0)');
        gradient.addColorStop(0.8, 'rgba(0,0,0,.0)');
        gradient.addColorStop(1, 'rgba(0,0,0,.3)');
        ctx.fillStyle = gradient;
        DrawLibrary.roundedRect(ctx, this.x + this.width - 40, this.y, 40, this.height);
        ctx.fill();

        ctx.filter = 'none';
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'rgba(0,0,0,0.3)';
        DrawLibrary.roundedRect(ctx, this.x, this.y, this.width, this.height);
        ctx.stroke();

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
