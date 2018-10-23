import {Block} from './Block';
import {Game} from './Game';
import {Vector} from './engine/Vector';
import * as _ from 'lodash';

export default class Map {

    colors: { [key: string]: string } = {
        "R": "#f00",
        "G": "#0f0",
        "B": "#00f",
        "P": "#f0f",
        "Y": "#ff0",
        "C": "#0ff",
        "L": "#000",
        "W": "#fff"
    };
    map: string[];

    constructor(map: string[], colors?: { [p: string]: string }) {
        if (colors) this.colors = colors;
        this.map = map;
    }

    static loadMap(game: Game, map: Map): Block[] {
        const blocks: Block[] = [];
        let lastBlock: Block;
        map.map.forEach((v: any, j: number) => {
            _.forEach(v, (x: string, i: number) => {
                if (x === '.') return;
                if (x === '-') {
                    lastBlock.size.x += 40;
                } else {
                    lastBlock = new Block(new Vector(i * 40, j * 40), new Vector(40, 40), game, map.colors[x]);
                    blocks.push(lastBlock);
                }
            });
        });

        return blocks;
    }
}