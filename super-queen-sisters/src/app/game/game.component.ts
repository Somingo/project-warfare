import {Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy} from '@angular/core';
import {Sprite} from "../engine/Sprite";
import {KeyboardInputHandler} from "../engine/keyboard/KeyboardInputHandler";
import {UpdateEvent} from "../engine/UpdateEvent";
import {SuperQueenSisters} from "./SuperQueenSisters";


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('gameCanvas') gameCanvas: ElementRef;
  public gameContext: CanvasRenderingContext2D;

  lastUpdated: number = 0;
  game: Sprite = null;
  static keyboardInputHandler = new KeyboardInputHandler();

  isStopped = false;

  constructor() {
  }

  ngAfterViewInit(): void {
    const nativeElement = (<HTMLCanvasElement>this.gameCanvas.nativeElement);
    nativeElement.width = 1280;
    nativeElement.height = 720;
    this.gameContext = nativeElement.getContext('2d');
    this.game = new SuperQueenSisters();
    this.game.init();
    this.start();
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.stop();
  }


  start = () => {
    requestAnimationFrame(this.gameLoop);
  };

  stop = () => {
    this.isStopped = true;
  };

  gameLoop = (timeStamp: number) => {
    if (this.isStopped) return;

    const deltaTime = timeStamp - this.lastUpdated;
    this.lastUpdated = timeStamp;

    this.game.update(new UpdateEvent(deltaTime, GameComponent.keyboardInputHandler.updatedKeyMaps));
    this.game.draw(this.gameContext);

    requestAnimationFrame(this.gameLoop);
  };

}
