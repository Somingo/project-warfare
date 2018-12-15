import {UpdateEvent} from './UpdateEvent';
import {Sprite} from './Sprite';
import {GameCanvas} from './GameCanvas';
import {Game} from '../blockBuster/Game';
import {KeyboardInputHandler} from './keyboard/KeyboardInputHandler';

export class GameLoop2D {

    lastUpdated: number = 0;
    game: Sprite = null;
    gameCanvas: HTMLCanvasElement;
    gameContext: CanvasRenderingContext2D;
    keyboardInputHandler = new KeyboardInputHandler();

    constructor(game: Sprite) {
        this.game = game;
        this.gameCanvas = GameCanvas.getCanvas(Game.GAME_WIDTH, Game.GAME_HEIGHT);
        this.gameContext = this.gameCanvas.getContext("2d");
    }

    start = () => {
        requestAnimationFrame(this.gameLoop);
    };

    gameLoop = (timeStamp: number) => {

        const deltaTime = timeStamp - this.lastUpdated;
        this.lastUpdated = timeStamp;

        this.game.update(new UpdateEvent(deltaTime, this.keyboardInputHandler.updatedKeyMaps));
        this.game.draw(this.gameContext);

        requestAnimationFrame(this.gameLoop);
    };

}
