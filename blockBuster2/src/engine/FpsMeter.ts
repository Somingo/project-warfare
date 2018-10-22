import {Sprite} from './Sprite';
import {UpdateEvent} from './UpdateEvent';

export class FpsMeter implements Sprite {

    fps: string = '';

    draw(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = '#fff';
        ctx.fillText(this.fps, 10, 20);
    }

    init(): void {
    }

    update(e: UpdateEvent): void {
        this.fps = `${Math.floor(1000 / e.deltaTime)}`;
    }

}