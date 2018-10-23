import {Sprite} from './engine/Sprite';
import {UpdateEvent} from './engine/UpdateEvent';
import {Game} from './Game';

export class LevelText implements Sprite {

    stage = 1;

    alpha: number = 0.1;
    sleepTime: number = 5;
    color: string;

    text = 'Level 1';

    constructor(text: string) {
        this.text = text;
    }

    draw(ctx: CanvasRenderingContext2D): void {
        ctx.font = '100px  Calibri';
        ctx.fillStyle = this.color;
        let textMetrics = ctx.measureText(this.text);
        ctx.fillText(this.text, (800 - textMetrics.width) / 2, 350);
    }

    init(): void {
        this.stage = 1;
    }

    update(e: UpdateEvent): void {
        if (this.stage === 3) {
            this.alpha -= 1 / e.deltaTime;
            if (this.alpha <= 0) {
                this.alpha = 0;
                this.stage++;
            }
            this.color = `rgba(255,100,1,${this.alpha}`;
        }
        if (this.stage === 2) {
            this.sleepTime -= 1 / e.deltaTime;
            if (this.sleepTime <= 0) {
                this.sleepTime = 0;
                this.stage++;
            }
            this.color = `rgba(255,100,1,${this.alpha}`;
        }
        if (this.stage === 1) {
            this.alpha += 1 / e.deltaTime;
            if (this.alpha >= 1) {
                this.alpha = 1;
                this.stage++;
            }
            this.color = `rgba(255,100,1,${this.alpha}`;
        }
    }

}