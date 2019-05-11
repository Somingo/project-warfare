import {ImageDescriptor, ImageSprite} from './sprites/ImageSprite';
import {get, reduce} from 'lodash';
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

    get(name: string, positionX = 0, positionY = 0): ImageSprite {
        const imageSprite = get(this.images, name, null).clone();
        imageSprite.positionX = positionX;
        imageSprite.positionY = positionY;
        return imageSprite;
    }
}
