import {Shape} from './Shape';
import {Vector} from '../Vector';

export class Rectangle implements Shape {

    position: Vector;
    size: Vector;

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
        return new Vector(this.position.x + this.size.x, this.position.y + this.size.y);
    }

    get center(): Vector {
        return new Vector(this.position.x + this.size.x / 2, this.position.y + this.size.y / 2);
    }

    constructor(position: Vector, size: Vector) {
        this.position = position;
        this.size = size;
    }

    getType(): string {
        return "NOT_ROTATED_RECTANGLE";
    }


}