import {TileOptions} from './TileOptions';

export class TileSetOptions {
    url: string;
    tileOptions: TileOptions[];

    constructor(url: string, tileOptions: TileOptions[]) {
        this.url = url;
        this.tileOptions = tileOptions;
    }

    static fromObject(o: any): TileSetOptions {
        return new TileSetOptions(
            o['url'],
            o['tiles'].map((t: any) => TileOptions.fromObject(t))
        );
    }

    getTileOptionByName(name: string): TileOptions {
        return this.tileOptions.filter(t => t.name === name)[0];
    }
}
