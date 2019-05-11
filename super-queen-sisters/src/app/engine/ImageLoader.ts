export interface LoadedImage {
    path: string;
    image: HTMLImageElement;
}

export class ImageLoader {

    private static instance = new ImageLoader();
    loadedImages: LoadedImage[] = [];
    loading = 0;

    private constructor() {
    }

    public static getInstance(): ImageLoader {
        return ImageLoader.instance;
    }

    onFinished(): void {
        this.loading--;
    }

    onStart(): void {
        this.loading++;
    }


    loadImage(path: string): HTMLImageElement {
        let res = this.loadedImages.filter(x => x.path === path)[0];
        if (res === undefined) {
            const imageToLoad = new Image();
            imageToLoad.src = path;
            imageToLoad.onloadend = () => this.onFinished();
            imageToLoad.onloadstart = () => this.onStart();
            res = {
                path,
                image: imageToLoad
            };
            this.loadedImages.push(res);
        }
        return res.image;
    }
}
