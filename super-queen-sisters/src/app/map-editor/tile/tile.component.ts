import {Component, Input, OnInit} from '@angular/core';
import {TileOptions} from "../../engine/tile/TileOptions";

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {

  @Input('tileOption')
  public tileOption:TileOptions;

  constructor() { }

  ngOnInit() {
  }

}
