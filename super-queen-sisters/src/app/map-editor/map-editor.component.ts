import {Component, OnInit} from '@angular/core';
import {TileSetOptions} from "../engine/tile/TileSetOptions";
// @ts-ignore
import tileSet from '../game/tileset.json';
import {TileOptions} from "../engine/tile/TileOptions";
import {filter, forEach, times} from 'lodash';
import {loadMapFromLocalStorage, SavableMap, SavableTile, saveMapToLocalStorage} from "../game/MultiLayerMap";

@Component({
  selector: 'app-map-editor',
  templateUrl: './map-editor.component.html',
  styleUrls: ['./map-editor.component.scss']
})
export class MapEditorComponent implements OnInit {

  public selectedTile: TileOptions = null;

  public tileSetOptions = TileSetOptions.fromObject(tileSet);

  public map: TileOptions[][][] = null;

  public selectedLayer = 0;

  public layers = 3;
  public height = 10;
  public width = 20;
  public layerVisibility = {};

  constructor() {
  }

  save() {
    const savedMap: SavableMap = {layers: this.layers, height: this.height, width: this.width, tiles: []};

    forEach(this.map, (layer: TileOptions[][], iLayer) =>
      forEach(layer, (row: TileOptions[], iRow) =>
        forEach(filter(row, c => c.name != 'CLEAN'), (cell: TileOptions, iCol) =>
          savedMap.tiles.push({
            n: cell.name,
            l: iLayer,
            y: iRow,
            x: iCol
          })))
    );

    saveMapToLocalStorage(savedMap);
  }

  load() {
    const o = loadMapFromLocalStorage();
    this.layers = o.layers;
    times(this.layers, i => this.layerVisibility[i] = true);
    this.width = o.width;
    this.height = o.height;
    this.initMap();
    forEach(o.tiles, ((item: SavableTile) => this.map[item.l][item.y][item.x] = this.tileSetOptions.getTileOptionByName(item.n)));
  }

  selectLayer(index) {
    this.selectedLayer = index;
  }

  ngOnInit() {
    this.initMap();
  }

  initMap() {
    this.selectedTile = this.tileSetOptions.tileOptions[0];
    this.map = times(this.layers, () => times(this.height, () => times(this.width, () => this.selectedTile)));
  }

  selectTile(tileOption: TileOptions) {
    this.selectedTile = tileOption;
  }

  setTile(iLayer: number, iRow: number, iCell: number, selectedTile: TileOptions) {
    this.map[iLayer][iRow][iCell] = selectedTile;
  }

  setLayerVisibility(i: number) {
    this.layerVisibility[i] = !this.layerVisibility[i];
  }
}
