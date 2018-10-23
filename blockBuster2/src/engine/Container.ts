import {Sprite} from './Sprite';
import {UpdateEvent} from './UpdateEvent';
import * as _ from 'lodash';

export default class Container implements Sprite {

    sprites: Sprite[] = [];

    draw(ctx: CanvasRenderingContext2D): void {
        this.sprites.forEach(x => x.draw(ctx));
    }

    init(): void {
        this.sprites.forEach(x => x.init());
    }

    update(e: UpdateEvent): void {
        this.sprites.forEach(x => x.update(e));
    }

    push(sprite: Sprite): Container {
        this.sprites.push(sprite);
        return this;
    }

    pull(sprite: Sprite): Container {
        _.pull(this.sprites, sprite);
        return this;
    }

    clear(): Container {
        this.sprites.length = 0;
        return this;
    }

}