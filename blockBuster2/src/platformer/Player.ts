import {Sprite} from '../engine/Sprite';
import {UpdateEvent} from '../engine/UpdateEvent';
import {Tile} from '../engine/tile/Tile';
import {Keys} from '../engine/keyboard/Keys';
import {PLAYER_1_TILE_SET} from './WarriorFemaleTileSet';

const ACTIVE_TILE_SET = PLAYER_1_TILE_SET;

function getTiles(pref: string, til: number): Tile[] {
    const res: Tile[] = [];
    for (let i = 0; i < til; i++) {
        res.push(ACTIVE_TILE_SET.getTile(`${pref}_${i}`, 100, 100));
    }
    return res;
}

export class Player implements Sprite {
    frameTime = 150;
    keyFrames = {
        l: {
            idle: getTiles('R_IDLE', 5),
            run: getTiles('R_RUN', 5),
            jump: getTiles('R_JUMP', 5),
            attack: getTiles('R_ATTACK', 5),
            hurt: getTiles('R_HURT', 5),
            die: getTiles('R_DIE', 5)
        },
        r: {
            idle: getTiles('L_IDLE', 5),
            run: getTiles('L_RUN', 5),
            jump: getTiles('L_JUMP', 5),
            attack: getTiles('L_ATTACK', 5),
            hurt: getTiles('L_HURT', 5),
            die: getTiles('L_DIE', 5)
        }
    };
    activeFrames: Tile[] = this.keyFrames.r.idle;
    activeFrame: number = 0;

    draw(ctx: CanvasRenderingContext2D): void {
        this.activeFrames[Math.floor(this.activeFrame)].draw(ctx);
        ctx.fillText(`${Math.floor(this.activeFrame) + 1}/${this.activeFrames.length}`, 100, 100);
    }

    init(): void {
        ACTIVE_TILE_SET.init();
        this.keyFrames.r.idle.forEach(t => t.init());
        this.keyFrames.r.run.forEach(t => t.init());
        this.keyFrames.r.jump.forEach(t => t.init());
        this.keyFrames.r.attack.forEach(t => t.init());
        this.keyFrames.r.hurt.forEach(t => t.init());
        this.keyFrames.r.die.forEach(t => t.init());
        this.keyFrames.l.idle.forEach(t => t.init());
        this.keyFrames.l.run.forEach(t => t.init());
        this.keyFrames.l.jump.forEach(t => t.init());
        this.keyFrames.l.attack.forEach(t => t.init());
        this.keyFrames.l.hurt.forEach(t => t.init());
        this.keyFrames.l.die.forEach(t => t.init());
    }

    update(e: UpdateEvent): void {

        this.activeFrame += e.deltaTime / this.frameTime;
        while (this.activeFrame > this.activeFrames.length) {
            this.activeFrame -= this.activeFrames.length;
        }

        if (e.keyDown[Keys.leftArrow]) {
            this.activeFrames = this.keyFrames.l.run;
            this.activeFrame = 0;
        }
        if (e.keyUp[Keys.leftArrow]) {
            this.activeFrames = this.keyFrames.l.idle;
            this.activeFrame = 0;
        }
        if (e.keyDown[Keys.rightArrow]) {
            this.activeFrames = this.keyFrames.r.run;
            this.activeFrame = 0;
        }
        if (e.keyUp[Keys.rightArrow]) {
            this.activeFrames = this.keyFrames.r.idle;
            this.activeFrame = 0;
        }
        if (e.keyDown[Keys.upArrow]) {
            this.activeFrames = this.keyFrames.r.jump;
            this.activeFrame = 0;
        }
        if (e.keyDown[Keys.space]) {
            this.activeFrames = this.keyFrames.r.attack;
            this.activeFrame = 0;
        }
        if (e.keyDown[Keys.a]) {
            this.activeFrames = this.keyFrames.r.hurt;
            this.activeFrame = 0;
        }
        if (e.keyDown[Keys.s]) {
            this.activeFrames = this.keyFrames.r.die;
            this.activeFrame = 0;
        }


    }
}
