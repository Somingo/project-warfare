import {UpdateEvent} from './UpdateEvent';
import {Sprite} from './Sprite';
import {GameCanvas} from './GameCanvas';
import {KeyboardInputHandler} from './keyboard/KeyboardInputHandler';

export class GameLoop2D {

    lastUpdated: number = 0;
    game: Sprite = null;
    gameCanvas: HTMLCanvasElement;
    gameContext: CanvasRenderingContext2D;
    static keyboardInputHandler = new KeyboardInputHandler();

    isStopped = false;

    constructor(game: Sprite, width: number, height: number) {
        this.game = game;
        this.gameCanvas = GameCanvas.getCanvas(width, height);
        this.gameContext = this.gameCanvas.getContext("2d");
        game.init();
    }

    start = () => {
        requestAnimationFrame(this.gameLoop);
    };

    stop = () => {
        this.isStopped = true;
    };

    gameLoop = (timeStamp: number) => {

        const deltaTime = timeStamp - this.lastUpdated;
        this.lastUpdated = timeStamp;

        this.game.update(new UpdateEvent(deltaTime, GameLoop2D.keyboardInputHandler.updatedKeyMaps));
        this.game.draw(this.gameContext);

        if (this.isStopped) return;
        requestAnimationFrame(this.gameLoop);
    };

}
