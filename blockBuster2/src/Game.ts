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

export class Game implements Sprite {

    renderHitBoxes: boolean = false;
    lastH = false;

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
    level = 1;


    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
        this.fpsMeter = new FpsMeter();
        this.levelText = new LevelText(`Level ${this.level}`);
        this.scoreDisplay = new ScoreDisplay(this);

        this.sprites.push(this.fpsMeter);
        this.sprites.push(this.levelText);
        this.sprites.push(this.scoreDisplay);
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

    initLevel(blockInitCallbck: (game: Game) => Block[]) {
        this.paddle = new Paddle(this);
        this.ball = new Ball(this, new Point(this.width / 2, this.height - 150));
        this.hitBoxToBall = new Rectangle(
            new Vector(this.ball.radius, this.ball.radius),
            new Vector(this.width - 2 * this.ball.radius, this.height - 2 * this.ball.radius));

        this.blocks = blockInitCallbck(this);

        this.sprites = [];

        this.sprites.push(this.fpsMeter);
        this.sprites.push(this.paddle);
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

    update(updateEvent: UpdateEvent): void {
        // handle hit box toggle
        if (updateEvent.keyMap[Keys.h] && !this.lastH) {
            this.renderHitBoxes = !this.renderHitBoxes;
        }
        this.lastH = updateEvent.keyMap[Keys.h];

        // if level animation finished
        if (this.levelText.stage === 4) {
            this.levelText.stage++;
            this.initLevel(this.level1);
        }

        // update sprites on scene
        this.sprites.forEach(sprite => sprite.update(updateEvent));
    }

    draw(ctx: CanvasRenderingContext2D): void {
        ctx.drawImage(this.bg, 0, 0);
        this.sprites.forEach(sprite => sprite.draw(ctx));
        if (this.renderHitBoxes) {
            ctx.strokeStyle = '#fff';
            ctx.strokeRect(this.hitBoxToBall.x, this.hitBoxToBall.y, this.hitBoxToBall.width, this.hitBoxToBall.height);
        }
    }

}