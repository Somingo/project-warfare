import GameObject from "./gameObject";
import Vector from "./vector";
import FpsInfo from "./fpsInfo";
import Paddle from "./paddle";
import Ball from "./ball";
import Rectangle from "./rectangle";
import Bounded from "./bounded";

export default class Game implements GameObject, Bounded {
    position: Vector = Vector.create(0, 0);
    size: Vector;
    gameObjects: GameObject[] = [];

    paddle: Paddle;
    ball: Ball;

    constructor(canvasSize: Vector) {
        this.size = canvasSize;
    }

    get bounds(): Rectangle {
        return new Rectangle(this.position, this.position.clone().add(this.size));
    }

    init() {
        this.paddle = new Paddle(this);
        this.ball = new Ball(this);
        this.gameObjects.push(new FpsInfo());
        this.gameObjects.push(this.paddle);
        this.gameObjects.push(this.ball);
    }

    update(deltaTime: number) {
        this.gameObjects.forEach(g => g.update(deltaTime));
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.clearRect(0, 0, this.size.x, this.size.y);
        this.gameObjects.forEach(g => g.draw(ctx));
    }
}
