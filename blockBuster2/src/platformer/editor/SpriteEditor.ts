import {Menu} from './Menu';
import {Div} from './Div';

export class SpriteEditor {
    parent: HTMLDivElement;
    menuElement: HTMLDivElement | HTMLBodyElement;
    editorElement: HTMLDivElement | HTMLBodyElement;
    rootDiv: Div;
    images: HTMLImageElement[];
    exportDiv: Div;

    clearAll() {
        this.images = [];
        this.exportDiv.content('');
        this.editorElement.innerHTML = null;
    }

    refreshMap() {
        let spriteSheet = this.images.map(i => ({
            u: i.src,
            x: i.offsetLeft - this.editorElement.offsetLeft,
            y: i.offsetTop - this.editorElement.offsetTop,
            w: i.width,
            h: i.height,
            n: i.src
        }));
        this.exportDiv.content(JSON.stringify(spriteSheet));
        const canvas = document.createElement('canvas');
        this.exportDiv.element.appendChild(canvas);
        canvas.width = this.editorElement.clientWidth;
        canvas.height = this.editorElement.clientHeight;
        const context = canvas.getContext('2d');
        this.images.map(i => context.drawImage(i, i.offsetLeft - this.editorElement.offsetLeft, i.offsetTop - this.editorElement.offsetTop));
    }

    loadFiles() {
        const input = document.createElement('input');
        input.type = 'file';
        input.multiple = true;
        const editorElement = this.editorElement;
        const images = this.images;
        input.onchange = () => {

            for (let i = 0; i < input.files.length; i++) {
                const reader = new FileReader();
                reader.onload = function () {
                    const dataURL = reader.result;
                    let image = document.createElement('img');
                    // @ts-ignore
                    image.src = dataURL;
                    editorElement.appendChild(image);
                    images.push(image);
                };
                reader.readAsDataURL(input.files[i]);
            }
        };
        input.click();
    }

    private initEditorPane(parent: HTMLDivElement) {
        return Div.build(parent).element;
    }

    init(parent: HTMLDivElement) {
        this.parent = parent;
        this.rootDiv = Div.build(parent);
        this.menuElement = Menu.build(this.rootDiv.element)
            .add('Load Files', () => this.loadFiles())
            .add('Export', () => this.refreshMap())
            .add('Clear All', () => this.clearAll())
            .element;
        this.editorElement = this.initEditorPane(this.rootDiv.element);
        this.exportDiv = Div.build(this.rootDiv.element).className('relative');

    }

    hide() {
        this.rootDiv.className('hidden');
    }

    show() {
        this.rootDiv.className('')
    }


}
