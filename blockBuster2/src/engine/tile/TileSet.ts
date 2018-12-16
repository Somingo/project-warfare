import {Tile} from './Tile';
import {TileSetOptions} from './TileSetOptions';

export class TileSet {

    tileSetOptions: TileSetOptions;
    spriteSheet: HTMLImageElement;

    constructor(tileSetOptions: TileSetOptions) {
        this.tileSetOptions = tileSetOptions;
    }

    init() {
        if (!this.spriteSheet) {
            this.spriteSheet = new Image();
            this.spriteSheet.src = this.tileSetOptions.url;
        }
    }

    getTile(name: string, x: number, y: number): Tile {
        return new Tile(this, this.tileSetOptions.tileOptions.filter(x => x.name === name)[0], x, y);
    }
}
