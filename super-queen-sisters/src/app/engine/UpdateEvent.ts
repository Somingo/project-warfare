import {KeyboardState} from "./keyboard/KeyboardState";
import {KeyMap} from "./keyboard/KeyMap";

export class UpdateEvent {
  deltaTime: number;
  deltaSec: number;
  keyMap: KeyMap;
  keyDown: KeyMap;
  keyUp: KeyMap;

  constructor(deltaTime: number,deltaSec:number, keyboardState: KeyboardState) {
    this.deltaTime = deltaTime;
    this.deltaSec = deltaSec;
    this.keyMap = keyboardState.keyMap;
    this.keyDown = keyboardState.keyDown;
    this.keyUp = keyboardState.keyUp;
  }

}
