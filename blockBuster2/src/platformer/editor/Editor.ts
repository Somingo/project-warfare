import './Editor.css';
import {MapEditor} from './MapEditor';


export class Editor {
    static ID = 'Editor';

    element: HTMLDivElement;

    mapEditor: MapEditor;

    constructor() {
        // @ts-ignore
        this.element = document.getElementById(Editor.ID);
        this.closeMapEditor();
        this.element = document.createElement('div');
        this.element.id = Editor.ID;
        document.body.appendChild(this.element);
        this.mapEditor = new MapEditor();
        this.init();
    }

    closeMapEditor() {
        if (this.element) {
            document.body.removeChild(this.element);
        }
    }

    init() {
        this.mapEditor.init(this.element);
    }
}
