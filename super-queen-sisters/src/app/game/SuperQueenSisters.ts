import {Sprite} from '../engine/Sprite';
import {UpdateEvent} from '../engine/UpdateEvent';
// @ts-ignore
import parallaxes from './parallaxes.json';
import {Parallax} from '../engine/parallax/Parallax';
import {ParallaxOptions} from '../engine/parallax/ParallaxOptions';
import {MultiLayerMap} from './MultiLayerMap';
import {TileSetOptions} from '../engine/tile/TileSetOptions';
// @ts-ignore
import playerTileSet from './player.json';
// @ts-ignore
import enemyTileSet from './enemy.json';
import {TileSet} from '../engine/tile/TileSet';
import {Tile} from '../engine/tile/Tile';
import {Keys} from '../engine/keyboard/Keys';
import {Rectangle} from '../engine/collision/Rectangle';
import {Collision} from '../engine/collision/Collision';
import {Vector} from '../engine/Vector';
import {EnvironmentConfig} from '../engine/EnvironmentConfig';
import Container from '../engine/sprites/Container';
import {FpsMeter} from '../engine/sprites/FpsMeter';

interface Player {
    tile: Tile;
    speed: number;
    velocity: number;
}

interface Enemy {
    tile: Tile;
    spawn: { x: number, y: number }[];
}

const gravity = 1000;

export class SuperQueenSisters implements Sprite {
    parallax: Parallax = null;
    map: MultiLayerMap = new MultiLayerMap();
    enemySpawnPos = 0;
    private playerTileSet: TileSet;
    private enemyTileSet: TileSet;
    private player: Player;
    private enemy: Enemy;
    private viewPortX = 0;
    private HUD = new Container();

    constructor() {
        this.HUD.push(new FpsMeter());
    }

    draw(ctx: CanvasRenderingContext2D): void {
        if (this.parallax) {
            this.parallax.draw(ctx);
        }
        this.HUD.draw(ctx);

        ctx.translate(this.viewPortX, 0);
        this.map.draw(ctx);
        this.enemy.tile.draw(ctx);
        this.player.tile.draw(ctx);
        ctx.fillText(`Map W: ${this.map.width} R: ${this.map.raster}`, 50, 50);
        ctx.resetTransform();
    }

    spawnNextEnemy() {
        this.enemySpawnPos++;
        if (this.enemySpawnPos >= this.enemy.spawn.length) {
            this.enemySpawnPos = 0;
        }
        this.enemy.tile.x = this.enemy.spawn[this.enemySpawnPos].x;
        this.enemy.tile.y = this.enemy.spawn[this.enemySpawnPos].y;
        this.enemy.tile.updateBounds();
    }

    init(): void {
        const parallaxOptions = ParallaxOptions.fromObject(parallaxes[0]);
        this.parallax = new Parallax(parallaxOptions.layerOptions);
        this.parallax.init();
        const playerTileSetOptions = TileSetOptions.fromObject(playerTileSet);
        this.playerTileSet = new TileSet(playerTileSetOptions);
        this.playerTileSet.init();
        this.player = {tile: this.playerTileSet.getTile('L_IDLE_0', 100, 100), speed: 345, velocity: 0};
        this.player.tile.init();
        const enemyTileSetOptions = TileSetOptions.fromObject(enemyTileSet);
        this.enemyTileSet = new TileSet(enemyTileSetOptions);
        this.enemyTileSet.init();
        this.enemy = {tile: null, spawn: [{x: 70, y: 8 * 70}, {x: 6 * 70, y: 5 * 70}]};
        this.enemy.tile = this.enemyTileSet.getTile('0_Golem_Idle_000.png', this.enemy.spawn[0].x, this.enemy.spawn[0].y);
        this.enemy.tile.init();
        this.map.init();
        this.HUD.init();
    }

    update(e: UpdateEvent): void {
        // gravity
        let pX = 0;
        let pY = 0;
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

        let newX = this.player.tile.x;
        let newY = this.player.tile.y + pY;
        const w = this.player.tile.width;
        const h = this.player.tile.height;
        this.player.tile.bounds = new Rectangle(new Vector(newX, newY), new Vector(w, h));

        let collapse = this.map.layers[this.map.layers.length - 1]
            .filter(tile => Collision.collisionRectangleToRectangle(tile.bounds, this.player.tile.bounds));
        if (collapse.length === 0) {
            this.player.tile.y = newY;
        } else {
            this.player.velocity = pY < 0 ? 0.1 : 0;
        }

        newX = this.player.tile.x + pX;
        newY = this.player.tile.y;
        this.player.tile.bounds = new Rectangle(new Vector(newX, newY), new Vector(w, h));

        collapse = this.map.layers[this.map.layers.length - 1]
            .filter(tile => Collision.collisionRectangleToRectangle(tile.bounds, this.player.tile.bounds));
        if (collapse.length === 0) {
            this.player.tile.x = newX;
        }

        if (this.player.tile.y > 720) {
            this.player.tile.x = 100;
            this.player.tile.y = 100;
            this.player.velocity = 0;
        }

        if (Collision.collisionRectangleToRectangle(this.player.tile.bounds, this.enemy.tile.bounds)) {
            if (this.enemy.tile.y > this.player.tile.y + 50) {
                this.spawnNextEnemy();
            } else {
                this.player.tile.x = 100;
                this.player.tile.y = 100;
                this.player.velocity = 0;
            }
        }

        this.viewPortX = 0 - Math.min(
            Math.max(
                0,
                this.player.tile.x - (EnvironmentConfig.get().width / 2 + this.player.tile.width)),
            this.map.width - EnvironmentConfig.get().width);

        this.parallax.viewPortX = this.viewPortX;
        this.parallax.update(e);
        this.map.update(e);
        this.HUD.update(e);
    }

}
