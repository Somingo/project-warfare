import {SpriteSheetDescriptor} from '../engine/ImageSpriteSheet';

export const BASIC_MAP_TILE_SPRITE_SHEET: SpriteSheetDescriptor = {
    name: 'BASIC_MAP_TILE_SPRITE_SHEET',
    imageUrl: '/assets/tiles_spritesheet.png',
    imageDescriptors: {
        CLEAR: {offsetX: 1000, offsetY: 1000, width: 70, height: 70},
        box: {offsetX: 0, offsetY: 864, width: 70, height: 70},
        boxAlt: {offsetX: 0, offsetY: 792, width: 70, height: 70},
        boxCoin: {offsetX: 0, offsetY: 720, width: 70, height: 70},
        boxCoinAlt: {offsetX: 0, offsetY: 576, width: 70, height: 70},
        boxCoinAlt_disabled: {offsetX: 0, offsetY: 504, width: 70, height: 70},
        boxCoin_disabled: {offsetX: 0, offsetY: 648, width: 70, height: 70},
        boxEmpty: {offsetX: 0, offsetY: 432, width: 70, height: 70},
        boxExplosive: {offsetX: 0, offsetY: 360, width: 70, height: 70},
        boxExplosiveAlt: {offsetX: 0, offsetY: 216, width: 70, height: 70},
        boxExplosive_disabled: {offsetX: 0, offsetY: 288, width: 70, height: 70},
        boxItem: {offsetX: 0, offsetY: 144, width: 70, height: 70},
        boxItemAlt: {offsetX: 0, offsetY: 0, width: 70, height: 70},
        boxItemAlt_disabled: {offsetX: 432, offsetY: 432, width: 70, height: 70},
        boxItem_disabled: {offsetX: 0, offsetY: 72, width: 70, height: 70},
        boxWarning: {offsetX: 72, offsetY: 648, width: 70, height: 70},
        brickWall: {offsetX: 216, offsetY: 0, width: 70, height: 70},
        bridge: {offsetX: 216, offsetY: 72, width: 70, height: 70},
        bridgeLogs: {offsetX: 288, offsetY: 720, width: 70, height: 70},
        castle: {offsetX: 288, offsetY: 792, width: 70, height: 70},
        castleCenter: {offsetX: 504, offsetY: 288, width: 70, height: 70},
        castleCenter_rounded: {offsetX: 504, offsetY: 720, width: 70, height: 70},
        castleCliffLeft: {offsetX: 504, offsetY: 792, width: 70, height: 70},
        castleCliffLeftAlt: {offsetX: 648, offsetY: 720, width: 70, height: 70},
        castleCliffRight: {offsetX: 648, offsetY: 792, width: 70, height: 70},
        castleCliffRightAlt: {offsetX: 792, offsetY: 288, width: 70, height: 70},
        castleHalf: {offsetX: 792, offsetY: 360, width: 70, height: 70},
        castleHalfLeft: {offsetX: 432, offsetY: 720, width: 70, height: 70},
        castleHalfMid: {offsetX: 648, offsetY: 648, width: 70, height: 70},
        castleHalfRight: {offsetX: 792, offsetY: 648, width: 70, height: 70},
        castleHillLeft: {offsetX: 648, offsetY: 576, width: 70, height: 70},
        castleHillLeft2: {offsetX: 792, offsetY: 576, width: 70, height: 70},
        castleHillRight: {offsetX: 792, offsetY: 504, width: 70, height: 70},
        castleHillRight2: {offsetX: 792, offsetY: 432, width: 70, height: 70},
        castleLedgeLeft: {offsetX: 856, offsetY: 868, width: 5, height: 22},
        castleLedgeRight: {offsetX: 842, offsetY: 868, width: 5, height: 22},
        castleLeft: {offsetX: 792, offsetY: 216, width: 70, height: 70},
        castleMid: {offsetX: 792, offsetY: 144, width: 70, height: 70},
        castleRight: {offsetX: 792, offsetY: 72, width: 70, height: 70},
        dirt: {offsetX: 792, offsetY: 0, width: 70, height: 70},
        dirtCenter: {offsetX: 720, offsetY: 864, width: 70, height: 70},
        dirtCenter_rounded: {offsetX: 720, offsetY: 792, width: 70, height: 70},
        dirtCliffLeft: {offsetX: 720, offsetY: 720, width: 70, height: 70},
        dirtCliffLeftAlt: {offsetX: 720, offsetY: 648, width: 70, height: 70},
        dirtCliffRight: {offsetX: 720, offsetY: 576, width: 70, height: 70},
        dirtCliffRightAlt: {offsetX: 720, offsetY: 504, width: 70, height: 70},
        dirtHalf: {offsetX: 720, offsetY: 432, width: 70, height: 70},
        dirtHalfLeft: {offsetX: 720, offsetY: 360, width: 70, height: 70},
        dirtHalfMid: {offsetX: 720, offsetY: 288, width: 70, height: 70},
        dirtHalfRight: {offsetX: 720, offsetY: 216, width: 70, height: 70},
        dirtHillLeft: {offsetX: 720, offsetY: 144, width: 70, height: 70},
        dirtHillLeft2: {offsetX: 720, offsetY: 72, width: 70, height: 70},
        dirtHillRight: {offsetX: 720, offsetY: 0, width: 70, height: 70},
        dirtHillRight2: {offsetX: 648, offsetY: 864, width: 70, height: 70},
        dirtLedgeLeft: {offsetX: 842, offsetY: 892, width: 5, height: 18},
        dirtLedgeRight: {offsetX: 842, offsetY: 912, width: 5, height: 18},
        dirtLeft: {offsetX: 504, offsetY: 432, width: 70, height: 70},
        dirtMid: {offsetX: 504, offsetY: 360, width: 70, height: 70},
        dirtRight: {offsetX: 648, offsetY: 504, width: 70, height: 70},
        door_closedMid: {offsetX: 648, offsetY: 432, width: 70, height: 70},
        door_closedTop: {offsetX: 648, offsetY: 360, width: 70, height: 70},
        door_openMid: {offsetX: 648, offsetY: 288, width: 70, height: 70},
        door_openTop: {offsetX: 648, offsetY: 216, width: 70, height: 70},
        fence: {offsetX: 648, offsetY: 144, width: 70, height: 70},
        fenceBroken: {offsetX: 648, offsetY: 72, width: 70, height: 70},
        grass: {offsetX: 648, offsetY: 0, width: 70, height: 70},
        grassCenter: {offsetX: 576, offsetY: 864, width: 70, height: 70},
        grassCenter_rounded: {offsetX: 576, offsetY: 792, width: 70, height: 70},
        grassCliffLeft: {offsetX: 576, offsetY: 720, width: 70, height: 70},
        grassCliffLeftAlt: {offsetX: 576, offsetY: 648, width: 70, height: 70},
        grassCliffRight: {offsetX: 576, offsetY: 576, width: 70, height: 70},
        grassCliffRightAlt: {offsetX: 576, offsetY: 504, width: 70, height: 70},
        grassHalf: {offsetX: 576, offsetY: 432, width: 70, height: 70},
        grassHalfLeft: {offsetX: 576, offsetY: 360, width: 70, height: 70},
        grassHalfMid: {offsetX: 576, offsetY: 288, width: 70, height: 70},
        grassHalfRight: {offsetX: 576, offsetY: 216, width: 70, height: 70},
        grassHillLeft: {offsetX: 576, offsetY: 144, width: 70, height: 70},
        grassHillLeft2: {offsetX: 576, offsetY: 72, width: 70, height: 70},
        grassHillRight: {offsetX: 576, offsetY: 0, width: 70, height: 70},
        grassHillRight2: {offsetX: 504, offsetY: 864, width: 70, height: 70},
        grassLedgeLeft: {offsetX: 849, offsetY: 868, width: 5, height: 24},
        grassLedgeRight: {offsetX: 849, offsetY: 894, width: 5, height: 24},
        grassLeft: {offsetX: 504, offsetY: 648, width: 70, height: 70},
        grassMid: {offsetX: 504, offsetY: 576, width: 70, height: 70},
        grassRight: {offsetX: 504, offsetY: 504, width: 70, height: 70},
        hill_large: {offsetX: 842, offsetY: 720, width: 48, height: 146},
        hill_largeAlt: {offsetX: 864, offsetY: 0, width: 48, height: 146},
        hill_small: {offsetX: 792, offsetY: 828, width: 48, height: 106},
        hill_smallAlt: {offsetX: 792, offsetY: 720, width: 48, height: 106},
        ladder_mid: {offsetX: 504, offsetY: 144, width: 70, height: 70},
        ladder_top: {offsetX: 504, offsetY: 72, width: 70, height: 70},
        liquidLava: {offsetX: 504, offsetY: 0, width: 70, height: 70},
        liquidLavaTop: {offsetX: 432, offsetY: 864, width: 70, height: 70},
        liquidLavaTop_mid: {offsetX: 432, offsetY: 792, width: 70, height: 70},
        liquidWater: {offsetX: 504, offsetY: 216, width: 70, height: 70},
        liquidWaterTop: {offsetX: 432, offsetY: 648, width: 70, height: 70},
        liquidWaterTop_mid: {offsetX: 432, offsetY: 576, width: 70, height: 70},
        lock_blue: {offsetX: 432, offsetY: 504, width: 70, height: 70},
        lock_green: {offsetX: 72, offsetY: 576, width: 70, height: 70},
        lock_red: {offsetX: 432, offsetY: 360, width: 70, height: 70},
        lock_yellow: {offsetX: 432, offsetY: 288, width: 70, height: 70},
        rockHillLeft: {offsetX: 432, offsetY: 216, width: 70, height: 70},
        rockHillRight: {offsetX: 432, offsetY: 144, width: 70, height: 70},
        ropeAttached: {offsetX: 432, offsetY: 72, width: 70, height: 70},
        ropeHorizontal: {offsetX: 432, offsetY: 0, width: 70, height: 70},
        ropeVertical: {offsetX: 360, offsetY: 864, width: 70, height: 70},
        sand: {offsetX: 360, offsetY: 792, width: 70, height: 70},
        sandCenter: {offsetX: 576, offsetY: 864, width: 70, height: 70},
        sandCenter_rounded: {offsetX: 576, offsetY: 792, width: 70, height: 70},
        sandCliffLeft: {offsetX: 360, offsetY: 720, width: 70, height: 70},
        sandCliffLeftAlt: {offsetX: 360, offsetY: 648, width: 70, height: 70},
        sandCliffRight: {offsetX: 360, offsetY: 576, width: 70, height: 70},
        sandCliffRightAlt: {offsetX: 360, offsetY: 504, width: 70, height: 70},
        sandHalf: {offsetX: 360, offsetY: 432, width: 70, height: 70},
        sandHalfLeft: {offsetX: 360, offsetY: 360, width: 70, height: 70},
        sandHalfMid: {offsetX: 360, offsetY: 288, width: 70, height: 70},
        sandHalfRight: {offsetX: 360, offsetY: 216, width: 70, height: 70},
        sandHillLeft: {offsetX: 360, offsetY: 144, width: 70, height: 70},
        sandHillLeft2: {offsetX: 360, offsetY: 72, width: 70, height: 70},
        sandHillRight: {offsetX: 360, offsetY: 0, width: 70, height: 70},
        sandHillRight2: {offsetX: 288, offsetY: 864, width: 70, height: 70},
        sandLedgeLeft: {offsetX: 856, offsetY: 892, width: 5, height: 18},
        sandLedgeRight: {offsetX: 856, offsetY: 912, width: 5, height: 18},
        sandLeft: {offsetX: 288, offsetY: 648, width: 70, height: 70},
        sandMid: {offsetX: 288, offsetY: 576, width: 70, height: 70},
        sandRight: {offsetX: 288, offsetY: 504, width: 70, height: 70},
        sign: {offsetX: 288, offsetY: 432, width: 70, height: 70},
        signExit: {offsetX: 288, offsetY: 360, width: 70, height: 70},
        signLeft: {offsetX: 288, offsetY: 288, width: 70, height: 70},
        signRight: {offsetX: 288, offsetY: 216, width: 70, height: 70},
        snow: {offsetX: 288, offsetY: 144, width: 70, height: 70},
        snowCenter: {offsetX: 720, offsetY: 864, width: 70, height: 70},
        snowCenter_rounded: {offsetX: 288, offsetY: 72, width: 70, height: 70},
        snowCliffLeft: {offsetX: 288, offsetY: 0, width: 70, height: 70},
        snowCliffLeftAlt: {offsetX: 216, offsetY: 864, width: 70, height: 70},
        snowCliffRight: {offsetX: 216, offsetY: 792, width: 70, height: 70},
        snowCliffRightAlt: {offsetX: 216, offsetY: 720, width: 70, height: 70},
        snowHalf: {offsetX: 216, offsetY: 648, width: 70, height: 70},
        snowHalfLeft: {offsetX: 216, offsetY: 576, width: 70, height: 70},
        snowHalfMid: {offsetX: 216, offsetY: 504, width: 70, height: 70},
        snowHalfRight: {offsetX: 216, offsetY: 432, width: 70, height: 70},
        snowHillLeft: {offsetX: 216, offsetY: 360, width: 70, height: 70},
        snowHillLeft2: {offsetX: 216, offsetY: 288, width: 70, height: 70},
        snowHillRight: {offsetX: 216, offsetY: 216, width: 70, height: 70},
        snowHillRight2: {offsetX: 216, offsetY: 144, width: 70, height: 70},
        snowLedgeLeft: {offsetX: 863, offsetY: 868, width: 5, height: 18},
        snowLedgeRight: {offsetX: 863, offsetY: 888, width: 5, height: 18},
        snowLeft: {offsetX: 144, offsetY: 864, width: 70, height: 70},
        snowMid: {offsetX: 144, offsetY: 792, width: 70, height: 70},
        snowRight: {offsetX: 144, offsetY: 720, width: 70, height: 70},
        stone: {offsetX: 144, offsetY: 648, width: 70, height: 70},
        stoneCenter: {offsetX: 144, offsetY: 576, width: 70, height: 70},
        stoneCenter_rounded: {offsetX: 144, offsetY: 504, width: 70, height: 70},
        stoneCliffLeft: {offsetX: 144, offsetY: 432, width: 70, height: 70},
        stoneCliffLeftAlt: {offsetX: 144, offsetY: 360, width: 70, height: 70},
        stoneCliffRight: {offsetX: 144, offsetY: 288, width: 70, height: 70},
        stoneCliffRightAlt: {offsetX: 144, offsetY: 216, width: 70, height: 70},
        stoneHalf: {offsetX: 144, offsetY: 144, width: 70, height: 70},
        stoneHalfLeft: {offsetX: 144, offsetY: 72, width: 70, height: 70},
        stoneHalfMid: {offsetX: 144, offsetY: 0, width: 70, height: 70},
        stoneHalfRight: {offsetX: 72, offsetY: 864, width: 70, height: 70},
        stoneHillLeft2: {offsetX: 72, offsetY: 792, width: 70, height: 70},
        stoneHillRight2: {offsetX: 72, offsetY: 720, width: 70, height: 70},
        stoneLedgeLeft: {offsetX: 863, offsetY: 908, width: 5, height: 24},
        stoneLedgeRight: {offsetX: 864, offsetY: 148, width: 5, height: 24},
        stoneLeft: {offsetX: 72, offsetY: 504, width: 70, height: 70},
        stoneMid: {offsetX: 72, offsetY: 432, width: 70, height: 70},
        stoneRight: {offsetX: 72, offsetY: 360, width: 70, height: 70},
        stoneWall: {offsetX: 72, offsetY: 288, width: 70, height: 70},
        torchLit: {offsetX: 72, offsetY: 216, width: 70, height: 70},
        torchLit2: {offsetX: 72, offsetY: 144, width: 70, height: 70},
        torch: {offsetX: 72, offsetY: 72, width: 70, height: 70},
        window: {offsetX: 72, offsetY: 0, width: 70, height: 70}
    }
};

