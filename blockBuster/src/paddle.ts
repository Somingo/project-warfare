import GameObject from "./gameObject";
import Vector from "./vector";
import Game from "./game";
import Rectangle from "./rectangle";
import Colors from "./colors";
import {KeyCodes} from "./keyCodes";


export default class Paddle implements GameObject {
    position: Vector;
    size: Vector = new Vector(150, 150);
    game: Game;

    constructor(game: Game) {
        this.game = game;
        this.position = new Vector(
            game.size.x / 2 - this.size.x / 2,
            game.size.y - this.size.y + 110,
        );
    }

    speed: number = 200;

    color: string = Colors.BLUE;

    get anchor(): Vector {
        return this.position.clone().add(this.size.clone().divideConst(2));
    }

    get bound(): Rectangle {
        return new Rectangle(this.position, this.position.clone().add(this.size));
    }

    update(deltaTime: number, keyMap: { [p: number]: boolean }) {
        const speedVector: Vector = new Vector(0, 0);
        if (keyMap[KeyCodes.LEFT] === true) {
            speedVector.x -= this.speed;
        }
        if (keyMap[KeyCodes.RIGHT] === true) {
            speedVector.x += this.speed;
        }
        this.position.add(speedVector.divideConst(deltaTime));
        if (this.position.x < 0) this.position.x = 0;
        if (this.position.x > this.game.size.x - this.size.x) this.position.x = this.game.size.x - this.size.x;
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.position.x, this.position.y, this.size.x, this.size.y);
    }
}
