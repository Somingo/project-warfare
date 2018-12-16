import {BlockBuster} from './blockBuster/BlockBuster';
import './index.css';
import {GameLoop2D} from './engine/GameLoop';
import {Platformer} from './platformer/Platformer';

let gameLoop2D: GameLoop2D = null;

function startBlockbuster(){
    if (gameLoop2D != null) gameLoop2D.stop();
    gameLoop2D = new GameLoop2D(new BlockBuster(), BlockBuster.GAME_WIDTH, BlockBuster.GAME_HEIGHT);
    gameLoop2D.start();
}

function startPlatformer(){
    if (gameLoop2D != null) gameLoop2D.stop();
    gameLoop2D = new GameLoop2D(new Platformer(), BlockBuster.GAME_WIDTH, BlockBuster.GAME_HEIGHT);
    gameLoop2D.start();
}

// @ts-ignore
window['startBlockbuster'] = startBlockbuster;
// @ts-ignore
window['startPlatformer'] = startPlatformer;
