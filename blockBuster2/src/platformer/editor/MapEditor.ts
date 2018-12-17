import './MapEditor.css';
import {Div} from './Div';
import {TileOptions} from '../../engine/tile/TileOptions';
import {MAP_TILE_SET_OPTIONS} from '../MapTileSet';
import {TileSetOptions} from '../../engine/tile/TileSetOptions';
import {Table} from './Table';

type MapElement = { x: number, y: number, name: string };

export class MapEditor {
    static ID = 'MapEditor';

    element: HTMLDivElement;

    selectedTile: TileOptions;
    selectedDiv: Div;

    table: Table;

    mapElements: MapElement[][];

    //map: EditorMap = new EditorMap();

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

    selectTile(tileOptions: TileOptions, d: Div) {
        if (this.selectedDiv != null) {
            this.selectedDiv.className('selectTile');
        }
        this.selectedTile = tileOptions;
        this.selectedDiv = d;
        this.selectedDiv.className('selectTile selected');
    }

    cellClick(x: number, y: number) {
        if (!this.selectedTile) return;
        const target = this.table.getCell(x, y);
        this.mapElements[x][y].name = this.selectedTile.name;
        target.style.backgroundImage = `url(${MAP_TILE_SET_OPTIONS.url})`;
        target.style.backgroundPositionX = `-${this.selectedTile.x}px`;
        target.style.backgroundPositionY = `-${this.selectedTile.y}px`;
    }

    tileSelector(tileOptions: TileOptions, parent: HTMLDivElement | HTMLBodyElement, tSO: TileSetOptions): Div {
        return Div.build(parent).className('selectTile').onClick((e: MouseEvent, d: Div) => this.selectTile(tileOptions, d)).content(`<span style="line-height: ${tileOptions.height}px; flex: 1 1;">${tileOptions.name}</span><span style="display:inline-block; background-image: url(${tSO.url}); width: ${tileOptions.width}px;height: ${tileOptions.height}px;background-repeat: no-repeat;background-position: -${tileOptions.x}px -${tileOptions.y}px"></span>`);
    }

    save() {
        console.info('Saving...');
        let data: MapElement[] = [];
        this.mapElements.forEach(x => x.forEach(t => data.push(t)));
        data = data.filter(x => x.name != 'CLEAR');
        window.localStorage.setItem('SAVED_MAP', JSON.stringify(data));
    }

    load() {
        console.info('Loading...');
        const mapString = window.localStorage.getItem('SAVED_MAP');
        const x: MapElement[] = JSON.parse(mapString);
        const clearTileOption = MAP_TILE_SET_OPTIONS.getTileOptionByName('CLEAR');

        this.mapElements.forEach((x) => x.forEach((y) => {
            y.name = clearTileOption.name;
            const target = this.table.getCell(y.y, y.x);
            target.style.backgroundImage = `url(${MAP_TILE_SET_OPTIONS.url})`;
            target.style.backgroundPositionX = `-${clearTileOption.x}px`;
            target.style.backgroundPositionY = `-${clearTileOption.y}px`;
        }));

        x.forEach(v => {
            this.mapElements[v.x][v.y].name = v.name;
            const target = this.table.getCell(v.y, v.x);
            const tileOption = MAP_TILE_SET_OPTIONS.getTileOptionByName(v.name);
            target.style.backgroundImage = `url(${MAP_TILE_SET_OPTIONS.url})`;
            target.style.backgroundPositionX = `-${tileOption.x}px`;
            target.style.backgroundPositionY = `-${tileOption.y}px`;
        });
    }

    init() {
        const top = Div.build(this.element).className('topPane menuRoot').element;
        const load = Div.build(top).className('menuItem').content('Load...').onClick(() => this.load()).element;
        const save = Div.build(top).className('menuItem').content('Save...').onClick(() => this.save()).element;
        const middle = Div.build(this.element).className('middlePane').element;

        const left = Div.build(middle).className('leftPane').element;
        this.table = Table.build(left, 20, 10, (x, y) => this.cellClick(x, y));
        this.mapElements = [];
        for (let i = 0; i < 10; i++) {
            this.mapElements.push([]);
            for (let j = 0; j < 20; j++) {
                this.mapElements[i].push({x: j, y: i, name: 'CLEAR'});
            }
        }

        const right = Div.build(middle).className('rightPane').element;
        MAP_TILE_SET_OPTIONS.tileOptions.map(t => this.tileSelector(t, right, MAP_TILE_SET_OPTIONS));
    }
}
