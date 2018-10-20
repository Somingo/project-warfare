import {Shape} from './Shape';
import {Point} from './Point';

export class Circle implements Shape {
    center: Point;
    radius: number;

    constructor(center: Point, radius: number) {
        this.center = center;
        this.radius = radius;
    }

    getType(): string {
        return "CIRCLE";
    }
}