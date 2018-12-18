import {Div} from './Div';

export class Menu {
    element: HTMLDivElement | HTMLBodyElement;

    constructor(parent: HTMLDivElement | HTMLBodyElement) {
        this.element = Div.build(parent).className('topPane menuRoot').element;
    }

    add(title: string, onClick: (e: MouseEvent) => void): Menu {
        Div.build(this.element).className('menuItem').content(title).onClick((e) => onClick(e));
        return this;
    }

    static build(parent: HTMLDivElement | HTMLBodyElement): Menu {
        return new Menu(parent);
    }
}
