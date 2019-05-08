import {Shape} from './Shape';
import {Point} from './Point';

export class Circle implements Shape {
  static shapeName = "CIRCLE";

  center: Point;
  radius: number;

  get x(): number {
    return this.center.x;
  }

  get y(): number {
    return this.center.y;
  }

  constructor(center: Point, radius: number) {
    this.center = center;
    this.radius = radius;
  }

  getType(): string {
    return shapeName;
  }
}
