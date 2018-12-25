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

type KeyFrames = { idle: Tile[], run: Tile[], jump: Tile[], attack: Tile[], hurt: Tile[], die: Tile[] };

export class Player implements Sprite {
    frameTime = 150;
    keyFrames: { l: KeyFrames, r: KeyFrames } = {
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
    renderDirection: KeyFrames = this.keyFrames.r;
    activeFrames: Tile[] = this.renderDirection.idle;
    activeFrame: number = 0;

    isRunning = false;


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

    push(e: UpdateEvent, key: number, tiles: Tile[]) {
        if (e.keyMap[key]) {
            this.activeFrames = tiles;
        }
        if (e.keyDown[key]) {
            this.activeFrame = 0;
        }
    }

    selectDirection(e: UpdateEvent, key: number, keyFrames: KeyFrames, otherKey: number, otherKeyFrames: KeyFrames) {
        if (e.keyDown[key]) {
            this.renderDirection = keyFrames;
            this.isRunning = true;
            this.activeFrame = 0;
        }
        if (e.keyUp[key]) {
            if (e.keyMap[otherKey]) {
                this.renderDirection = otherKeyFrames;
                this.activeFrame = 0;
            } else {
                this.isRunning = false;
                this.activeFrame = 0;
            }
        }
    }

    update(e: UpdateEvent): void {

        this.activeFrame += e.deltaTime / this.frameTime;
        while (this.activeFrame > this.activeFrames.length) {
            this.activeFrame -= this.activeFrames.length;
        }

        this.selectDirection(e, Keys.leftArrow, this.keyFrames.l, Keys.rightArrow, this.keyFrames.r);
        this.selectDirection(e, Keys.rightArrow, this.keyFrames.r, Keys.leftArrow, this.keyFrames.l);


        if (this.isRunning) {
            this.activeFrames = this.renderDirection.run;
        } else {
            this.activeFrames = this.renderDirection.idle;
        }

        this.push(e, Keys.upArrow, this.renderDirection.jump);
        this.push(e, Keys.space, this.renderDirection.attack);
        this.push(e, Keys.a, this.renderDirection.hurt);
        this.push(e, Keys.s, this.renderDirection.die);


    }
}
