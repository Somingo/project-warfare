import {Component, OnInit} from '@angular/core';
import {forEach, map, times} from 'lodash';
import {loadMapFromLocalStorage, SavableMap, SavableTile, saveMapToLocalStorage} from '../game/MultiLayerMap';
import {BASIC_MAP_TILE_SPRITE_SHEET} from '../game/spriteSheets';

@Component({
    selector: 'app-map-editor',
    templateUrl: './map-editor.component.html',
    styleUrls: ['./map-editor.component.scss']
})
export class MapEditorComponent implements OnInit {

    public selectedTile: string = null;

    public spriteSheetDescriptor = BASIC_MAP_TILE_SPRITE_SHEET;
    public spriteNames = map(this.spriteSheetDescriptor.imageDescriptors, (v, k) => k);

    public map: string[][][] = null;

    public selectedLayer = 0;

    public layers = 3;
    public height = 10;
    public width = 20;
    public layerVisibility = {};

    constructor() {
    }

    save() {
        const savedMap: SavableMap = {
            layers: this.layers,
            height: this.height,
            width: this.width,
            tiles: [],
            charLayerIndex: 0,
            collectibleLayerIndex: 0,
            floorLayerIndex: 2,
            raster: 70
        };

        forEach(this.map, (layer: string[][], iLayer) =>
            forEach(layer, (row: string[], iRow) =>
                forEach(row, (cell: string, iCol) => {
                    if (cell !== 'CLEAR') {
                        savedMap.tiles.push({
                            n: cell,
                            l: iLayer,
                            y: iRow,
                            x: iCol
                        });
                    }
                }))
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
        forEach(o.tiles, (item: SavableTile) => this.map[item.l][item.y][item.x] = item.n);
    }

    selectLayer(index) {
        this.selectedLayer = index;
    }

    ngOnInit() {
        this.initMap();
        this.load();
    }

    initMap() {
        this.selectedTile = 'CLEAR';
        this.map = times(this.layers, () => times(this.height, () => times(this.width, () => this.selectedTile)));
    }

    selectTile(tileOption: string) {
        this.selectedTile = tileOption;
    }

    setTile(iLayer: number, iRow: number, iCell: number, selectedTile: string) {
        this.map[iLayer][iRow][iCell] = selectedTile;
    }

    setLayerVisibility(i: number) {
        this.layerVisibility[i] = !this.layerVisibility[i];
    }
}
