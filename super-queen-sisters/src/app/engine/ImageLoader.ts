export type LoadedImage =  { path: string, image: HTMLImageElement };

export class ImageLoader {
    static loadedImages: LoadedImage[] = [];

    static loadImage(path: string): HTMLImageElement {
        let res = ImageLoader.loadedImages.filter(x => x.path === path)[0];
        if (res == undefined) {
            const imageToLoad = new Image();
            imageToLoad.src = path;
            res = {
                path: path,
                image: imageToLoad
            };
            ImageLoader.loadedImages.push(res);
        }
        return res.image;
    }
}
