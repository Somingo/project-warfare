import {Sprite} from '../engine/Sprite';
import {UpdateEvent} from '../engine/UpdateEvent';
import {Game} from '../Game';
import {DisplayText} from '../engine/sprites/DisplayText';
import {TextAlign} from '../engine/sprites/TextAlign';
import {TextBaseLine} from '../engine/sprites/TextBaseLine';
import {Vector} from '../engine/Vector';

export class ScoreDisplay implements Sprite {
    private game: Game;
    private scoreDisplay: DisplayText;

    constructor(game: Game) {
        this.game = game;
        this.scoreDisplay = new DisplayText();
    }


    draw(ctx: CanvasRenderingContext2D): void {
        this.scoreDisplay.draw(ctx);
    }

    init(): void {
        this.scoreDisplay
            .setFontSize(13)
            .setFontFace('monoFont')
            .setAlign(TextAlign.RIGHT)
            .setBaseLine(TextBaseLine.TOP)
            .setPosition(new Vector(this.game.width - 10, 10));
    }

    update(e: UpdateEvent): void {
        this.scoreDisplay.text = `Score: ${this.game.score.score}`;
    }

}
