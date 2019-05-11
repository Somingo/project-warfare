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
        let res: LoadedImage = this.loadedImages.filter((image: LoadedImage) => image.path === path)[0];
        if (res === undefined) {
            const imageToLoad = new Image();
            imageToLoad.onloadend = () => this.onFinished();
            imageToLoad.onloadstart = () => this.onStart();
            imageToLoad.src = path;
            res = {
                path,
                image: imageToLoad
            };
            this.loadedImages.push(res);
        }
        return res.image;
    }
}
