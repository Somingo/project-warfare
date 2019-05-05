import {Sprite} from "../engine/Sprite";
import {UpdateEvent} from "../engine/UpdateEvent";
import {TileSetOptions} from "../engine/tile/TileSetOptions";
// @ts-ignore
import tileSet from "./tileset.json";
import {TileSet} from "../engine/tile/TileSet";
import {Tile} from "../engine/tile/Tile";
import {times} from 'lodash';

export type SavableTile = { n: string, l: number, x: number, y: number };
export type SavableMap = { tiles: SavableTile[]; layers: number; width: number; height: number };

export function saveMapToLocalStorage(map: SavableMap, name = 'DefaultMapName') {
  localStorage.setItem(name, JSON.stringify(map));
}

export function loadMapFromLocalStorage(name = 'DefaultMapName'): SavableMap {
  return <SavableMap>JSON.parse(localStorage.getItem(name));
}

export class MultiLayerMap implements Sprite {
  raster= 70;
  private tileSet: TileSet;
  private layerCount: number;
  private layers: Tile[][];

  draw(ctx: CanvasRenderingContext2D): void {
    this.layers.forEach(layer => layer.forEach(tile => tile.draw(ctx)));
  }

  init(): void {
    const savedMap: SavableMap = loadMapFromLocalStorage();
    const tileSetOptions = TileSetOptions.fromObject(tileSet);
    this.tileSet = new TileSet(tileSetOptions);
    this.tileSet.init();
    this.layerCount = savedMap.layers;
    this.layers = savedMap.tiles.reduce((prevValue: Tile[][], value: SavableTile) => {
      prevValue[value.l].push(this.tileSet.getTile(value.n, value.x * this.raster, value.y * this.raster));
      return prevValue;
    }, times(this.layerCount, () => []))
    this.layers.forEach(layer => layer.forEach(tile => tile.init()));

  }

  update(e: UpdateEvent): void {
    this.layers.forEach(layer => layer.forEach(tile => tile.update(e)));
  }

}
