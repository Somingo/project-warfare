export default class InputHandler {

    keyMap: { [key: number]: boolean; } = {};
    keyListener = (e: KeyboardEvent) => {
        this.keyMap[e.keyCode] = e.type == 'keydown';
        e.stopImmediatePropagation();
        e.stopPropagation();
        e.preventDefault();
    }

    constructor() {
        document.addEventListener('keydown', this.keyListener);
        document.addEventListener('keyup', this.keyListener);
    }

}