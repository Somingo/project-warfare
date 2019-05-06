import {Sprite} from "../engine/Sprite";
import {UpdateEvent} from "../engine/UpdateEvent";
// @ts-ignore
import parallaxes from './parallaxes.json';
import {Parallax} from "../engine/parallax/Parallax";
import {ParallaxOptions} from "../engine/parallax/ParallaxOptions";
import {MultiLayerMap} from "./MultiLayerMap";
import {TileSetOptions} from "../engine/tile/TileSetOptions";
// @ts-ignore
import tileSet from "./player.json";
import {TileSet} from "../engine/tile/TileSet";
import {Tile} from "../engine/tile/Tile";
import {Keys} from "../engine/keyboard/Keys";
import {Rectangle} from "../engine/collision/Rectangle";
import {Collision} from "../engine/collision/Collision";
import {Vector} from "../engine/Vector";

type Player = { tile: Tile, speed: number, velocity: number }

const gravity = 1000;

const WIDTH = 1280;

export class SuperQueenSisters implements Sprite {
  parallax: Parallax = null;
  map: MultiLayerMap = new MultiLayerMap();
  private tileSet: TileSet;
  private player: Player;

  private viewPortX = 0;

  draw(ctx: CanvasRenderingContext2D): void {
    if (this.parallax) this.parallax.draw(ctx);
    ctx.translate(this.viewPortX, 0);
    this.map.draw(ctx);
    this.player.tile.draw(ctx);
    ctx.fillText(`Map W: ${this.map.width} R: ${this.map.raster}`, 50, 50);
    ctx.resetTransform();
  }

  init(): void {
    let parallaxOptions = ParallaxOptions.fromObject(parallaxes[0]);
    this.parallax = new Parallax(parallaxOptions.layerOptions);
    this.parallax.init();
    const tileSetOptions = TileSetOptions.fromObject(tileSet);
    this.tileSet = new TileSet(tileSetOptions);
    this.tileSet.init();
    this.player = {tile: this.tileSet.getTile('L_IDLE_0', 100, 100), speed: 345, velocity: 0};
    this.player.tile.init();
    this.map.init();
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
    if (e.keyMap[Keys.upArrow] && this.player.velocity == 0) {
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

    let collapse = this.map.layers[this.map.layers.length - 1].filter(tile => Collision.collisionRectangleToRectangle(tile.bounds, this.player.tile.bounds));
    if (collapse.length == 0) {
      this.player.tile.y = newY;
    } else {
      this.player.velocity = pY < 0 ? 0.1 : 0;
    }

    newX = this.player.tile.x + pX;
    newY = this.player.tile.y;
    this.player.tile.bounds = new Rectangle(new Vector(newX, newY), new Vector(w, h));

    collapse = this.map.layers[this.map.layers.length - 1].filter(tile => Collision.collisionRectangleToRectangle(tile.bounds, this.player.tile.bounds));
    if (collapse.length == 0) {
      this.player.tile.x = newX;
    }

    this.viewPortX = 0 - Math.min(Math.max(0, this.player.tile.x - 450), this.map.width - WIDTH);

    this.parallax.viewPortX = this.viewPortX;
    this.parallax.update(e);
    this.map.update(e);
  }

}
