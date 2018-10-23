import {Sprite} from './engine/Sprite';
import {UpdateEvent} from './engine/UpdateEvent';
import {FpsMeter} from './engine/FpsMeter';
import {Paddle} from './Paddle';
import {Ball} from './Ball';
import {Rectangle} from './engine/collision/Rectangle';
import {Vector} from './engine/Vector';
import {Block} from './Block';
import {Keys} from './engine/Keys';
import {Point} from './engine/collision/Point';
import {LevelText} from './LevelText';
import {ScoreDisplay} from './ScoreDisplay';
import * as _ from 'lodash';
import {BallCounter} from './BallCounter';
import {DisplayText} from './engine/DisplayText';
import {TextAlign} from './engine/TextAlign';
import {TextBaseLine} from './engine/TextBaseLine';

export class Game implements Sprite {

    renderHitBoxes: boolean = false;
    lastH = false;
    lastU = false;

    balls = 2;

    scoreBase = 10;
    scoreMultiplier = 1;
    scoreLevelMultiplier = 1;
    score = 0;
    scoreDisplay: ScoreDisplay;

    width: number;
    height: number;

    sprites: Sprite[] = [];

    // named Sprites
    paddle: Paddle;
    ball: Ball;
    fpsMeter: FpsMeter;

    hitBoxToBall: Rectangle;
    blocks: Block[] = [];

    bg: HTMLImageElement;

    levelText: LevelText;
    level = 0;

    ballCounter: BallCounter;
    ballLost: LevelText;


    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
        this.fpsMeter = new FpsMeter();
        this.scoreDisplay = new ScoreDisplay(this);
        this.ballCounter = new BallCounter(this);
        this.ballLost = new LevelText(`Ball lost!`);

        this.levelUp();
    }

    levelUp() {
        this.balls++;
        this.level++;
        this.scoreLevelMultiplier = 1 + (this.level - 1) / 5;
        this.scoreMultiplier = this.scoreLevelMultiplier;
        this.levelText = new LevelText(`Level ${this.level}`);
        this.sprites.length = 0;
        this.sprites.push(this.levelText);
        this.sprites.push(this.scoreDisplay);
        this.sprites.push(this.ballCounter);
    }

    level1(game: Game): Block[] {
        const blocks = [];
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 5; j++) {
                blocks.push(new Block(new Vector(i * 80, j * 40 + 100), new Vector(80, 40), game));
            }
        }

        return blocks;
    }

    createNewBall() {
        this.ball = new Ball(this, new Point(this.width / 2, this.height - 150));
        this.hitBoxToBall = new Rectangle(
            new Vector(this.ball.radius, this.ball.radius),
            new Vector(this.width - 2 * this.ball.radius, this.height - 2 * this.ball.radius));
    }

    initLevel(blockInitCallbck: (game: Game) => Block[]) {
        this.paddle = new Paddle(this);
        this.createNewBall();

        this.blocks = blockInitCallbck(this);

        this.sprites.length = 0;
        this.sprites.push(this.paddle);
        this.sprites.push(this.ballCounter);
        this.sprites.push(this.ball);
        this.blocks.forEach(block => this.sprites.push(block));
        this.sprites.push(this.scoreDisplay);

        this.sprites.forEach(sprite => sprite.init());
    }

    init(): void {
        this.bg = new Image();
        this.bg.src = '/assets/bg.jpg';
        this.sprites.forEach(sprite => sprite.init());
    }

    handleHitBoxToggle(updateEvent: UpdateEvent) {
        if (updateEvent.keyMap[Keys.h] && !this.lastH) {
            this.renderHitBoxes = !this.renderHitBoxes;
        }
        this.lastH = updateEvent.keyMap[Keys.h];
    }

    handleLevelUpCheat(updateEvent: UpdateEvent) {
        if (updateEvent.keyMap[Keys.u] && !this.lastU) {
            this.levelUp();
        }
        this.lastU = updateEvent.keyMap[Keys.u];
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
            this.initLevel(this.level1);
        }
    }

    update(updateEvent: UpdateEvent): void {
        // handle hit box toggle
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

    draw(ctx: CanvasRenderingContext2D): void {
        ctx.drawImage(this.bg, 0, 0);
        this.sprites.forEach(sprite => sprite.draw(ctx));
        if (this.renderHitBoxes) {
            ctx.strokeStyle = '#fff';
            ctx.strokeRect(this.hitBoxToBall.x, this.hitBoxToBall.y, this.hitBoxToBall.width, this.hitBoxToBall.height);
        }
        this.fpsMeter.draw(ctx);
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

    removeSprite(sprite:Sprite) {
        _.pull(this.sprites,sprite);
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