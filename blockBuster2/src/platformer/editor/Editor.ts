import './Editor.css';
import {MapEditor} from './MapEditor';
import {SpriteEditor} from './SpriteEditor';
import {MenuItem} from './MenuItem';


export class Editor {
    static ID = 'Editor';

    element: HTMLDivElement;

    mapEditor: MapEditor;
    private spriteEditor: SpriteEditor;

    constructor() {
        // @ts-ignore
        this.element = document.getElementById(Editor.ID);
        this.closeMapEditor();
        this.element = document.createElement('div');
        this.element.id = Editor.ID;
        document.body.appendChild(this.element);
        this.mapEditor = new MapEditor();
        this.spriteEditor = new SpriteEditor();
        this.init();
    }

    closeMapEditor() {
        if (this.element) {
            document.body.removeChild(this.element);
        }
    }

    init() {
        this.mapEditor.init(this.element);
        MenuItem.build(this.mapEditor.menuElement).content('SPRITES').className('right').onClick(() => this.sprites());
        this.spriteEditor.init(this.element);
        MenuItem.build(this.spriteEditor.menuElement).content('MAP').className('right').onClick(() => this.map());
        this.sprites();
    }

    map() {
        this.mapEditor.show();
        this.spriteEditor.hide();
    }

    sprites() {
        this.mapEditor.hide();
        this.spriteEditor.show();
    }
}
