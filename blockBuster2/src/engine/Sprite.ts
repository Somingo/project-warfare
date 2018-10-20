import {UpdateEvent} from './UpdateEvent';

export interface Sprite {
    init(): void;

    update(e: UpdateEvent): void;

    draw(ctx: CanvasRenderingContext2D): void;
}