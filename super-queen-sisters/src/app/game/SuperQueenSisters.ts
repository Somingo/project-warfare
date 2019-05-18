import {Sprite} from '../engine/Sprite';
import {UpdateEvent} from '../engine/UpdateEvent';
// @ts-ignore
import parallaxes from './parallaxes.json';
import {Parallax} from '../engine/parallax/Parallax';
import {ParallaxOptions} from '../engine/parallax/ParallaxOptions';
import {MultiLayerMap} from './MultiLayerMap';
import {Keys} from '../engine/keyboard/Keys';
import {Rectangle} from '../engine/collision/Rectangle';
import {Collision} from '../engine/collision/Collision';
import {Vector} from '../engine/Vector';
import {EnvironmentConfig} from '../engine/EnvironmentConfig';
import Container from '../engine/sprites/Container';
import {FpsMeter} from '../engine/sprites/FpsMeter';
import {ImageSpriteSheet} from '../engine/ImageSpriteSheet';
import {BASIC_MAP_TILE_SPRITE_SHEET, ENEMY_SPRITE_SHEET, GOLD_SPRITE_SHEET} from './spriteSheets';
import {ImageSprite} from '../engine/sprites/ImageSprite';
import {AnimatedImageSprite} from '../engine/sprites/AnimatedImageSprite';
import {Player} from './Player';

interface PlayerDesc {
    sprite: Player;
    hitBox: Rectangle;
    speed: number;
    velocity: number;
}

interface NpcDesc {
    sprite: ImageSprite;
    hitBox: Rectangle;
    spawn: { x: number, y: number }[];
}

const gravity = 1000;

export class SuperQueenSisters implements Sprite {
    private mapSpriteSheet = new ImageSpriteSheet(BASIC_MAP_TILE_SPRITE_SHEET);
    private enemySpriteSheet = new ImageSpriteSheet(ENEMY_SPRITE_SHEET);
    private goldSpriteSheet = new ImageSpriteSheet(GOLD_SPRITE_SHEET);

    private goldCoin: AnimatedImageSprite;

    parallax: Parallax = null;
    map: MultiLayerMap = new MultiLayerMap(this.mapSpriteSheet);
    enemySpawnPos = 0;
    private player: PlayerDesc;
    private enemy: NpcDesc;
    private viewPortX = 0;
    private viewPortY = 0;
    private HUD = new Container();

    constructor() {
        this.HUD.push(new FpsMeter());
    }

    draw(ctx: CanvasRenderingContext2D): void {
        if (this.parallax) {
            this.parallax.draw(ctx);
        }

        ctx.translate(this.viewPortX, this.viewPortY);
        this.map.draw(ctx);
        this.enemy.sprite.draw(ctx);
        if (EnvironmentConfig.get().hitBox) {
            ctx.strokeStyle = '#aa0000';
            ctx.strokeRect(this.enemy.hitBox.x, this.enemy.hitBox.y, this.enemy.hitBox.width, this.enemy.hitBox.height);
        }
        this.player.sprite.draw(ctx);
        if (EnvironmentConfig.get().hitBox) {
            ctx.strokeStyle = '#0000aa';
            ctx.strokeRect(this.player.hitBox.x, this.player.hitBox.y, this.player.hitBox.width, this.player.hitBox.height);
        }
        this.goldCoin.draw(ctx);
        ctx.resetTransform();
        this.HUD.draw(ctx);
    }

    spawnNextEnemy() {
        this.enemySpawnPos++;
        if (this.enemySpawnPos >= this.enemy.spawn.length) {
            this.enemySpawnPos = 0;
        }
        this.enemy.sprite.positionX = this.enemy.spawn[this.enemySpawnPos].x;
        this.enemy.sprite.positionY = this.enemy.spawn[this.enemySpawnPos].y;
        this.enemy.hitBox = Rectangle.fromNumbersWH(
            this.enemy.sprite.positionX,
            this.enemy.sprite.positionY,
            this.enemy.sprite.width,
            this.enemy.sprite.height);
    }

