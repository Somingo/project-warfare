import {Vector} from '../Vector';
import {Shape} from './Shape';

export class Point extends Vector implements Shape {
    getType(): string {
        return "Point";
    }

    static fromVector(v:Vector):Point {
        return new Point(v.x,v.y);
    }
}