export class ParallaxLayerOptions {
    imageUrl: string;
    speed: number;
    aspectRatio: number;

    constructor(imageUrl: string, aspectRatio: number, speed: number) {
        this.imageUrl = imageUrl;
        this.speed = speed;
        this.aspectRatio = aspectRatio;
    }

    static fromObject(o: any): ParallaxLayerOptions {
        return new ParallaxLayerOptions(o.imageUrl, o.aspectRatio, o.speed);
    }
}
