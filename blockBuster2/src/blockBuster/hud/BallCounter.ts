import {Sprite} from '../../engine/Sprite';
import {BlockBuster} from '../BlockBuster';
import {UpdateEvent} from '../../engine/UpdateEvent';

export class BallCounter implements Sprite {

    private game: BlockBuster;
    image: HTMLImageElement;


    constructor(game: BlockBuster) {
        this.game = game;
    }


    draw(ctx: CanvasRenderingContext2D): void {
        for (let i = 0; i < this.game.balls; i++) {
            ctx.drawImage(this.image, 10 + i * 15, 10, 10, 10);

        }
    }

    init(): void {
        this.image = new Image();
        this.image.src = '/assets/ball.png';
    }

    update(e: UpdateEvent): void {
    }
}
