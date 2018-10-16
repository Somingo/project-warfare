import GameObject from "./gameObject";
import Vector from "./vector";
import FpsInfo from "./fpsInfo";
import Paddle from "./paddle";
import Ball from "./ball";
import Rectangle from "./rectangle";
import Bounded from "./bounded";
import InputHandler from "./inputHandler";
import Brick from "./brick";

export default class Game implements GameObject, Bounded {
    position: Vector = Vector.create(0, 0);
    size: Vector;
    gameObjects: GameObject[] = [];
    bricks: GameObject[] = [];

    paddle: Paddle;
    ball: Ball;
    inputHandler: InputHandler;
    fpsInfo: FpsInfo;

    constructor(canvasSize: Vector) {
        this.size = canvasSize;
        this.inputHandler = new InputHandler()
    }

    get bounds(): Rectangle {
        return new Rectangle(this.position, this.position.clone().add(this.size));
    }

    init() {
        this.paddle = new Paddle(this);
        this.ball = new Ball(this);
        this.fpsInfo = new FpsInfo();
        this.gameObjects.push(this.fpsInfo);
        this.gameObjects.push(this.paddle);
        this.gameObjects.push(this.ball);

        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 3; j++) {
                this.bricks.push(new Brick(new Vector(i * 80, j * 40 + 150)));
            }
        }
    }

    update(deltaTime: number) {
        this.gameObjects.forEach(g => g.update(deltaTime, this.inputHandler.keyMap));
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.clearRect(0, 0, this.size.x, this.size.y);
        this.gameObjects.forEach(g => g.draw(ctx));
        this.bricks.forEach(g => g.draw(ctx));
    }
}
