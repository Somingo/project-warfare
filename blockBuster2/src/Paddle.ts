import {Sprite} from './engine/Sprite';
import {Rectangle} from './engine/collision/Rectangle';
import {UpdateEvent} from './engine/UpdateEvent';
import {Vector} from './engine/Vector';
import {Game} from './Game';
import {Keys} from './engine/Keys';

export class Paddle extends Rectangle implements Sprite {

    speed: number;
    game: Game;
    color: string;

    constructor(game: Game) {
        const size = new Vector(130, 15);
        super(new Vector(game.width / 2 - size.x / 2, game.height - size.y - 10), size);
        this.speed = 200;
        this.game = game;
        this.color = '#00f';
    }


    draw(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    init(): void {
    }

    update(e: UpdateEvent): void {
        let updateX = 0;
        if (e.keyMap[Keys.leftArrow]) {
            updateX -= this.speed;
        }
        if (e.keyMap[Keys.rightArrow]) {
            updateX += this.speed;
        }
        this.position.x += updateX / e.deltaTime;

        if (this.position.x < 0) this.position.x = 0;
        if (this.bottomRight.x > this.game.width) this.position.x = this.game.width - this.width;
    }

}