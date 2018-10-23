import {Sprite} from './Sprite';
import {UpdateEvent} from './UpdateEvent';
import {DisplayText} from './DisplayText';
import {TextBaseLine} from './TextBaseLine';
import {TextAlign} from './TextAlign';
import {Vector} from './Vector';

export class FpsMeter implements Sprite {

    fpsText: DisplayText = new DisplayText();

    init(): void {
        this.fpsText
            .setFontFace('sans-serif')
            .setFontSize(11)
            .setBaseLine(TextBaseLine.TOP)
            .setAlign(TextAlign.LEFT)
            .setPosition(new Vector(10, 10));
    }

    update(e: UpdateEvent): void {
        this.fpsText.text = `${Math.floor(1000 / e.deltaTime)}`;
    }

    draw(ctx: CanvasRenderingContext2D): void {
        this.fpsText.draw(ctx);
    }

}