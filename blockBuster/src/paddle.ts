import GameObject from "./gameObject";
import Vector from "./vector";
import Game from "./game";
import Rectangle from "./rectangle";
import Colors from "./colors";


export default class Paddle implements GameObject {
    position: Vector;
    size: Vector = Vector.create(150, 300);
    game: Game;

    color: string = Colors.BLUE;

    constructor(game: Game) {
        this.game = game;
        this.position = Vector.create(
            game.size.x / 2 - this.size.x / 2,
            game.size.y - this.size.y - 10
        );
    }

    get bound(): Rectangle {
        return new Rectangle(this.position, this.position.clone().add(this.size));
    }

    update(deltaTime: number) {
        this.color = this.bound.isInside(this.game.ball.bounds) ? Colors.RED : Colors.BLUE;
        this.color = this.bound.hasCollision(this.game.ball.bounds)
            ? Colors.GREEN
            : this.color;
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.position.x, this.position.y, this.size.x, this.size.y);
    }
}
