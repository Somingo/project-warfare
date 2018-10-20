export class KeyboardInputHandler {

    public keyMap: { [key: number]: boolean } = {};

    constructor() {
        document.addEventListener('keydown', this.keyDownHandler);
        document.addEventListener('keyup', this.keyUpHandler);
    }

    keyDownHandler = (e: KeyboardEvent) => {
        this.keyMap[e.keyCode] = true;
        e.preventDefault();
        e.stopImmediatePropagation();
        e.stopPropagation();
    };

    keyUpHandler = (e: KeyboardEvent) => {
        this.keyMap[e.keyCode] = false;
        e.preventDefault();
        e.stopImmediatePropagation();
        e.stopPropagation();
    };
}