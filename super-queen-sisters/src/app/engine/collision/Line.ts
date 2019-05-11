import {Shape} from './Shape';
import {Point} from './Point';
import {Vector} from '../Vector';

export class Line implements Shape {
    static shapeName = 'LINE';

    point1: Point;
    point2: Point;

    constructor(p1: Point, p2: Point) {
        this.point1 = p1;
        this.point2 = p2;
    }

    static fromVectors(v1: Vector, v2: Vector) {
        return new Line(new Point(v1.x, v1.y), new Point(v2.x, v2.y));
    }

    getType(): string {
        return Line.shapeName;
    }
}
