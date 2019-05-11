import {Sprite} from '../Sprite';
import {UpdateEvent} from '../UpdateEvent';
import {DisplayText} from './DisplayText';
import {TextBaseLine} from './TextBaseLine';
import {TextAlign} from './TextAlign';
import {Vector} from '../Vector';
import {EnvironmentConfig} from '../EnvironmentConfig';
import {Colors} from '../Colors';

export class FpsMeter implements Sprite {

    fpsText: DisplayText = new DisplayText();

    init(): void {
        this.fpsText
            .setFontFace('sans-serif')
            .setFontSize(11)
            .setColor(Colors.rgba(255, 255, 255, 1))
            .setBaseLine(TextBaseLine.BOTTOM)
            .setAlign(TextAlign.RIGHT)
            .setPosition(new Vector(EnvironmentConfig.get().width - 10, EnvironmentConfig.get().height - 10));
    }

    update(e: UpdateEvent): void {
        this.fpsText.text = `Fps: ${Math.floor(1000 / e.deltaTime)}`;
    }

    draw(ctx: CanvasRenderingContext2D): void {
        this.fpsText.draw(ctx);
    }

}
