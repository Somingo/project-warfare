import {BlockBuster} from './blockBuster/BlockBuster';
import './index.css';
import {GameLoop2D} from './engine/GameLoop';
import {Platformer} from './platformer/Platformer';
import {GameCanvas} from './engine/GameCanvas';
import {MapEditor} from './platformer/editor/MapEditor';

let gameLoop2D: GameLoop2D = null;
let mapEditor: MapEditor = null;

function startBlockbuster() {
    if (mapEditor) mapEditor.closeMapEditor(), mapEditor = null;
    if (gameLoop2D != null) gameLoop2D.stop();
    gameLoop2D = new GameLoop2D(new BlockBuster(), BlockBuster.GAME_WIDTH, BlockBuster.GAME_HEIGHT);
    gameLoop2D.start();
}

function startPlatformer() {
    if (mapEditor) mapEditor.closeMapEditor(), mapEditor = null;
    if (gameLoop2D != null) gameLoop2D.stop();
    gameLoop2D = new GameLoop2D(new Platformer(), 16/9*700, 700);
    gameLoop2D.start();
}

function startPlatformerMapEditor() {
    if (gameLoop2D != null) gameLoop2D.stop();
    GameCanvas.removeGameCanvas();
    mapEditor = new MapEditor();
}

// @ts-ignore
window['startBlockbuster'] = startBlockbuster;
// @ts-ignore
window['startPlatformer'] = startPlatformer;
// @ts-ignore
window['startPlatformerMapEditor'] = startPlatformerMapEditor;

// set Platformer as default game to run
//startPlatformer();

startPlatformerMapEditor();
