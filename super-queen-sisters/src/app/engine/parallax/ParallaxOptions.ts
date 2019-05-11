import {ParallaxLayerOptions} from './ParallaxLayerOptions';

export class ParallaxOptions {
    id: string;
    name: string;
    layerOptions: ParallaxLayerOptions[];

    constructor(id: string, name: string, layerOptions: ParallaxLayerOptions[]) {
        this.id = id;
        this.name = name;
        this.layerOptions = layerOptions;
    }

    static fromObject(o: any): ParallaxOptions {
        return new ParallaxOptions(
            o.id,
            o.name,
            o.layers.map((x: any) => ParallaxLayerOptions.fromObject(x)));
    }

}
