export default class Vector {
    x: number;
    y: number;

    constructor(x?: number, y?: number) {
        this.x = x;
        this.y = y;
    }

    get length(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    get unit(): Vector {
        return this.clone().divideConst(this.length);
    }

    public static create(x: number, y: number): Vector {
        const res = new Vector();
        res.x = x;
        res.y = y;
        return res;
    }

    clone(): Vector {
        return Vector.create(this.x, this.y);
    }

    add(point: Vector): Vector {
        this.x += point.x;
        this.y += point.y;
        return this;
    }

    sub(point: Vector): Vector {
        this.x -= point.x;
        this.y -= point.y;
        return this;
    }

    divideConst(c: number): Vector {
        this.x /= c;
        this.y /= c;
        return this;
    }
}
