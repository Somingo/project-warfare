import {BlockBuster} from './blockBuster/BlockBuster';
import './index.css';
import {GameLoop2D} from './engine/GameLoop';


const blockBuster = new BlockBuster();
blockBuster.init();

const gameLoop2D = new GameLoop2D(blockBuster, BlockBuster.GAME_WIDTH, BlockBuster.GAME_HEIGHT);
gameLoop2D.start();
