import {Rectangle} from './Rectangle';
import {Point} from './Point';
import {Circle} from './Circle';

export class Collision {

    static isValueBetween(value: number, lowerNumber: number, upperNumber: number): boolean {
        return lowerNumber < value && value < upperNumber;
    }

    static isOnInterval(value: number, intervalStart: number, intervalLength: number): boolean {
        return Collision.isValueBetween(value, intervalStart, intervalStart + intervalLength);
    }

    static collisionRectangleToPoint(rect: Rectangle, point: Point): boolean {
        return rect.x <= point.x
            && rect.x + rect.width >= point.x
            && rect.y <= point.y
            && rect.y + rect.width >= point.y;
    }

    static collisionPointToRectangle(point: Point, rect: Rectangle): boolean {
        return this.collisionRectangleToPoint(rect, point);
    }

    static collisionCircleToCircle(circle1: Circle, circle2: Circle): boolean {
        return Math.sqrt((circle1.x - circle2.x) * (circle1.x - circle2.x) + (circle1.y - circle2.y) * (circle1.y - circle2.y)) - circle1.radius - circle2.radius <= 0;
    }
}
