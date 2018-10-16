import GameObject from "./gameObject";
import Rectangle from "./rectangle";
import Vector from "./vector";
import Colors from "./colors";

export default class Brick extends Rectangle implements GameObject {

    //color:string;
    static colors: string[] = [Colors.RED, Colors.BLUE, Colors.GREEN];
    color: string;
    size: Vector;

    constructor(topLeft: Vector, size: Vector = new Vector(80, 40)) {
        super(topLeft, topLeft.clone().add(size));
        this.size = size;
        this.color = Brick.colors[Math.floor(Math.random() * 3)];
    }

    get position(): Vector {
        return this.topLeft;
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.position.x, this.position.y, this.size.x, this.size.y);
    }

    update(deltaTime: number) {
    }
}
