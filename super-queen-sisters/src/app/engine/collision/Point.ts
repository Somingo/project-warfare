import {Vector} from '../Vector';
import {Shape} from './Shape';

export class Point extends Vector implements Shape {
  static shapeName = "Point";


  getType(): string {
        return Point.shapeName;
    }

    static fromVector(v:Vector):Point {
        return new Point(v.x,v.y);
    }
}
