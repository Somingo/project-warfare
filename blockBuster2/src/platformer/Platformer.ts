import {Sprite} from '../engine/Sprite';
import {UpdateEvent} from '../engine/UpdateEvent';
import {Parallax} from '../engine/parallax/Parallax';
import {CITY} from './Paralaxes';

export class Platformer implements Sprite {

    bg: Parallax = new Parallax(CITY.layerOptions);

    draw(ctx: CanvasRenderingContext2D): void {
        this.bg.draw(ctx);
    }

    init(): void {
        this.bg.init();
    }

    update(e: UpdateEvent): void {
        this.bg.update(e);
    }
}