export const PLAYER_SPRITE_SHEET: SpriteSheetDescriptor = {
    name: 'PLAYER_SPRITE_SHEET',
    imageUrl: '/assets/p1_spritesheet.png',
    imageDescriptors: {
        L_IDLE_0: {offsetX: 17, offsetY: 1, width: 60, height: 69},
        L_IDLE_1: {offsetX: 77, offsetY: 0, width: 60, height: 69},
        L_IDLE_2: {offsetX: 137, offsetY: 0, width: 60, height: 69},
        L_IDLE_3: {offsetX: 197, offsetY: 0, width: 60, height: 69},
        L_IDLE_4: {offsetX: 257, offsetY: 0, width: 60, height: 69},
        L_WALK_0: {offsetX: 317, offsetY: 0, width: 61, height: 69},
        L_WALK_1: {offsetX: 378, offsetY: 0, width: 61, height: 69},
        L_WALK_2: {offsetX: 439, offsetY: 0, width: 61, height: 69},
        L_WALK_3: {offsetX: 500, offsetY: 0, width: 61, height: 69},
        L_WALK_4: {offsetX: 561, offsetY: 0, width: 61, height: 69},
        L_RUN_0: {offsetX: 622, offsetY: 0, width: 63, height: 69},
        L_RUN_1: {offsetX: 685, offsetY: 0, width: 63, height: 69},
        L_RUN_2: {offsetX: 748, offsetY: 0, width: 63, height: 69},
        L_RUN_3: {offsetX: 811, offsetY: 0, width: 63, height: 69},
        L_RUN_4: {offsetX: 874, offsetY: 0, width: 63, height: 69},
        L_JUMP_0: {offsetX: 937, offsetY: 0, width: 58, height: 69},
        L_JUMP_1: {offsetX: 995, offsetY: 0, width: 58, height: 69},
        L_JUMP_2: {offsetX: 1053, offsetY: 0, width: 58, height: 69},
        L_JUMP_3: {offsetX: 1111, offsetY: 0, width: 58, height: 69},
        L_JUMP_4: {offsetX: 1169, offsetY: 0, width: 58, height: 69},
        L_ATTACK_0: {offsetX: 1227, offsetY: 0, width: 65, height: 69},
        L_ATTACK_1: {offsetX: 1292, offsetY: 0, width: 65, height: 69},
        L_ATTACK_2: {offsetX: 1357, offsetY: 0, width: 65, height: 69},
        L_ATTACK_3: {offsetX: 1422, offsetY: 0, width: 65, height: 69},
        L_ATTACK_4: {offsetX: 4, offsetY: 74, width: 65, height: 69},
        L_HURT_0: {offsetX: 69, offsetY: 75, width: 70, height: 69},
        L_HURT_1: {offsetX: 139, offsetY: 75, width: 70, height: 69},
        L_HURT_2: {offsetX: 209, offsetY: 75, width: 70, height: 69},
        L_HURT_3: {offsetX: 279, offsetY: 75, width: 70, height: 69},
        L_HURT_4: {offsetX: 349, offsetY: 75, width: 70, height: 69},
        L_DIE_0: {offsetX: 419, offsetY: 86, width: 70, height: 69},
        L_DIE_1: {offsetX: 489, offsetY: 86, width: 70, height: 69},
        L_DIE_2: {offsetX: 559, offsetY: 86, width: 70, height: 69},
        L_DIE_3: {offsetX: 629, offsetY: 86, width: 70, height: 69},
        L_DIE_4: {offsetX: 699, offsetY: 86, width: 70, height: 69},
        R_IDLE_0: {offsetX: 769, offsetY: 74, width: 60, height: 69},
        R_IDLE_1: {offsetX: 829, offsetY: 74, width: 60, height: 69},
        R_IDLE_2: {offsetX: 889, offsetY: 74, width: 60, height: 69},
        R_IDLE_3: {offsetX: 949, offsetY: 74, width: 60, height: 69},
        R_IDLE_4: {offsetX: 1009, offsetY: 74, width: 60, height: 69},
        R_WALK_0: {offsetX: 1069, offsetY: 74, width: 61, height: 69},
        R_WALK_1: {offsetX: 1130, offsetY: 74, width: 61, height: 69},
        R_WALK_2: {offsetX: 1191, offsetY: 74, width: 61, height: 69},
        R_WALK_3: {offsetX: 1252, offsetY: 74, width: 61, height: 69},
        R_WALK_4: {offsetX: 1313, offsetY: 74, width: 61, height: 69},
        R_RUN_0: {offsetX: 1374, offsetY: 74, width: 63, height: 69},
        R_RUN_1: {offsetX: 1437, offsetY: 74, width: 63, height: 69},
        R_RUN_2: {offsetX: 0, offsetY: 148, width: 63, height: 69},
        R_RUN_3: {offsetX: 63, offsetY: 148, width: 63, height: 69},
        R_RUN_4: {offsetX: 126, offsetY: 148, width: 63, height: 69},
        R_JUMP_0: {offsetX: 189, offsetY: 148, width: 58, height: 69},
        R_JUMP_1: {offsetX: 247, offsetY: 148, width: 58, height: 69},
        R_JUMP_2: {offsetX: 305, offsetY: 148, width: 58, height: 69},
        R_JUMP_3: {offsetX: 363, offsetY: 148, width: 58, height: 69},
        R_JUMP_4: {offsetX: 421, offsetY: 148, width: 58, height: 69},
        R_ATTACK_0: {offsetX: 479, offsetY: 148, width: 65, height: 69},
        R_ATTACK_1: {offsetX: 544, offsetY: 148, width: 65, height: 69},
        R_ATTACK_2: {offsetX: 609, offsetY: 148, width: 65, height: 69},
        R_ATTACK_3: {offsetX: 674, offsetY: 148, width: 65, height: 69},
        R_ATTACK_4: {offsetX: 739, offsetY: 148, width: 65, height: 69},
        R_HURT_0: {offsetX: 804, offsetY: 149, width: 70, height: 69},
        R_HURT_1: {offsetX: 874, offsetY: 149, width: 70, height: 69},
        R_HURT_2: {offsetX: 944, offsetY: 149, width: 70, height: 69},
        R_HURT_3: {offsetX: 1014, offsetY: 149, width: 70, height: 69},
        R_HURT_4: {offsetX: 1084, offsetY: 149, width: 70, height: 69},
        R_DIE_0: {offsetX: 1154, offsetY: 160, width: 70, height: 69},
        R_DIE_1: {offsetX: 1224, offsetY: 160, width: 70, height: 69},
        R_DIE_2: {offsetX: 1294, offsetY: 160, width: 70, height: 69},
        R_DIE_3: {offsetX: 1364, offsetY: 160, width: 70, height: 69},
        R_DIE_4: {offsetX: 1434, offsetY: 160, width: 70, height: 69}
    }
};

