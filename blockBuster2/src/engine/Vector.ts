export class Vector {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    static getRandomVector():Vector {
        return new Vector(Math.random(), Math.random());
    }

    clone(): Vector {
        return new Vector(this.x,this.y);
    }

    length():number {
        return Math.sqrt(this.x*this.x+this.y*this.y);
    }

    add(v:Vector):Vector {
        this.x += v.x;
        this.y += v.y;
        return this;
    }

    divideWithConst(c:number):Vector {
        this.x /= c;
        this.y /= c;
        return this;
    }

    getUnit():Vector {
        return this.clone().divideWithConst(this.length());
    }
}