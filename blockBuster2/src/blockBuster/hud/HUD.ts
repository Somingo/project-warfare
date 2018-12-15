import Container from '../../engine/sprites/Container';
import {BlockBuster} from '../BlockBuster';
import {BallCounter} from './BallCounter';
import {ScoreDisplay} from './ScoreDisplay';
import {FpsMeter} from '../../engine/sprites/FpsMeter';

export default class HUD extends Container {

    constructor(game:BlockBuster) {
        super();
        this.push(new FpsMeter());
        this.push(new BallCounter(game));
        this.push(new ScoreDisplay(game));
    }
}
