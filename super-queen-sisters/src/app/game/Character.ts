import {Sprite} from '../engine/Sprite';
import {UpdateEvent} from '../engine/UpdateEvent';
import {AnimatedImageSprite, AnimatedImageSpriteMetaDescriptor} from '../engine/sprites/AnimatedImageSprite';
import {times} from 'lodash';
import {ImageSpriteSheet} from '../engine/ImageSpriteSheet';

export enum Directions {
    LEFT = 0,
    RIGHT = 1,
    DIRECTION_COUNT = 2,
}

export enum CharacterAnimation {
    IDLE = 0,
    WALK = 1,
    RUN = 2,
    JUMP = 3,
    ATTACK = 4,
    HURT = 5,
    DIE = 6,
    ANIMATION_COUNT = 7,
}

export abstract class Character implements Sprite {

    abstract spriteSheet: ImageSpriteSheet;

    positionX = 0;
    positionY = 0;
    private lastPosX = 0;
    private lastPosY = 0;

    state: CharacterAnimation = CharacterAnimation.IDLE;
    lastState: CharacterAnimation = CharacterAnimation.IDLE;
    direction: Directions = Directions.RIGHT;
    lastDirection: Directions = Directions.RIGHT;

    private sprites: AnimatedImageSprite[][] = times(
        CharacterAnimation.ANIMATION_COUNT,
        () => times(
            Directions.DIRECTION_COUNT,
            () => null));
    private currentAnimation: AnimatedImageSprite;

    get width() {
        return this.currentAnimation.width;
    }

    get height() {
        return this.currentAnimation.height;
    }

    setSprites(
        desc: AnimatedImageSpriteMetaDescriptor,
        animation: CharacterAnimation,
        leftPattern: string,
        rightPattern: string,
        leftLength: number,
        rightLength: number
    ) {
        this.setSprite(
            new AnimatedImageSprite(desc, this.spriteSheet.getMultipleByPattern(leftPattern, leftLength)),
            animation, Directions.LEFT);
        this.setSprite(
            new AnimatedImageSprite(desc, this.spriteSheet.getMultipleByPattern(rightPattern, rightLength)),
            animation, Directions.RIGHT);
    }

    setSprite(sprite: AnimatedImageSprite, animation: CharacterAnimation, direction: Directions) {
        this.sprites[animation][direction] = sprite;
        sprite.start();
    }

    getSprites(animation: CharacterAnimation, direction: Directions): AnimatedImageSprite {
        return this.sprites[animation][direction];
    }

    draw(ctx: CanvasRenderingContext2D): void {
        this.currentAnimation.draw(ctx);
    }

    init(): void {
        this.initSprites();
        this.currentAnimation = this.getSprites(this.state, this.direction);
    }

    update(e: UpdateEvent): void {
        this.state = CharacterAnimation.IDLE;
        if (this.positionX < this.lastPosX) {
            this.direction = Directions.RIGHT;
            this.state = CharacterAnimation.RUN;
        } else if (this.positionX > this.lastPosX) {
            this.direction = Directions.LEFT;
            this.state = CharacterAnimation.RUN;
        }

        if (this.positionY !== this.lastPosY) {
            this.state = CharacterAnimation.JUMP;
        }

        this.currentAnimation = this.getSprites(this.state, this.direction);
        const lastAnimation = this.getSprites(this.lastState, this.lastDirection);
        if (this.state !== this.lastState) {
            this.currentAnimation.restart();
        } else if (this.lastDirection !== this.direction) {
            this.currentAnimation.restart(lastAnimation.deltaSec);
        }

        this.currentAnimation.positionX = this.positionX;
        this.currentAnimation.positionY = this.positionY;
        this.currentAnimation.update(e);
        this.lastState = this.state;
        this.lastDirection = this.direction;
        this.lastPosX = this.positionX;
        this.lastPosY = this.positionY;
    }

    public abstract initSprites(): void;

}
