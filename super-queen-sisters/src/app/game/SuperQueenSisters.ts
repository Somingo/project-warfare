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

type Player = { tile: Tile, speed: number, velocity: number }

const gravity = 1000;

export class SuperQueenSisters implements Sprite {
  parallax: Parallax = null;
  map: MultiLayerMap = new MultiLayerMap();
  private tileSet: TileSet;
  private player: Player;

  draw(ctx: CanvasRenderingContext2D): void {
    if (this.parallax) this.parallax.draw(ctx);
    this.map.draw(ctx);
    this.player.tile.draw(ctx);
    ctx.fillText('Hello World!', 50, 50);
  }

  init(): void {
    console.log('loaded?', parallaxes);
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

    if (e.keyMap[Keys.leftArrow]) {
      this.player.tile.x -= e.deltaSec * this.player.speed;
    }
    if (e.keyMap[Keys.rightArrow]) {
      this.player.tile.x += e.deltaSec * this.player.speed;
    }
    if (e.keyMap[Keys.upArrow] && this.player.velocity == 0) {
      this.player.velocity = -700;
    }
    if (e.keyMap[Keys.downArrow]) {
      this.player.tile.y += e.deltaSec * this.player.speed;
    }
    this.player.tile.y += e.deltaSec * (this.player.velocity + e.deltaSec * gravity / 2);
    this.player.velocity += e.deltaSec * gravity;
    if (this.player.tile.y > 660) {
      this.player.velocity = 0;
      this.player.tile.y = 660;
    }
    //if (this.parallax) this.parallax.update(e);
    this.map.update(e);
  }

}
