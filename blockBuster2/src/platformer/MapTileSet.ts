import {TileSetOptions} from '../engine/tile/TileSetOptions';
import {TileSet} from '../engine/tile/TileSet';

const tiles = [
    {
        "n": "box",
        "x": 0,
        "y": 864,
        "w": 70,
        "h": 70
    },
    {
        "n": "boxAlt",
        "x": 0,
        "y": 792,
        "w": 70,
        "h": 70
    },
    {
        "n": "boxCoin",
        "x": 0,
        "y": 720,
        "w": 70,
        "h": 70
    },
    {
        "n": "boxCoinAlt",
        "x": 0,
        "y": 576,
        "w": 70,
        "h": 70
    },
    {
        "n": "boxCoinAlt_disabled",
        "x": 0,
        "y": 504,
        "w": 70,
        "h": 70
    },
    {
        "n": "boxCoin_disabled",
        "x": 0,
        "y": 648,
        "w": 70,
        "h": 70
    },
    {
        "n": "boxEmpty",
        "x": 0,
        "y": 432,
        "w": 70,
        "h": 70
    },
    {
        "n": "boxExplosive",
        "x": 0,
        "y": 360,
        "w": 70,
        "h": 70
    },
    {
        "n": "boxExplosiveAlt",
        "x": 0,
        "y": 216,
        "w": 70,
        "h": 70
    },
    {
        "n": "boxExplosive_disabled",
        "x": 0,
        "y": 288,
        "w": 70,
        "h": 70
    },
    {
        "n": "boxItem",
        "x": 0,
        "y": 144,
        "w": 70,
        "h": 70
    },
    {
        "n": "boxItemAlt",
        "x": 0,
        "y": 0,
        "w": 70,
        "h": 70
    },
    {
        "n": "boxItemAlt_disabled",
        "x": 432,
        "y": 432,
        "w": 70,
        "h": 70
    },
    {
        "n": "boxItem_disabled",
        "x": 0,
        "y": 72,
        "w": 70,
        "h": 70
    },
    {
        "n": "boxWarning",
        "x": 72,
        "y": 648,
        "w": 70,
        "h": 70
    },
    {
        "n": "brickWall",
        "x": 216,
        "y": 0,
        "w": 70,
        "h": 70
    },
    {
        "n": "bridge",
        "x": 216,
        "y": 72,
        "w": 70,
        "h": 70
    },
    {
        "n": "bridgeLogs",
        "x": 288,
        "y": 720,
        "w": 70,
        "h": 70
    },
    {
        "n": "castle",
        "x": 288,
        "y": 792,
        "w": 70,
        "h": 70
    },
    {
        "n": "castleCenter",
        "x": 504,
        "y": 288,
        "w": 70,
        "h": 70
    },
    {
        "n": "castleCenter_rounded",
        "x": 504,
        "y": 720,
        "w": 70,
        "h": 70
    },
    {
        "n": "castleCliffLeft",
        "x": 504,
        "y": 792,
        "w": 70,
        "h": 70
    },
    {
        "n": "castleCliffLeftAlt",
        "x": 648,
        "y": 720,
        "w": 70,
        "h": 70
    },
    {
        "n": "castleCliffRight",
        "x": 648,
        "y": 792,
        "w": 70,
        "h": 70
    },
    {
        "n": "castleCliffRightAlt",
        "x": 792,
        "y": 288,
        "w": 70,
        "h": 70
    },
    {
        "n": "castleHalf",
        "x": 792,
        "y": 360,
        "w": 70,
        "h": 70
    },
    {
        "n": "castleHalfLeft",
        "x": 432,
        "y": 720,
        "w": 70,
        "h": 70
    },
    {
        "n": "castleHalfMid",
        "x": 648,
        "y": 648,
        "w": 70,
        "h": 70
    },
    {
        "n": "castleHalfRight",
        "x": 792,
        "y": 648,
        "w": 70,
        "h": 70
    },
    {
        "n": "castleHillLeft",
        "x": 648,
        "y": 576,
        "w": 70,
        "h": 70
    },
    {
        "n": "castleHillLeft2",
        "x": 792,
        "y": 576,
        "w": 70,
        "h": 70
    },
    {
        "n": "castleHillRight",
        "x": 792,
        "y": 504,
        "w": 70,
        "h": 70
    },
    {
        "n": "castleHillRight2",
        "x": 792,
        "y": 432,
        "w": 70,
        "h": 70
    },
    {
        "n": "castleLedgeLeft",
        "x": 856,
        "y": 868,
        "w": 5,
        "h": 22
    },
    {
        "n": "castleLedgeRight",
        "x": 842,
        "y": 868,
        "w": 5,
        "h": 22
    },
    {
        "n": "castleLeft",
        "x": 792,
        "y": 216,
        "w": 70,
        "h": 70
    },
    {
        "n": "castleMid",
        "x": 792,
        "y": 144,
        "w": 70,
        "h": 70
    },
    {
        "n": "castleRight",
        "x": 792,
        "y": 72,
        "w": 70,
        "h": 70
    },
    {
        "n": "dirt",
        "x": 792,
        "y": 0,
        "w": 70,
        "h": 70
    },
    {
        "n": "dirtCenter",
        "x": 720,
        "y": 864,
        "w": 70,
        "h": 70
    },
    {
        "n": "dirtCenter_rounded",
        "x": 720,
        "y": 792,
        "w": 70,
        "h": 70
    },
    {
        "n": "dirtCliffLeft",
        "x": 720,
        "y": 720,
        "w": 70,
        "h": 70
    },
    {
        "n": "dirtCliffLeftAlt",
        "x": 720,
        "y": 648,
        "w": 70,
        "h": 70
    },
    {
        "n": "dirtCliffRight",
        "x": 720,
        "y": 576,
        "w": 70,
        "h": 70
    },
    {
        "n": "dirtCliffRightAlt",
        "x": 720,
        "y": 504,
        "w": 70,
        "h": 70
    },
    {
        "n": "dirtHalf",
        "x": 720,
        "y": 432,
        "w": 70,
        "h": 70
    },
    {
        "n": "dirtHalfLeft",
        "x": 720,
        "y": 360,
        "w": 70,
        "h": 70
    },
    {
        "n": "dirtHalfMid",
        "x": 720,
        "y": 288,
        "w": 70,
        "h": 70
    },
    {
        "n": "dirtHalfRight",
        "x": 720,
        "y": 216,
        "w": 70,
        "h": 70
    },
    {
        "n": "dirtHillLeft",
        "x": 720,
        "y": 144,
        "w": 70,
        "h": 70
    },
    {
        "n": "dirtHillLeft2",
        "x": 720,
        "y": 72,
        "w": 70,
        "h": 70
    },
    {
        "n": "dirtHillRight",
        "x": 720,
        "y": 0,
        "w": 70,
        "h": 70
    },
    {
        "n": "dirtHillRight2",
        "x": 648,
        "y": 864,
        "w": 70,
        "h": 70
    },
    {
        "n": "dirtLedgeLeft",
        "x": 842,
        "y": 892,
        "w": 5,
        "h": 18
    },
    {
        "n": "dirtLedgeRight",
        "x": 842,
        "y": 912,
        "w": 5,
        "h": 18
    },
    {
        "n": "dirtLeft",
        "x": 504,
        "y": 432,
        "w": 70,
        "h": 70
    },
    {
        "n": "dirtMid",
        "x": 504,
        "y": 360,
        "w": 70,
        "h": 70
    },
    {
        "n": "dirtRight",
        "x": 648,
        "y": 504,
        "w": 70,
        "h": 70
    },
    {
        "n": "door_closedMid",
        "x": 648,
        "y": 432,
        "w": 70,
        "h": 70
    },
    {
        "n": "door_closedTop",
        "x": 648,
        "y": 360,
        "w": 70,
        "h": 70
    },
    {
        "n": "door_openMid",
        "x": 648,
        "y": 288,
        "w": 70,
        "h": 70
    },
    {
        "n": "door_openTop",
        "x": 648,
        "y": 216,
        "w": 70,
        "h": 70
    },
    {
        "n": "fence",
        "x": 648,
        "y": 144,
        "w": 70,
        "h": 70
    },
    {
        "n": "fenceBroken",
        "x": 648,
        "y": 72,
        "w": 70,
        "h": 70
    },
    {
        "n": "grass",
        "x": 648,
        "y": 0,
        "w": 70,
        "h": 70
    },
    {
        "n": "grassCenter",
        "x": 576,
        "y": 864,
        "w": 70,
        "h": 70
    },
    {
        "n": "grassCenter_rounded",
        "x": 576,
        "y": 792,
        "w": 70,
        "h": 70
    },
    {
        "n": "grassCliffLeft",
        "x": 576,
        "y": 720,
        "w": 70,
        "h": 70
    },
    {
        "n": "grassCliffLeftAlt",
        "x": 576,
        "y": 648,
        "w": 70,
        "h": 70
    },
    {
        "n": "grassCliffRight",
        "x": 576,
        "y": 576,
        "w": 70,
        "h": 70
    },
    {
        "n": "grassCliffRightAlt",
        "x": 576,
        "y": 504,
        "w": 70,
        "h": 70
    },
    {
        "n": "grassHalf",
        "x": 576,
        "y": 432,
        "w": 70,
        "h": 70
    },
    {
        "n": "grassHalfLeft",
        "x": 576,
        "y": 360,
        "w": 70,
        "h": 70
    },
    {
        "n": "grassHalfMid",
        "x": 576,
        "y": 288,
        "w": 70,
        "h": 70
    },
    {
        "n": "grassHalfRight",
        "x": 576,
        "y": 216,
        "w": 70,
        "h": 70
    },
    {
        "n": "grassHillLeft",
        "x": 576,
        "y": 144,
        "w": 70,
        "h": 70
    },
    {
        "n": "grassHillLeft2",
        "x": 576,
        "y": 72,
        "w": 70,
        "h": 70
    },
    {
        "n": "grassHillRight",
        "x": 576,
        "y": 0,
        "w": 70,
        "h": 70
    },
    {
        "n": "grassHillRight2",
        "x": 504,
        "y": 864,
        "w": 70,
        "h": 70
    },
    {
        "n": "grassLedgeLeft",
        "x": 849,
        "y": 868,
        "w": 5,
        "h": 24
    },
    {
        "n": "grassLedgeRight",
        "x": 849,
        "y": 894,
        "w": 5,
        "h": 24
    },
    {
        "n": "grassLeft",
        "x": 504,
        "y": 648,
        "w": 70,
        "h": 70
    },
    {
        "n": "grassMid",
        "x": 504,
        "y": 576,
        "w": 70,
        "h": 70
    },
    {
        "n": "grassRight",
        "x": 504,
        "y": 504,
        "w": 70,
        "h": 70
    },
    {
        "n": "hill_large",
        "x": 842,
        "y": 720,
        "w": 48,
        "h": 146
    },
    {
        "n": "hill_largeAlt",
        "x": 864,
        "y": 0,
        "w": 48,
        "h": 146
    },
    {
        "n": "hill_small",
        "x": 792,
        "y": 828,
        "w": 48,
        "h": 106
    },
    {
        "n": "hill_smallAlt",
        "x": 792,
        "y": 720,
        "w": 48,
        "h": 106
    },
    {
        "n": "ladder_mid",
        "x": 504,
        "y": 144,
        "w": 70,
        "h": 70
    },
    {
        "n": "ladder_top",
        "x": 504,
        "y": 72,
        "w": 70,
        "h": 70
    },
    {
        "n": "liquidLava",
        "x": 504,
        "y": 0,
        "w": 70,
        "h": 70
    },
    {
        "n": "liquidLavaTop",
        "x": 432,
        "y": 864,
        "w": 70,
        "h": 70
    },
    {
        "n": "liquidLavaTop_mid",
        "x": 432,
        "y": 792,
        "w": 70,
        "h": 70
    },
    {
        "n": "liquidWater",
        "x": 504,
        "y": 216,
        "w": 70,
        "h": 70
    },
    {
        "n": "liquidWaterTop",
        "x": 432,
        "y": 648,
        "w": 70,
        "h": 70
    },
    {
        "n": "liquidWaterTop_mid",
        "x": 432,
        "y": 576,
        "w": 70,
        "h": 70
    },
    {
        "n": "lock_blue",
        "x": 432,
        "y": 504,
        "w": 70,
        "h": 70
    },
    {
        "n": "lock_green",
        "x": 72,
        "y": 576,
        "w": 70,
        "h": 70
    },
    {
        "n": "lock_red",
        "x": 432,
        "y": 360,
        "w": 70,
        "h": 70
    },
    {
        "n": "lock_yellow",
        "x": 432,
        "y": 288,
        "w": 70,
        "h": 70
    },
    {
        "n": "rockHillLeft",
        "x": 432,
        "y": 216,
        "w": 70,
        "h": 70
    },
    {
        "n": "rockHillRight",
        "x": 432,
        "y": 144,
        "w": 70,
        "h": 70
    },
    {
        "n": "ropeAttached",
        "x": 432,
        "y": 72,
        "w": 70,
        "h": 70
    },
    {
        "n": "ropeHorizontal",
        "x": 432,
        "y": 0,
        "w": 70,
        "h": 70
    },
    {
        "n": "ropeVertical",
        "x": 360,
        "y": 864,
        "w": 70,
        "h": 70
    },
    {
        "n": "sand",
        "x": 360,
        "y": 792,
        "w": 70,
        "h": 70
    },
    {
        "n": "sandCenter",
        "x": 576,
        "y": 864,
        "w": 70,
        "h": 70
    },
    {
        "n": "sandCenter_rounded",
        "x": 576,
        "y": 792,
        "w": 70,
        "h": 70
    },
    {
        "n": "sandCliffLeft",
        "x": 360,
        "y": 720,
        "w": 70,
        "h": 70
    },
    {
        "n": "sandCliffLeftAlt",
        "x": 360,
        "y": 648,
        "w": 70,
        "h": 70
    },
    {
        "n": "sandCliffRight",
        "x": 360,
        "y": 576,
        "w": 70,
        "h": 70
    },
    {
        "n": "sandCliffRightAlt",
        "x": 360,
        "y": 504,
        "w": 70,
        "h": 70
    },
    {
        "n": "sandHalf",
        "x": 360,
        "y": 432,
        "w": 70,
        "h": 70
    },
    {
        "n": "sandHalfLeft",
        "x": 360,
        "y": 360,
        "w": 70,
        "h": 70
    },
    {
        "n": "sandHalfMid",
        "x": 360,
        "y": 288,
        "w": 70,
        "h": 70
    },
    {
        "n": "sandHalfRight",
        "x": 360,
        "y": 216,
        "w": 70,
        "h": 70
    },
    {
        "n": "sandHillLeft",
        "x": 360,
        "y": 144,
        "w": 70,
        "h": 70
    },
    {
        "n": "sandHillLeft2",
        "x": 360,
        "y": 72,
        "w": 70,
        "h": 70
    },
    {
        "n": "sandHillRight",
        "x": 360,
        "y": 0,
        "w": 70,
        "h": 70
    },
    {
        "n": "sandHillRight2",
        "x": 288,
        "y": 864,
        "w": 70,
        "h": 70
    },
    {
        "n": "sandLedgeLeft",
        "x": 856,
        "y": 892,
        "w": 5,
        "h": 18
    },
    {
        "n": "sandLedgeRight",
        "x": 856,
        "y": 912,
        "w": 5,
        "h": 18
    },
    {
        "n": "sandLeft",
        "x": 288,
        "y": 648,
        "w": 70,
        "h": 70
    },
    {
        "n": "sandMid",
        "x": 288,
        "y": 576,
        "w": 70,
        "h": 70
    },
    {
        "n": "sandRight",
        "x": 288,
        "y": 504,
        "w": 70,
        "h": 70
    },
    {
        "n": "sign",
        "x": 288,
        "y": 432,
        "w": 70,
        "h": 70
    },
    {
        "n": "signExit",
        "x": 288,
        "y": 360,
        "w": 70,
        "h": 70
    },
    {
        "n": "signLeft",
        "x": 288,
        "y": 288,
        "w": 70,
        "h": 70
    },
    {
        "n": "signRight",
        "x": 288,
        "y": 216,
        "w": 70,
        "h": 70
    },
    {
        "n": "snow",
        "x": 288,
        "y": 144,
        "w": 70,
        "h": 70
    },
    {
        "n": "snowCenter",
        "x": 720,
        "y": 864,
        "w": 70,
        "h": 70
    },
    {
        "n": "snowCenter_rounded",
        "x": 288,
        "y": 72,
        "w": 70,
        "h": 70
    },
    {
        "n": "snowCliffLeft",
        "x": 288,
        "y": 0,
        "w": 70,
        "h": 70
    },
    {
        "n": "snowCliffLeftAlt",
        "x": 216,
        "y": 864,
        "w": 70,
        "h": 70
    },
    {
        "n": "snowCliffRight",
        "x": 216,
        "y": 792,
        "w": 70,
        "h": 70
    },
    {
        "n": "snowCliffRightAlt",
        "x": 216,
        "y": 720,
        "w": 70,
        "h": 70
    },
    {
        "n": "snowHalf",
        "x": 216,
        "y": 648,
        "w": 70,
        "h": 70
    },
    {
        "n": "snowHalfLeft",
        "x": 216,
        "y": 576,
        "w": 70,
        "h": 70
    },
    {
        "n": "snowHalfMid",
        "x": 216,
        "y": 504,
        "w": 70,
        "h": 70
    },
    {
        "n": "snowHalfRight",
        "x": 216,
        "y": 432,
        "w": 70,
        "h": 70
    },
    {
        "n": "snowHillLeft",
        "x": 216,
        "y": 360,
        "w": 70,
        "h": 70
    },
    {
        "n": "snowHillLeft2",
        "x": 216,
        "y": 288,
        "w": 70,
        "h": 70
    },
    {
        "n": "snowHillRight",
        "x": 216,
        "y": 216,
        "w": 70,
        "h": 70
    },
    {
        "n": "snowHillRight2",
        "x": 216,
        "y": 144,
        "w": 70,
        "h": 70
    },
    {
        "n": "snowLedgeLeft",
        "x": 863,
        "y": 868,
        "w": 5,
        "h": 18
    },
    {
        "n": "snowLedgeRight",
        "x": 863,
        "y": 888,
        "w": 5,
        "h": 18
    },
    {
        "n": "snowLeft",
        "x": 144,
        "y": 864,
        "w": 70,
        "h": 70
    },
    {
        "n": "snowMid",
        "x": 144,
        "y": 792,
        "w": 70,
        "h": 70
    },
    {
        "n": "snowRight",
        "x": 144,
        "y": 720,
        "w": 70,
        "h": 70
    },
    {
        "n": "stone",
        "x": 144,
        "y": 648,
        "w": 70,
        "h": 70
    },
    {
        "n": "stoneCenter",
        "x": 144,
        "y": 576,
        "w": 70,
        "h": 70
    },
    {
        "n": "stoneCenter_rounded",
        "x": 144,
        "y": 504,
        "w": 70,
        "h": 70
    },
    {
        "n": "stoneCliffLeft",
        "x": 144,
        "y": 432,
        "w": 70,
        "h": 70
    },
    {
        "n": "stoneCliffLeftAlt",
        "x": 144,
        "y": 360,
        "w": 70,
        "h": 70
    },
    {
        "n": "stoneCliffRight",
        "x": 144,
        "y": 288,
        "w": 70,
        "h": 70
    },
    {
        "n": "stoneCliffRightAlt",
        "x": 144,
        "y": 216,
        "w": 70,
        "h": 70
    },
    {
        "n": "stoneHalf",
        "x": 144,
        "y": 144,
        "w": 70,
        "h": 70
    },
    {
        "n": "stoneHalfLeft",
        "x": 144,
        "y": 72,
        "w": 70,
        "h": 70
    },
    {
        "n": "stoneHalfMid",
        "x": 144,
        "y": 0,
        "w": 70,
        "h": 70
    },
    {
        "n": "stoneHalfRight",
        "x": 72,
        "y": 864,
        "w": 70,
        "h": 70
    },
    {
        "n": "stoneHillLeft2",
        "x": 72,
        "y": 792,
        "w": 70,
        "h": 70
    },
    {
        "n": "stoneHillRight2",
        "x": 72,
        "y": 720,
        "w": 70,
        "h": 70
    },
    {
        "n": "stoneLedgeLeft",
        "x": 863,
        "y": 908,
        "w": 5,
        "h": 24
    },
    {
        "n": "stoneLedgeRight",
        "x": 864,
        "y": 148,
        "w": 5,
        "h": 24
    },
    {
        "n": "stoneLeft",
        "x": 72,
        "y": 504,
        "w": 70,
        "h": 70
    },
    {
        "n": "stoneMid",
        "x": 72,
        "y": 432,
        "w": 70,
        "h": 70
    },
    {
        "n": "stoneRight",
        "x": 72,
        "y": 360,
        "w": 70,
        "h": 70
    },
    {
        "n": "stoneWall",
        "x": 72,
        "y": 288,
        "w": 70,
        "h": 70
    },
    {
        "n": "tochLit",
        "x": 72,
        "y": 216,
        "w": 70,
        "h": 70
    },
    {
        "n": "tochLit2",
        "x": 72,
        "y": 144,
        "w": 70,
        "h": 70
    },
    {
        "n": "torch",
        "x": 72,
        "y": 72,
        "w": 70,
        "h": 70
    },
    {
        "n": "window",
        "x": 72,
        "y": 0,
        "w": 70,
        "h": 70
    }
];

const mapTileSet = {
    url: '/assets/tilesets/t1/tiles_spritesheet.png',
    tiles: tiles
};

export const MAP_TILE_SET_OPTIONS = TileSetOptions.fromObject(mapTileSet);

export const MAP_TILE_SET = new TileSet(MAP_TILE_SET_OPTIONS);
