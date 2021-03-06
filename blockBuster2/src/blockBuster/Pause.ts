import {Sprite} from "../engine/Sprite";
import {UpdateEvent} from "../engine/UpdateEvent";
import {DisplayText} from "../engine/sprites/DisplayText";
import {TextAlign} from "../engine/sprites/TextAlign";
import {TextBaseLine} from "../engine/sprites/TextBaseLine";
import {Vector} from "../engine/Vector";
import {BlockBuster} from "./BlockBuster";

export default class Pause implements Sprite {

    game: BlockBuster;
    pauseText: DisplayText;


    constructor(game: BlockBuster) {
        this.game = game;
        this.pauseText = new DisplayText();
        this.pauseText.setAlign(TextAlign.CENTER)
            .setBaseLine(TextBaseLine.MIDDLE)
            .setColor('#55f')
            .setFontFace('spaceFont')
            .setFontSize(50)
            .setText('Paused')
            .setPosition(game.center);
    }

    draw(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = 'rgba(0,0,0,.3)';
        ctx.fillRect(0,0,this.game.width,this.game.height);
        this.pauseText.draw(ctx);
    }

    init(): void {
        this.pauseText.init();
    }

    update(e: UpdateEvent): void {
        this.pauseText.update(e);
    }

}
