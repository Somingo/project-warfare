import Vector from "./vector";

export default class Rectangle {
    topLeft: Vector;
    bottomRight: Vector;
    topRight: Vector;
    bottomLeft: Vector;

    constructor(topLeft: Vector, bottomRight: Vector) {
        this.topLeft = topLeft;
        this.bottomRight = bottomRight;
        this.topRight = Vector.create(bottomRight.x, topLeft.y);
        this.bottomLeft = Vector.create(topLeft.x, bottomRight.y);
    }

    isInsideVectorX(v: Vector): boolean {
        return this.topLeft.x < v.x && this.bottomRight.x > v.x;
    }

    isInsideX(v: Rectangle): boolean {
        return this.topLeft.x < v.topLeft.x && this.bottomRight.x > v.bottomRight.x;
    }

    isInsideVectorY(v: Vector): boolean {
        return this.topLeft.y < v.y && this.bottomRight.y > v.y;
    }

    isInsideVector(v: Vector): boolean {
        return this.isInsideVectorX(v) && this.isInsideVectorY(v);
    }

    isInsideY(v: Rectangle): boolean {
        return this.topLeft.y < v.topLeft.y && this.bottomRight.y > v.bottomRight.y;
    }

    isInside(v: Rectangle): boolean {
        return this.isInsideX(v) && this.isInsideY(v);
    }

    hasCollision(v: Rectangle): boolean {
        return (
            this.isInsideVector(v.bottomRight) ||
            this.isInsideVector(v.topLeft) ||
            this.isInsideVector(v.bottomLeft) ||
            this.isInsideVector(v.topRight) ||
            v.isInsideVector(this.bottomRight) ||
            v.isInsideVector(this.topLeft) ||
            v.isInsideVector(this.bottomLeft) ||
            v.isInsideVector(this.topRight)
        );
    }
}
