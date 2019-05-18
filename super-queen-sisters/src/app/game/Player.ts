import {Character, CharacterAnimation} from './Character';
import {ImageSpriteSheet} from '../engine/ImageSpriteSheet';
import {PLAYER_SPRITE_SHEET} from './spriteSheets';

export class Player extends Character {
    spriteSheet = new ImageSpriteSheet(PLAYER_SPRITE_SHEET);

    private repeatable = {
        fps: 10,
        autoRepeat: true,
        autoStop: false
    };
    private jump = {
        fps: 10,
        autoRepeat: false,
        autoStop: false
    };

    initSprites(): void {
        this.setSprites(this.repeatable, CharacterAnimation.IDLE, 'L_IDLE_{}', 'R_IDLE_{}', 5, 5);
        this.setSprites(this.repeatable, CharacterAnimation.RUN, 'L_RUN_{}', 'R_RUN_{}', 5, 5);
        this.setSprites(this.jump, CharacterAnimation.JUMP, 'L_JUMP_{}', 'R_JUMP_{}', 5, 5);
    }

}
