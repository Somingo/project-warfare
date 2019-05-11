import {Shape} from './Shape';
import {Vector} from '../Vector';
import {Line} from './Line';

export class Rectangle implements Shape {

    static shapeName = 'NOT_ROTATED_RECTANGLE';

    position: Vector;
    size: Vector;
    S;

    constructor(position: Vector, size: Vector) {
        this.position = position;
        this.size = size;
    }

    get x(): number {
        return this.position.x;
    }

    get y(): number {
        return this.position.y;
    }

    get width(): number {
        return this.size.x;
    }

    get height(): number {
        return this.size.y;
    }

    get bottomRight(): Vector {
        return this.position.clone().addY(this.height).addX(this.width);
    }

    get topLeft(): Vector {
        return this.position.clone();
    }

    get bottomLeft(): Vector {
        return this.position.clone().addY(this.height);
    }

    get topRight(): Vector {
        return this.position.clone().addX(this.width);
    }

    get center(): Vector {
        return new Vector(this.position.x + this.size.x / 2, this.position.y + this.size.y / 2);
    }

    static fromNumbers(x1: number, y1: number, x2: number, y2: number): Rectangle {
        return new Rectangle(new Vector(Math.min(x1, x2), Math.min(y1, y2)), new Vector(Math.max(x1, x2), Math.max(y1, y2)));
    }

    getType(): string {
        return Rectangle.shapeName;
    }

    getLines(): Line[] {
        return [Line.fromVectors(this.topLeft, this.topRight)
            , Line.fromVectors(this.topLeft, this.bottomLeft)
            , Line.fromVectors(this.bottomRight, this.topRight)
            , Line.fromVectors(this.bottomLeft, this.bottomRight)];
    }

}
