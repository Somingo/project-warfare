export class ImageLoader {
    loadedImages: { path: string, image: HTMLImageElement }[] = [];

    loadImage(path: string): any {
        let res = this.loadedImages.filter(x => x.path === path)[0];
        if (res == undefined) {
            const imageToLoad = new Image();
            imageToLoad.src = path;
            res = {
                path: path,
                image: imageToLoad
            };
        }
        return res;
    }
}
