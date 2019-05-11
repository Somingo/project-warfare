import {Sprite} from '../engine/Sprite';
import {UpdateEvent} from '../engine/UpdateEvent';
// @ts-ignore
import {times} from 'lodash';
import {ImageSpriteSheet} from '../engine/ImageSpriteSheet';
import {MapTile} from './MapTile';

export interface SavableTile {
    n: string;
    l: number;
    x: number;
    y: number;
}

export interface SavableMap {
    tiles: SavableTile[];
    layers: number;
    width: number;
    height: number;
    raster: number;
    charLayerIndex: number;
    floorLayerIndex: number;
    collectibleLayerIndex: number;
}

export function saveMapToLocalStorage(map: SavableMap, name = 'DefaultMapName') {
    localStorage.setItem(name, JSON.stringify(map));
}

export function loadMapFromLocalStorage(name = 'DefaultMapName'): SavableMap {
    return JSON.parse(localStorage.getItem(name)) as SavableMap;
}

export class MultiLayerMap implements Sprite {
    private raster = 70;
    private layers: MapTile[][];
    private layerCount: number;
    private floorLayerIndex: number;

    public width = 0;
    public height = 0;

    public get floorLayer(): MapTile[] {
        return this.layers[this.floorLayerIndex];
    }

    constructor(private spriteSheet: ImageSpriteSheet) {

    }

    draw(ctx: CanvasRenderingContext2D): void {
        this.layers.forEach(layer => layer.forEach(tile => tile.draw(ctx)));
    }

    init(): void {
        const savedMap: SavableMap = loadMapFromLocalStorage();
        this.width = savedMap.width * this.raster;
        this.height = savedMap.height * this.raster;
        this.floorLayerIndex = savedMap.floorLayerIndex;
        this.layerCount = savedMap.layers;
        this.layers = savedMap.tiles.reduce((prevValue: MapTile[][], value: SavableTile) => {
            prevValue[value.l].push(new MapTile(this.spriteSheet.get(value.n), value.x * this.raster, value.y * this.raster));
            return prevValue;
        }, times(this.layerCount, () => []));
        this.layers.forEach(layer => layer.forEach((tile: Sprite) => tile.init()));

    }

    update(e: UpdateEvent): void {
        this.layers.forEach(layer => layer.forEach(tile => tile.update(e)));
    }

}
