import {Component, Input, OnInit} from '@angular/core';
import {BASIC_MAP_TILE_SPRITE_SHEET} from '../../game/spriteSheets';

@Component({
    selector: 'app-tile',
    templateUrl: './tile.component.html',
    styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {

    @Input()
    public tileOption: string;

    public spriteSheetDescriptor = BASIC_MAP_TILE_SPRITE_SHEET;

    constructor() {
    }

    ngOnInit() {
    }

}
