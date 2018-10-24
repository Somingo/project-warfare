import GameObject from "./gameObject";
import Vector from "./vector";
import Rectangle from "./rectangle";
import Game from "./game";
import Bounded from "./bounded";
import Brick from "~brick";

const SPEED = 72;

export default class Ball implements GameObject, Bounded {
    size: Vector = Vector.create(16, 16);
    position: Vector = Vector.create(200, 300);
    speed: Vector = Vector.create(50, 50);
    game: Game;
    image: HTMLElement;
    ping: HTMLAudioElement = new Audio("../assets/sound/ping.mp3");
    pong: HTMLAudioElement = new Audio("../assets/sound/pong.mp3");

//    ping2: HTMLAudioElement = new Audio("../assets/sound/ping.mp3");

    get anchor(): Vector {
        return this.position.clone().add(this.size.clone().divideConst(2));
    }

    constructor(game: Game) {
        this.game = game;
        this.image = document.getElementById("ball");
        this.ping.load();
        this.pong.load();
    }

    get bounds(): Rectangle {
        return new Rectangle(this.position, this.position.clone().add(this.size));
    }

    update(deltaTime: number) {
        this.position.add(this.speed.clone().divideConst(deltaTime));

        if (!this.game.bounds.isInsideX(this.bounds)) {
            this.speed.x = -this.speed.x;
            this.position.add(this.speed.clone().divideConst(deltaTime));
            //this.ping.play();
        }

        if (!this.game.bounds.isInsideY(this.bounds)) {
            this.speed.y = -this.speed.y;
            this.position.add(this.speed.clone().divideConst(deltaTime));
            //this.ping2.play();
        }

        if (this.game.paddle.bound.hasCollision(this.bounds)) {
            this.speed = this.anchor.add(this.game.paddle.anchor.divideConst(-1)).unit.divideConst(1 / SPEED);
        }

        this.game.bricks = this.game.bricks.filter((value: Brick) => {
            const res = value.hasCollision(this.bounds);
            if (res) {

            }
            return !res;
        });

    }

    handleHitPaddle(deltaTime: number) {
        const pB = this.game.paddle.bound;
        const b = this.bounds;

        let c =
            "" +
            (pB.isInsideVector(b.topLeft) ? "T" : "F") +
            (pB.isInsideVector(b.topRight) ? "T" : "F") +
            (pB.isInsideVector(b.bottomLeft) ? "T" : "F") +
            (pB.isInsideVector(b.bottomRight) ? "T" : "F");
        if (c !== "FFFF")
            if (c === "TFFF" || c === "FTFF" || c === "FFTF" || c === "FFFT") {
                this.speed.y = 0 - this.speed.y;
                this.speed.x = 0 - this.speed.x;
                this.position.add(this.speed.clone().divideConst(deltaTime));
            } else if (c === "TTFF" || c === "FFTT") {
                this.speed.y = 0 - this.speed.y;
                this.position.add(this.speed.clone().divideConst(deltaTime));
            } else {
                this.speed.x = 0 - this.speed.x;
                this.position.add(this.speed.clone().divideConst(deltaTime));
            }
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.drawImage(
            // @ts-ignore
            this.image,
            this.position.x,
            this.position.y,
            this.size.x,
            this.size.y
        );
    }
}
