import GameObject from "./gameObject";
import Vector from "./vector";

export default class FpsInfo implements GameObject {
    position: Vector = Vector.create(12, 12);
    value: number = 0;

    constructor() {
    }

    update(timeStamp: number) {
        if (!timeStamp) return;
        this.value = Math.floor(1000 / timeStamp);
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.strokeText(`${this.value} fps`, this.position.x, this.position.y);
    }
}
