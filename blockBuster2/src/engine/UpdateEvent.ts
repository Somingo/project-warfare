export class UpdateEvent {
    deltaTime: number;
    keyMap: { [key: number]: boolean };

    constructor(deltaTime: number, keyMap: { [p: number]: boolean }) {
        this.deltaTime = deltaTime;
        this.keyMap = keyMap;
    }

}