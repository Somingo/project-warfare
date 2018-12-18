import {DivClickEvent} from './Div';

export class MenuItem {
    element: HTMLDivElement;

    static build(parent: HTMLDivElement | HTMLBodyElement): MenuItem {
        const menuItem = new MenuItem();
        menuItem.element = document.createElement('div');
        parent.appendChild(menuItem.element);
        menuItem.className('');
        return menuItem;
    }


    id(id: string): MenuItem {
        this.element.id = id;
        return this;
    }

    content(html: string): MenuItem {
        this.element.innerHTML = html;
        return this;
    }

    className(className: string): MenuItem {
        this.element.className = `menuItem ${className}`;
        return this;
    }

    onClick(onClick: DivClickEvent): MenuItem {
        this.element.onclick = (e: MouseEvent) => onClick(e, this);
        return this;
    }

}