    init(): void {
        this.goldCoin = new AnimatedImageSprite({
            fps: 10,
            autoRepeat: true,
            autoStop: false
        }, this.goldSpriteSheet.getMultipleByPattern('Gold_star_{}', 10), 100, 100);
        this.goldCoin.start();
        const parallaxOptions = ParallaxOptions.fromObject(parallaxes[0]);
        this.parallax = new Parallax(parallaxOptions.layerOptions);
        this.parallax.init();
        this.player = {sprite: null, hitBox: null, speed: 345, velocity: 0};
        this.player.sprite = new Player();
        this.player.sprite.init();
        this.player.sprite.positionX = 100;
        this.player.sprite.positionY = 100;
        this.player.hitBox = Rectangle.fromNumbersWH(
            this.player.sprite.positionX,
            this.player.sprite.positionY,
            this.player.sprite.width,
            this.player.sprite.height);
        this.enemy = {sprite: null, hitBox: null, spawn: [{x: 70, y: 8 * 70}, {x: 6 * 70, y: 5 * 70}]};
        this.enemy.sprite = this.enemySpriteSheet.get('Golem_Idle_000', this.enemy.spawn[0].x, this.enemy.spawn[0].y);
        this.enemy.hitBox = Rectangle.fromNumbersWH(
            this.enemy.sprite.positionX,
            this.enemy.sprite.positionY,
            this.enemy.sprite.width,
            this.enemy.sprite.height);
        this.map.init();
        this.HUD.init();
    }

    update(e: UpdateEvent): void {
        this.goldCoin.update(e);
        // gravity
        let pX = 0;
        let pY = 0;
        if (e.keyDown[Keys.h]) {
            EnvironmentConfig.get().hitBox = !EnvironmentConfig.get().hitBox;
        }
        if (e.keyMap[Keys.leftArrow]) {
            pX -= e.deltaSec * this.player.speed;
        }
        if (e.keyMap[Keys.rightArrow]) {
            pX += e.deltaSec * this.player.speed;
        }
        if (e.keyMap[Keys.upArrow] && this.player.velocity === 0) {
            this.player.velocity = -700;
        }
        // if (e.keyMap[Keys.downArrow]) {
        //   pY += e.deltaSec * this.player.speed;
        // }
        pY += e.deltaSec * (this.player.velocity + e.deltaSec * gravity / 2);
        this.player.velocity += e.deltaSec * gravity;

        let newX = this.player.sprite.positionX;
        let newY = this.player.sprite.positionY + pY;
        const w = this.player.sprite.width;
        const h = this.player.sprite.height;
        this.player.hitBox = new Rectangle(new Vector(newX, newY), new Vector(w, h));

        let collapse = this.map.floorLayer
            .filter(tile => Collision.collisionRectangleToRectangle(tile.hitBox, this.player.hitBox));
        if (collapse.length === 0) {
            this.player.sprite.positionY = newY;
        } else {
            if (pY > 0) {
                // hit from above
                this.player.sprite.positionY = collapse[0].hitBox.y - this.player.sprite.height ;
            } else {
                // hit from under
                this.player.sprite.positionY = collapse[0].hitBox.y + collapse[0].hitBox.height ;
            }
            this.player.velocity = pY < 0 ? 0.1 : 0;
        }

        newX = this.player.sprite.positionX + pX;
        newY = this.player.sprite.positionY;
        this.player.hitBox = new Rectangle(new Vector(newX, newY), new Vector(w, h));

        collapse = this.map.floorLayer
            .filter(tile => Collision.collisionRectangleToRectangle(tile.hitBox, this.player.hitBox));
        if (collapse.length === 0) {
            this.player.sprite.positionX = newX;
        }

        // Fall out
        if (this.player.sprite.positionY > 720) {
            this.player.sprite.positionX = 100;
            this.player.sprite.positionY = 100;
            this.player.velocity = 0;
        }

        if (Collision.collisionRectangleToRectangle(this.player.hitBox, this.enemy.hitBox)) {
            if (this.enemy.sprite.positionY > this.player.sprite.positionY + 50) {
                this.spawnNextEnemy();
            } else {
                this.player.sprite.positionX = 100;
                this.player.sprite.positionY = 100;
                this.player.velocity = 0;
            }
        }

        this.player.sprite.update(e);

        this.viewPortX = 0 - Math.min(
            Math.max(
                0,
                this.player.sprite.positionX - (EnvironmentConfig.get().width / 2 + this.player.sprite.width)),
            this.map.width - EnvironmentConfig.get().width);

        this.viewPortY = 0 - Math.min(
            Math.max(
                0,
                this.player.sprite.positionY - (EnvironmentConfig.get().height / 2 - this.player.sprite.height)),
            this.map.height - EnvironmentConfig.get().height);

        this.parallax.viewPortX = this.viewPortX;
        this.parallax.update(e);
        this.map.update(e);
        this.HUD.update(e);
    }

}
