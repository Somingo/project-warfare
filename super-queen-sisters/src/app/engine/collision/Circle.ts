import {Shape} from './Shape';
import {Point} from './Point';

export class Circle implements Shape {
    static shapeName = 'CIRCLE';

    center: Point;
    radius: number;

    constructor(center: Point, radius: number) {
        this.center = center;
        this.radius = radius;
    }

    get x(): number {
        return this.center.x;
    }

    get y(): number {
        return this.center.y;
    }

    getType(): string {
        return Circle.shapeName;
    }
}
