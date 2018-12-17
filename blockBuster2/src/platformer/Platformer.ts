import {Sprite} from '../engine/Sprite';
import {UpdateEvent} from '../engine/UpdateEvent';
import {Parallax} from '../engine/parallax/Parallax';
import {CITY} from './Paralaxes';
import {TileSet} from '../engine/tile/TileSet';
import {MAP_TILE_SET} from './MapTileSet';
import {PlatformerMap} from './PlatformerMap';

export class Platformer implements Sprite {

    bg: Parallax = new Parallax(CITY.layerOptions);
    tileSet: TileSet = MAP_TILE_SET;
    map: PlatformerMap = new PlatformerMap();

    draw(ctx: CanvasRenderingContext2D): void {
        this.bg.draw(ctx);
        this.map.draw(ctx);
    }

    init(): void {
        this.bg.init();
        this.tileSet.init();
        this.map.init();
    }

    update(e: UpdateEvent): void {
        this.bg.update(e);
        this.map.update(e);
    }
}
