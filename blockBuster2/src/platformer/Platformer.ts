import {Sprite} from '../engine/Sprite';
import {UpdateEvent} from '../engine/UpdateEvent';
import {Parallax} from '../engine/parallax/Parallax';
import {CITY} from './Paralaxes';
import {PlatformerMap} from './PlatformerMap';
import {Player} from './Player';
import {MAP_TILE_SET} from './MapTileSet';

export class Platformer implements Sprite {

    bg: Parallax = new Parallax(CITY.layerOptions);
    map: PlatformerMap = new PlatformerMap();
    player = new Player();

    sprites: Sprite[];

    constructor() {
        this.sprites = [this.bg, this.map, this.player];
    }

    draw(ctx: CanvasRenderingContext2D): void {
        this.sprites.forEach(s => s.draw(ctx));
    }

    init(): void {
        MAP_TILE_SET.init();
        this.sprites.forEach(s => s.init());
    }

    update(e: UpdateEvent): void {
        this.sprites.forEach(s => s.update(e));
    }
}
