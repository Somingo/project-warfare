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
        let gradient = ctx.createRadialGradient(this.x, this.y-200, 0, this.x, this.y-200, 240);
        gradient.addColorStop(0, 'rgba(255,255,255,0)');
        gradient.addColorStop(0.95, 'rgba(255,255,255,.3)');
        gradient.addColorStop(1, 'rgba(255,255,255,.0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(this.x, this.y, this.width, this.height);

        gradient = ctx.createRadialGradient(this.x + 80, this.y + 40, 0, this.x + 80, this.y + 40, 90);
        gradient.addColorStop(0, 'rgba(255,255,255,.0)');
        gradient.addColorStop(0.8, 'rgba(255,255,255,.0)');
        gradient.addColorStop(1, 'rgba(255,255,255,.2)');
        ctx.fillStyle = gradient;
        ctx.fillRect(this.x, this.y, 40, 40);

        gradient = ctx.createRadialGradient(this.x + this.width- 80, this.y , 0, this.x + this.width- 80, this.y, 90);
        gradient.addColorStop(0, 'rgba(0,0,0,.0)');
        gradient.addColorStop(0.8, 'rgba(0,0,0,.0)');
        gradient.addColorStop(1, 'rgba(0,0,0,.3)');
        ctx.fillStyle = gradient;
        ctx.fillRect(this.x + this.width- 80, this.y,80, this.height);

        ctx.filter = 'none';
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'rgba(0,0,0,0.3)';
        ctx.strokeRect(this.x, this.y, this.width, this.height);
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