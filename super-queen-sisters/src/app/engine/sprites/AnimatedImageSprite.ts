import {Sprite} from '../Sprite';
import {UpdateEvent} from '../UpdateEvent';
import {ImageSprite} from './ImageSprite';

export interface AnimatedImageSpriteMetaDescriptor {
    fps: number;
    autoRepeat: boolean;
    autoStop: boolean;
}

export class AnimatedImageSprite implements Sprite, AnimatedImageSpriteMetaDescriptor {

    private fpsPrivate: number;

    public get fps(): number {
        return this.fpsPrivate;
    }

    public set fps(v: number) {
        this.fpsPrivate = v;
        this.frameTimePrivate = 1 / v;
    }

    public get width() {
        return this.frames[this.currentFrame].width;
    }

    public get height() {
        return this.frames[this.currentFrame].height;
    }

    autoRepeat: boolean;
    autoStop: boolean;

    private frameTimePrivate = 0;

    private get frameTime(): number {
        return this.frameTimePrivate;
    }

    public set positionX(v: number) {
        this.frames.forEach(imageSprite => imageSprite.positionX = v);
    }

    public set positionY(v: number) {
        this.frames.forEach(imageSprite => imageSprite.positionY = v);
    }

    private deltaSecPrivate = 0;

    public get deltaSec(): number {
        return this.deltaSecPrivate;
    }

    private currentFrame = 0;
    private isPlaying = false;
    private isVisible = false;

    constructor(descriptor: AnimatedImageSpriteMetaDescriptor, private frames: ImageSprite[] = [], positionX = 0, positionY = 0) {
        this.fps = descriptor.fps;
        this.autoStop = descriptor.autoStop;
        this.autoRepeat = descriptor.autoRepeat;
        this.positionX = positionX;
        this.positionY = positionY;
    }

    restart(deltaSec = 0) {
        this.deltaSecPrivate = deltaSec;
        this.start();
    }

    start() {
        this.isPlaying = true;
        this.isVisible = true;
    }

    stop() {
        this.deltaSecPrivate = 0;
        this.isPlaying = false;
        this.isVisible = false;
    }

    pause() {
        this.isPlaying = false;
    }

    draw(ctx: CanvasRenderingContext2D): void {
        if (this.isVisible) {
            this.frames[this.currentFrame].draw(ctx);
        }
    }

    init(): void {
    }

    update(e: UpdateEvent): void {
        if (this.isPlaying) {
            if (this.deltaSecPrivate >= this.frameTime) {
                const deltaFrame = Math.floor(this.deltaSecPrivate / this.frameTime);
                this.currentFrame += deltaFrame;
                this.deltaSecPrivate -= deltaFrame * this.frameTime;
                if (this.currentFrame >= this.frames.length) {
                    if (this.autoRepeat) {
                        this.currentFrame -= this.frames.length;
                    } else if (this.autoStop) {
                        this.stop();
                    } else {
                        this.currentFrame = this.frames.length - 1;
                        this.pause();
                    }
                }
            }
            this.deltaSecPrivate += e.deltaSec;
        }
    }

}
