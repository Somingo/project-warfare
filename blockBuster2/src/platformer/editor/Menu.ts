import {Div} from './Div';
import {MenuItem} from './MenuItem';

export class Menu {
    element: HTMLDivElement | HTMLBodyElement;

    constructor(parent: HTMLDivElement | HTMLBodyElement) {
        this.element = Div.build(parent).className('topPane menuRoot').element;
    }

    add(title: string, onClick: (e: MouseEvent) => void): Menu {
        MenuItem.build(this.element).content(title).onClick(onClick);
        return this;
    }

    static build(parent: HTMLDivElement | HTMLBodyElement): Menu {
        return new Menu(parent);
    }
}
