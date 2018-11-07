import {Sprite} from '../Sprite';
import {UpdateEvent} from '../UpdateEvent';
import {DisplayText} from './DisplayText';
import {TextBaseLine} from './TextBaseLine';
import {TextAlign} from './TextAlign';
import {Vector} from '../Vector';

export class FpsMeter implements Sprite {

    fpsText: DisplayText = new DisplayText();

    init(): void {
        this.fpsText
            .setFontFace('sans-serif')
            .setFontSize(11)
            .setBaseLine(TextBaseLine.BOTTOM)
            .setAlign(TextAlign.RIGHT)
            .setPosition(new Vector(790, 590));
    }

    update(e: UpdateEvent): void {
        this.fpsText.text = `Fps: ${Math.floor(1000 / e.deltaTime)}`;
    }

    draw(ctx: CanvasRenderingContext2D): void {
        this.fpsText.draw(ctx);
    }

}
