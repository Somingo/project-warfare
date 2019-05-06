import {Rectangle} from './Rectangle';
import {Point} from './Point';
import {Circle} from './Circle';
import {Line} from './Line';
import {Vector} from "../Vector";

export class Collision {

  static isValueBetween(value: number, lowerNumber: number, upperNumber: number): boolean {
    return Math.min(lowerNumber, upperNumber) < value && value < Math.max(lowerNumber, upperNumber);
  }

  static isOnInterval(value: number, intervalStart: number, intervalLength: number): boolean {
    return Collision.isValueBetween(value, intervalStart, intervalStart + intervalLength);
  }

  static collisionRectangleToPoint(rect: Rectangle, point: Point): boolean {
    return Collision.isOnInterval(point.x, rect.x, rect.width)
      && Collision.isOnInterval(point.y, rect.y, rect.height);
  }

  static collisionPointToRectangle(point: Point, rect: Rectangle): boolean {
    return Collision.collisionRectangleToPoint(rect, point);
  }


  static collisionRectangleToRectangle(rect1: Rectangle, rect2: Rectangle): boolean {
    return Collision.collisionRectangleToVector(rect1, rect2.bottomLeft) ||
      this.collisionRectangleToVector(rect1, rect2.bottomRight) ||
      this.collisionRectangleToVector(rect1, rect2.topLeft) ||
      this.collisionRectangleToVector(rect1, rect2.topRight);
  }

  static collisionCircleToCircle(circle1: Circle, circle2: Circle): boolean {
    return Math.sqrt((circle1.x - circle2.x) * (circle1.x - circle2.x) + (circle1.y - circle2.y) * (circle1.y - circle2.y)) - circle1.radius - circle2.radius <= 0;
  }

  static intersectionOfLines(l1: Line, l2: Line): Point {
    const x1 = l1.point1.x;
    const x2 = l1.point2.x;
    const x3 = l2.point1.x;
    const x4 = l2.point2.x;
    const y1 = l1.point1.y;
    const y2 = l1.point2.y;
    const y3 = l2.point1.y;
    const y4 = l2.point2.y;
    const xa = (x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4);
    const b = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
    const ya = (x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4);

    return b === 0 ? null : new Point(xa / b, ya / b);
  }

  static intersectionOfLineSegments(l1: Line, l2: Line): Point {
    const p = Collision.intersectionOfLines(l1, l2);
    if (p == null) return null;
    if (Collision.isValueBetween(p.x, l1.point1.x, l1.point2.x)
      && Collision.isValueBetween(p.x, l2.point1.x, l2.point2.x)
      && Collision.isValueBetween(p.x, l1.point1.x, l1.point2.x)
      && Collision.isValueBetween(p.x, l2.point1.x, l2.point2.x)) {
      return p;
    } else return null;

  }

  static collisionRectangleToVector(rect: Rectangle, point: Vector) {
    return Collision.isOnInterval(point.x, rect.x, rect.width)
      && Collision.isOnInterval(point.y, rect.y, rect.height);
  }
}
