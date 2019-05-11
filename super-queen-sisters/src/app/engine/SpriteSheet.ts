import {ImageDescriptor, ImageSprite} from './sprites/ImageSprite';
import {get, reduce} from 'lodash';


export interface SpriteSheetDescriptor { imageDescriptors: { [name: string]: ImageDescriptor }; }
interface ImageSet { [name: string]: ImageSprite; }

export class SpriteSheet {
    images: ImageSet = {};

    constructor(public spriteSheetDescriptor: SpriteSheetDescriptor) {
    }

    init(): void {
        this.images = reduce(this.spriteSheetDescriptor.imageDescriptors, (memo: ImageSet, value: ImageDescriptor, key: string) => {
            memo[key] = new ImageSprite(value);
            return memo;
        }, {});
    }

    get(name: string): ImageSprite {
        return get(this.images, name, null).clone();
    }
}
