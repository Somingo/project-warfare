export class Div {

    element: HTMLDivElement | HTMLBodyElement;

    static build(parent: HTMLDivElement | HTMLBodyElement): Div {
        const div = new Div();
        div.element = document.createElement('div');
        parent.appendChild(div.element);
        return div;
    }

    id(id: string): Div {
        this.element.id = id;
        return this;
    }

    content(html: string): Div {
        this.element.innerHTML = html;
        return this;
    }

    className(className: string): Div {
        this.element.className = className;
        return this;
    }

    onClick(onClick: (e: MouseEvent, d: Div) => void): Div {
        this.element.onclick = (e: MouseEvent) => onClick(e, this);
        return this;
    }
}
