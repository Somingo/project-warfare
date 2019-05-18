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

    autoRepeat: boolean;
    autoStop: boolean;

    private frameTimePrivate = 0;

    private get frameTime(): number {
        return this.frameTimePrivate;
    }

    private set positionX(v: number) {
        this.frames.forEach(imageSprite => imageSprite.positionX = v);
    }

    private set positionY(v: number) {
        this.frames.forEach(imageSprite => imageSprite.positionY = v);
    }

    private deltaSec = 0;
    private currentFrame = 0;
    private isPlaying = false;
    private isVisible = false;

    constructor(descriptor: AnimatedImageSpriteMetaDescriptor, private frames: ImageSprite[] = [], positionX: number, positionY: number) {
        this.fps = descriptor.fps;
        this.autoStop = descriptor.autoStop;
        this.autoRepeat = descriptor.autoRepeat;
        this.positionX = positionX;
        this.positionY = positionY;
    }

    start() {
        this.isPlaying = true;
        this.isVisible = true;
    }

    stop() {
        this.deltaSec = 0;
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
            this.deltaSec += e.deltaSec;
            if (this.deltaSec >= this.frameTime) {
                const deltaFrame = Math.floor(this.deltaSec / this.frameTime);
                this.currentFrame += deltaFrame;
                this.deltaSec -= deltaFrame * this.frameTime;
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
        }
    }

}
