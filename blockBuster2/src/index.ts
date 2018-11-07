import {Game} from './Game';
import {UpdateEvent} from './engine/UpdateEvent';
import {KeyboardInputHandler} from './engine/keyboard/KeyboardInputHandler';
import './index.css';
import {KeyMap} from "./engine/keyboard/KeyMap";


const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

const gameCanvas = document.createElement('canvas');
gameCanvas.id = 'game-canvas';
gameCanvas.width = GAME_WIDTH;
gameCanvas.height = GAME_HEIGHT;
document.body.appendChild(gameCanvas);

const gameContext: CanvasRenderingContext2D = gameCanvas.getContext("2d");
let keyboardInputHandler = new KeyboardInputHandler();

const game = new Game(GAME_WIDTH, GAME_HEIGHT);
game.init();

let lastUpdated: number = 0;

const gameLoop = (timeStamp: number) => {

    const deltaTime = timeStamp - lastUpdated;
    lastUpdated = timeStamp;

    game.update(new UpdateEvent(deltaTime, keyboardInputHandler.updatedKeyMaps));
    game.draw(gameContext);

    requestAnimationFrame(gameLoop);
};

requestAnimationFrame(gameLoop);
