import Container from '../engine/Container';
import {Game} from '../Game';
import {BallCounter} from './BallCounter';
import {ScoreDisplay} from './ScoreDisplay';
import {FpsMeter} from '../engine/FpsMeter';

export default class HUD extends Container {

    constructor(game:Game) {
        super();
        this.push(new FpsMeter());
        this.push(new BallCounter(game));
        this.push(new ScoreDisplay(game));
    }
}