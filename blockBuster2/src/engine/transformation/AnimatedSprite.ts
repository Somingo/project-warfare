import {UpdateEvent} from '../UpdateEvent';
import {Sprite} from '../Sprite';
import {Transformation} from './Transformation';

export abstract class AnimatedSprite implements Sprite {

    private transformations:Transformation[] = [];

    abstract init(): void;

    update(e: UpdateEvent): void {
        this.transformations.forEach((value:Transformation) => value.update(e));
    }

    draw(ctx: CanvasRenderingContext2D): void {
    }
}
