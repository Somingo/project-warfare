import {Sprite} from './engine/Sprite';
import {UpdateEvent} from './engine/UpdateEvent';
import {DisplayText} from './engine/DisplayText';
import {TextAlign} from './engine/TextAlign';
import {TextBaseLine} from './engine/TextBaseLine';
import {Vector} from './engine/Vector';

export class LevelText implements Sprite {

    stage = 1;

    alpha: number = 0.1;
    sleepTime: number = 5;

    displayText: DisplayText = new DisplayText();

    constructor(text: string) {
        this.displayText
            .setFontSize(65)
            .setFontFace('spaceFont')
            .setAlign(TextAlign.CENTER)
            .setBaseLine(TextBaseLine.MIDDLE)
            .setPosition(new Vector(400, 300))
            .setText(text);

    }

    draw(ctx: CanvasRenderingContext2D): void {
        this.displayText.draw(ctx);
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
            this.displayText.color = `rgba(255,100,1,${this.alpha}`;
        }
        if (this.stage === 2) {
            this.sleepTime -= 1 / e.deltaTime;
            if (this.sleepTime <= 0) {
                this.sleepTime = 0;
                this.stage++;
            }
            this.displayText.color = `rgba(255,100,1,${this.alpha}`;
        }
        if (this.stage === 1) {
            this.alpha += 1 / e.deltaTime;
            if (this.alpha >= 1) {
                this.alpha = 1;
                this.stage++;
            }
            this.displayText.color = `rgba(255,100,1,${this.alpha}`;
        }
    }

}