export const ENEMY_SPRITE_SHEET: SpriteSheetDescriptor = {
    name: 'ENEMY_SPRITE_SHEET',
    imageUrl: '/assets/enemy.png',
    imageDescriptors: {
        Golem_Idle_000: {offsetX: 0, offsetY: 0, width: 70, height: 70},
        Golem_Idle_001: {offsetX: 70, offsetY: 0, width: 70, height: 70},
        Golem_Idle_002: {offsetX: 140, offsetY: 0, width: 70, height: 70}
    }

};

export const GOLD_SPRITE_SHEET: SpriteSheetDescriptor = {
    name: 'GOLD_SPRITE_SHEET',
    imageUrl: '/assets/gold_spritesheet.png',
    imageDescriptors: {
        Gold_star_0: {offsetX: 340, offsetY: 0, width: 34, height: 34},
        Gold_star_1: {offsetX: 374, offsetY: 0, width: 34, height: 34},
        Gold_star_2: {offsetX: 408, offsetY: 0, width: 34, height: 34},
        Gold_star_3: {offsetX: 442, offsetY: 0, width: 34, height: 34},
        Gold_star_4: {offsetX: 476, offsetY: 0, width: 34, height: 34},
        Gold_star_5: {offsetX: 510, offsetY: 0, width: 34, height: 34},
        Gold_star_6: {offsetX: 544, offsetY: 0, width: 34, height: 34},
        Gold_star_7: {offsetX: 578, offsetY: 0, width: 34, height: 34},
        Gold_star_8: {offsetX: 612, offsetY: 0, width: 34, height: 34},
        Gold_star_9: {offsetX: 646, offsetY: 0, width: 34, height: 34}
    }
};
