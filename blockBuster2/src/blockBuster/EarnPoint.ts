import {Sprite} from '../engine/Sprite';
import {UpdateEvent} from '../engine/UpdateEvent';
import {DisplayText} from '../engine/sprites/DisplayText';
import {Vector} from '../engine/Vector';
import {TextBaseLine} from '../engine/sprites/TextBaseLine';
import {TextAlign} from '../engine/sprites/TextAlign';
import {Colors} from '../engine/Colors';
import {Game} from './Game';

export class EarnPoint implements Sprite {

    maxFontSize = 42;
    spriteLength = 2;
    color: string = '#fff';
    elapsedTime = 0;

    game:Game;

    pointDisplay: DisplayText;

    constructor(game:Game, pos: Vector, point: number) {
        this.game = game;
        this.pointDisplay = new DisplayText();
        this.pointDisplay.setPosition(pos).setText(`${point}`).setBaseLine(TextBaseLine.MIDDLE).setAlign(TextAlign.CENTER).setFontFace('spaceFont').setFontSize(1);
    }

    draw(ctx: CanvasRenderingContext2D): void {
        this.pointDisplay.draw(ctx);
    }

    init(): void {
    }

    update(e: UpdateEvent): void {
        this.elapsedTime += 1 / e.deltaTime;
        const percent = this.elapsedTime / this.spriteLength;
        if (percent > 1) {
            this.game.removeSprite(this);
        }
        this.pointDisplay.setFontSize(this.maxFontSize * percent).setColor(Colors.rgba(255, 255, 100, 1 - percent));
    }

}
