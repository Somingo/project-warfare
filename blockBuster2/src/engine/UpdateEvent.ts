import {KeyboardState} from "./keyboard/KeyboardState";
import {KeyMap} from "./keyboard/KeyMap";

export class UpdateEvent {
    deltaTime: number;
    keyMap: KeyMap;
    keyDown: KeyMap;
    keyUp: KeyMap;

    constructor(deltaTime: number, keyboardState: KeyboardState) {
        this.deltaTime = deltaTime;
        this.keyMap = keyboardState.keyMap;
        this.keyDown = keyboardState.keyDown;
        this.keyUp = keyboardState.keyUp;
    }

}
