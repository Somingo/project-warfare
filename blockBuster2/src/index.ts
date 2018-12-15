import {Game} from './blockBuster/Game';
import './index.css';
import {GameLoop2D} from './engine/GameLoop';


const game = new Game();
game.init();

const gameLoop2D = new GameLoop2D(game);
gameLoop2D.start();
