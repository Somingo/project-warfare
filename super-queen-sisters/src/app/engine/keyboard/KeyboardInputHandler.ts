import * as _ from 'lodash';
import {KeyMapState} from "./KeyMapState";
import {KeyboardState} from "./KeyboardState";
import {Keys} from "./Keys";


export class KeyboardInputHandler {

    public keyMap: KeyMapState = {};


    constructor() {
        document.addEventListener('keydown', this.keyDownHandler);
        document.addEventListener('keyup', this.keyUpHandler);
    }

    keyDownHandler = (e: KeyboardEvent) => {
        if (!this.keyMap[e.keyCode]) this.keyMap[e.keyCode] = 1;
        if (e.keyCode === Keys.f5) return;
        e.preventDefault();
        e.stopImmediatePropagation();
        e.stopPropagation();
    };

    keyUpHandler = (e: KeyboardEvent) => {
        this.keyMap[e.keyCode] = 3;
        if (e.keyCode === Keys.f5) return;
        e.preventDefault();
        e.stopImmediatePropagation();
        e.stopPropagation();
    };

    get updatedKeyMaps(): KeyboardState {
        _.mapValues(this.keyMap, (v: number) => v === 1);
        const pressedKeyMap = _.pickBy(this.keyMap, (v: number) => v === 1 || v === 2);
        const downedKeyMap = _.pickBy(this.keyMap, (v: number) => v === 1);
        const uppedKeyMap = _.pickBy(this.keyMap, (v: number) => v === 3);
        this.keyMap = _.mapValues(pressedKeyMap, () => 2);
        return {
            keyMap: _.mapValues(pressedKeyMap, () => true),
            keyDown: _.mapValues(downedKeyMap, () => true),
            keyUp: _.mapValues(uppedKeyMap, () => true)
        };
    }
}
