import {ParallaxOptions} from '../engine/parallax/ParallaxOptions';

const paralaxes = {
    "city": {
        "id": "city",
        "name": "City",
        "layers":
            [
                {
                    "imageUrl": "/assets/parallax/px4/layer_08_1920 x 1080.png",
                    "speed": 0,
                    "aspectRatio": 1.7777777777777777
                },
                {
                    "imageUrl": "/assets/parallax/px4/layer_07_1920 x 1080.png",
                    "speed": 100,
                    "aspectRatio": 1.7777777777777777
                },
                {
                    "imageUrl": "/assets/parallax/px4/layer_06_1920 x 1080.png",
                    "speed": 300,
                    "aspectRatio": 1.7777777777777777
                },
                {
                    "imageUrl": "/assets/parallax/px4/layer_05_1920 x 1080.png",
                    "speed": 500,
                    "aspectRatio": 1.7777777777777777
                },
                {
                    "imageUrl": "/assets/parallax/px4/layer_04_1920 x 1080.png",
                    "speed": 1000,
                    "aspectRatio": 1.7777777777777777
                },
                {
                    "imageUrl": "/assets/parallax/px4/layer_03_1920 x 1080.png",
                    "speed": 1500,
                    "aspectRatio": 1.7777777777777777
                },
                {
                    "imageUrl": "/assets/parallax/px4/layer_02_1920 x 1080.png",
                    "speed": 2000,
                    "aspectRatio": 1.7777777777777777
                },
                {
                    "imageUrl": "/assets/parallax/px4/layer_01_1920 x 1080.png",
                    "speed": 5000,
                    "aspectRatio": 1.7777777777777777
                }
            ]
    }
    ,
    "mountain": {
        "id": "mountain",
        "name": "Mountain",
        "layers": [
            {
                "imageUrl": "/assets/parallax/px1/l1.png",
                "speed": 500,
                "aspectRatio": 1.3333333333333333
            },
            {
                "imageUrl": "/assets/parallax/px1/l2.png",
                "speed": 1000,
                "aspectRatio": 1.3333333333333333
            },
            {
                "imageUrl": "/assets/parallax/px1/l3.png",
                "speed": 2000,
                "aspectRatio": 1.3333333333333333
            },
            {
                "imageUrl": "/assets/parallax/px1/l4.png",
                "speed": 4000,
                "aspectRatio": 1.3333333333333333
            },
            {
                "imageUrl": "/assets/parallax/px1/l5.png",
                "speed": 6000,
                "aspectRatio": 1.3333333333333333
            }
        ]
    }
    ,
    "nightWood": {
        "id": "nightWood",
        "name": "Night Wood",
        "layers": [
            {
                "imageUrl": "/assets/parallax/px3/l7.png",
                "speed": 0,
                "aspectRatio": 1.7777777777777777
            },
            {
                "imageUrl": "/assets/parallax/px3/l6.png",
                "speed": 0,
                "aspectRatio": 1.7777777777777777
            },
            {
                "imageUrl": "/assets/parallax/px3/l5.png",
                "speed": 250,
                "aspectRatio": 1.7777777777777777
            },
            {
                "imageUrl": "/assets/parallax/px3/l4.png",
                "speed": 500,
                "aspectRatio": 1.7777777777777777
            },
            {
                "imageUrl": "/assets/parallax/px3/l2.png",
                "speed": 1500,
                "aspectRatio": 1.7777777777777777
            },
            {
                "imageUrl": "/assets/parallax/px3/l3.png",
                "speed": 1000,
                "aspectRatio": 1.7777777777777777
            },
            {
                "imageUrl": "/assets/parallax/px3/l1.png",
                "speed": 2000,
                "aspectRatio": 1.7777777777777777
            }
        ]
    }
};

export const CITY = ParallaxOptions.fromObject(paralaxes.city);
export const MOUNTAIN = ParallaxOptions.fromObject(paralaxes.mountain);
export const NIGHT_WOOD = ParallaxOptions.fromObject(paralaxes.nightWood);
