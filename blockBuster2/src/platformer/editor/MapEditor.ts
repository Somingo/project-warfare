import './MapEditor.css';
import {Div} from './Div';
import {TileOptions} from '../../engine/tile/TileOptions';
import {MAP_TILE_SET_OPTIONS} from '../MapTileSet';
import {TileSetOptions} from '../../engine/tile/TileSetOptions';

export class MapEditor {
    static ID = 'MapEditor';

    element: HTMLDivElement;

    selectedTile: TileOptions;

    constructor() {
        // @ts-ignore
        this.element = document.getElementById(MapEditor.ID);
        if (this.element) {
            document.body.removeChild(this.element);
        }
        this.element = document.createElement('div');
        this.element.id = MapEditor.ID;
        document.body.appendChild(this.element);
        this.init();
    }

    tileSelector(tileOptions: TileOptions, parent: HTMLDivElement | HTMLBodyElement, tSO: TileSetOptions): Div {
        return Div.build(parent).className('selectTile').onClick(() => this.selectedTile = tileOptions).content(`<span style="line-height: ${tileOptions.height}px; flex: 1 1;">${tileOptions.name}</span><span style="display:inline-block; background-image: url(${tSO.url}); width: ${tileOptions.width}px;height: ${tileOptions.height}px;background-repeat: no-repeat;background-position: -${tileOptions.x}px -${tileOptions.y}px"></span>`);
    }

    init() {
        Div.build(this.element).className('leftPane');
        const right = Div.build(this.element).className('rightPane').element;
        MAP_TILE_SET_OPTIONS.tileOptions.map(t => this.tileSelector(t, right, MAP_TILE_SET_OPTIONS));
    }
}
