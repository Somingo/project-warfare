import {Sprite} from './engine/Sprite';
import {UpdateEvent} from './engine/UpdateEvent';
import {Paddle} from './Paddle';
import {Ball} from './Ball';
import {Rectangle} from './engine/collision/Rectangle';
import {Vector} from './engine/Vector';
import {Block} from './Block';
import {Keys} from './engine/keyboard/Keys';
import {Point} from './engine/collision/Point';
import {LevelText} from './LevelText';
import * as _ from 'lodash';
import {DisplayText} from './engine/sprites/DisplayText';
import {TextAlign} from './engine/sprites/TextAlign';
import {TextBaseLine} from './engine/sprites/TextBaseLine';
import HUD from './hud/HUD';
import Score from './Score';
import Map from './Map';
import {Maps} from './Maps';
import Pause from "./Pause";

export class Game implements Sprite {

    renderHitBoxes: boolean = false;

    balls = 2;

    score: Score;

    width: number;
    height: number;

    sprites: Sprite[] = [];

    // named Sprites
    paddle: Paddle;
    ball: Ball;

    hitBoxToBall: Rectangle;
    blocks: Block[] = [];

    bg: HTMLImageElement;

    levelText: LevelText;
    level = 0;

    ballLost: LevelText;

    hud: HUD;
    isPaused: boolean = false;
    pause:Pause;

    get center(): Vector {
        return new Vector(this.width / 2, this.height / 2);
    }

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
        this.ballLost = new LevelText(`Ball lost!`);
        this.hud = new HUD(this);
        this.score = new Score();
        this.pause = new Pause(this);

        this.levelUp();
    }

    levelUp() {
        this.balls++;
        this.level++;
        this.score.levelUp(this.level);
        this.levelText = new LevelText(`Level ${this.level}`);
        this.sprites.length = 0;
        this.sprites.push(this.levelText);
        this.sprites.push(this.hud);
    }

    createNewBall() {
        this.ball = new Ball(this, new Point(this.width / 2, this.height - 150));
        this.hitBoxToBall = new Rectangle(
            new Vector(this.ball.radius, this.ball.radius),
            new Vector(this.width - 2 * this.ball.radius, this.height - 2 * this.ball.radius));
    }

    initLevel() {
        this.paddle = new Paddle(this);
        this.createNewBall();

        this.blocks = Map.loadMap(this, Maps[0]);

        this.sprites.length = 0;
        this.sprites.push(this.paddle);
        this.sprites.push(this.ball);
        this.blocks.forEach(block => this.sprites.push(block));
        this.sprites.push(this.hud);

        this.sprites.forEach(sprite => sprite.init());
    }

    init(): void {
        this.bg = new Image();
        this.bg.src = '/assets/bg.jpg';
        this.sprites.forEach(sprite => sprite.init());
        this.pause.init();
    }

    handleHitBoxToggle(updateEvent: UpdateEvent) {
        if (updateEvent.keyDown[Keys.h]) {
            this.renderHitBoxes = !this.renderHitBoxes;
        }
    }

    handleLevelUpCheat(updateEvent: UpdateEvent) {
        if (updateEvent.keyDown[Keys.u]) {
            this.levelUp();
        }
    }

    handlePauseToggle(updateEvent: UpdateEvent) {
        if (updateEvent.keyDown[Keys.p]) {
            this.isPaused = !this.isPaused;
        }
    }

    handleBallLostDisplayFinished() {
        if (this.ballLost.stage === 4) {
            this.ballLost.stage++;
            this.createNewBall();
            this.ball.init();
            this.sprites.push(this.ball);
        }
    }

    handleNextLevelDisplayFinished() {
        // if level animation finished
        if (this.levelText.stage === 4) {
            this.levelText.stage++;
            this.initLevel();
        }
    }

    update(updateEvent: UpdateEvent): void {
        // handle hit box toggle
        this.handlePauseToggle(updateEvent);
        if (!this.isPaused) {
            this.handleHitBoxToggle(updateEvent);
            this.handleLevelUpCheat(updateEvent);

            this.handleBallLostDisplayFinished();
            this.handleNextLevelDisplayFinished();


            // update sprites on scene
            this.sprites.forEach(sprite => sprite.update(updateEvent));

            if (this.levelText.stage === 5 && this.blocks.length === 0) {
                this.levelUp();
            }
        }
    }

    draw(ctx: CanvasRenderingContext2D): void {
        ctx.drawImage(this.bg, 0, 0);
        this.sprites.forEach(sprite => sprite.draw(ctx));
        if (this.renderHitBoxes) {
            ctx.strokeStyle = '#fff';
            ctx.strokeRect(this.hitBoxToBall.x, this.hitBoxToBall.y, this.hitBoxToBall.width, this.hitBoxToBall.height);
        }
        if (this.isPaused) this.pause.draw(ctx);
    }

    handleBallLost() {
        this.balls--;
        if (this.balls < 0) {
            this.handleGameOver();
        } else {
            this.removeSprite(this.ball);
            this.ballLost = new LevelText('Ball lost!');
            this.ballLost.displayText.setFontSize(48);
            this.sprites.push(this.ballLost);
        }
    }

    removeSprite(sprite: Sprite) {
        _.pull(this.sprites, sprite);
    }

    handleGameOver() {
        this.sprites.length = 0;
        this.sprites.push((new DisplayText())
            .setAlign(TextAlign.CENTER)
            .setBaseLine(TextBaseLine.MIDDLE)
            .setText('GAME OVER')
            .setPosition(new Vector(400, 300))
            .setFontSize(50)
            .setFontFace('spaceFont')
            .setColor('#f50'));
    }
}
