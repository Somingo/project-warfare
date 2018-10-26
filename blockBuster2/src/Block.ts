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

    rectPath(ctx: CanvasRenderingContext2D, x1: number, y1: number, w: number, h: number) {
        const r = 5;
        const x2 = x1 + w;
        const y2 = y1 + h;
        ctx.beginPath();
        ctx.moveTo(x2 - r, y1);
        ctx.arcTo(x2, y1, x2, y1 + r, r);
        ctx.lineTo(x2, y2 - r);
        ctx.arcTo(x2, y2, x2 - r, y2, r);
        ctx.lineTo(x1 + r, y2);
        ctx.arcTo(x1, y2, x1, y2 - r, r);
        ctx.lineTo(x1, y1 + r);
        ctx.arcTo(x1, y1, x1 + r, y1, r);
        ctx.closePath();
    }

    draw(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = this.color;
        //ctx.fillRect(this.x, this.y, this.width, this.height);
        this.rectPath(ctx, this.x, this.y, this.width, this.height);
        ctx.fill();
        let gradient = ctx.createRadialGradient(this.x, this.y - this.width * 3 + 30, 0, this.x, this.y - this.width * 3 + 30, this.width * 3);
        gradient.addColorStop(0, 'rgba(255,255,255,0)');
        gradient.addColorStop(1-10/(this.width*3), 'rgba(255,255,255,.3)');
        gradient.addColorStop(1, 'rgba(255,255,255,.0)');
        ctx.fillStyle = gradient;
        //ctx.fillRect(this.x, this.y, this.width, this.height);
        this.rectPath(ctx, this.x, this.y, this.width, this.height);
        ctx.fill();

        gradient = ctx.createRadialGradient(this.x + 80, this.y + 40, 0, this.x + 80, this.y + 40, 90);
        gradient.addColorStop(0, 'rgba(255,255,255,.0)');
        gradient.addColorStop(0.8, 'rgba(255,255,255,.0)');
        gradient.addColorStop(1, 'rgba(255,255,255,.2)');
        ctx.fillStyle = gradient;
        //ctx.fillRect(this.x, this.y, 40, 40);
        this.rectPath(ctx, this.x, this.y, 40, 40);
        ctx.fill();

        gradient = ctx.createRadialGradient(this.x + this.width - 80, this.y, 0, this.x + this.width - 80, this.y, 90);
        gradient.addColorStop(0, 'rgba(0,0,0,.0)');
        gradient.addColorStop(0.8, 'rgba(0,0,0,.0)');
        gradient.addColorStop(1, 'rgba(0,0,0,.3)');
        ctx.fillStyle = gradient;
        //ctx.fillRect(this.x + this.width- 80, this.y,80, this.height);
        this.rectPath(ctx, this.x + this.width - 40, this.y, 40, this.height);
        ctx.fill();

        ctx.filter = 'none';
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'rgba(0,0,0,0.3)';
        //ctx.strokeRect(this.x, this.y, this.width, this.height);
        this.rectPath(ctx, this.x, this.y, this.width, this.height);
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