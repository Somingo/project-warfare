import {Sprite} from '../engine/Sprite';
import {UpdateEvent} from '../engine/UpdateEvent';
import {MAP_TILE_SET} from './MapTileSet';
import {Tile} from '../engine/tile/Tile';

type MapElement = { x: number, y: number, name: string };

export class PlatformerMap implements Sprite {

    tiles: Tile[] = [];

    constructor() {
        this.load();
    }

    load() {
        const mapString = window.localStorage.getItem('SAVED_MAP');
        const loadedMapElements: MapElement[] = JSON.parse(mapString);
        this.tiles = loadedMapElements.map(tile => MAP_TILE_SET.getTile(tile.name, tile.x * 70, tile.y * 70));
    }


    draw(ctx: CanvasRenderingContext2D): void {
        this.tiles.forEach(t => t.draw(ctx));
    }

    init(): void {
        this.tiles.forEach(t => t.init());
    }

    update(e: UpdateEvent): void {
        this.tiles.forEach(t => t.update(e));
    }

}
