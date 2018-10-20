import {Shape} from './Shape';
import {Vector} from '../Vector';

export class Rectangle implements Shape {

    position: Vector;
    size: Vector;

    constructor(position: Vector, size: Vector) {
        this.position = position;
        this.size = size;
    }

    getType(): string {
        return "NOT_ROTATED_RECTANGLE";
    }

    getBottomLeft(): Vector {
        return new Vector(this.position.x + this.size.x, this.position.y + this.size.y);
    }

    getCenter(): Vector {
        return new Vector(this.position.x + this.size.x / 2, this.position.y + this.size.y / 2);
    }

}