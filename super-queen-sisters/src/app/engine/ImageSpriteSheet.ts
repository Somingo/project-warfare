import {ImageDescriptor, ImageSprite} from './sprites/ImageSprite';
import {get, reduce, times} from 'lodash';
import {ImageLoader} from './ImageLoader';


export interface SpriteSheetDescriptor {
    name: string;
    imageUrl: string;
    imageDescriptors: { [name: string]: ImageDescriptor };
}

interface ImageSet {
    [name: string]: ImageSprite;
}

export class ImageSpriteSheet {
    private images: ImageSet = {};
    private readonly image: HTMLImageElement;

    constructor(public spriteSheetDescriptor: SpriteSheetDescriptor) {
        this.image = ImageLoader.getInstance().loadImage(this.spriteSheetDescriptor.imageUrl);
        this.images = reduce(this.spriteSheetDescriptor.imageDescriptors, (memo: ImageSet, value: ImageDescriptor, key: string) => {
            memo[key] = new ImageSprite(value, this.image);
            return memo;
        }, {});
    }

    /**
     * Returns an ImageSprite by its name.
     * @param name sprite name
     * @param positionX optional param to set initial position for the resulting sprite
     * @param positionY optional param to set initial position for the resulting sprite
     */
    get(name: string, positionX = 0, positionY = 0): ImageSprite {
        const imageSprite = get(this.images, name, null).clone();
        imageSprite.positionX = positionX;
        imageSprite.positionY = positionY;
        return imageSprite;
    }

    /**
     * Returns a set of ImageSprite. Sprite names will be generated from the pattern.
     * Pattern should contain '{}' what will be replaced by generated indexes started with 0 to count-1.
     * @param pattern pattern to generate sprite names
     * @param count frame count
     */
    getMultipleByPattern(pattern: string = '', count: number): ImageSprite[] {
        return this.getMultiple(times(count, v => pattern.replace('{}', v)));
    }

    /**
     * Returns a set of ImageSprite. Names array contains in order sprite names.
     * @param names name of sprites
     */
    getMultiple(names: string[] = []): ImageSprite[] {
        return names.map(v => this.get(v));
    }
}
