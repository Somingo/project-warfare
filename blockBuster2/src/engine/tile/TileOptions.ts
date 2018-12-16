export class TileOptions {
    name: string;
    x: number;
    y: number;
    width: number;
    height: number;

    constructor(name: string, x: number, y: number, width: number, height: number) {
        this.name = name;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    static fromObject(o: any) {
        return new TileOptions(o['n'], o['x'], o['y'], o['w'], o['h']);
    }
}
