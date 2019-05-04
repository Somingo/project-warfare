export class TileOptions {
    name: string;
    x: number;
    y: number;
    width: number;
    height: number;
    url: string;

    constructor(name: string, x: number, y: number, width: number, height: number, url: string) {
        this.name = name;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.url = url;
    }

    static fromObject(o: any) {
        return new TileOptions(o['n'], o['x'], o['y'], o['w'], o['h'], o['u']);
    }
}
