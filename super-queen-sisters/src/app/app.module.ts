import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent } from './menu/menu-item/menu-item.component';
import { MenuLogoComponent } from './menu/menu-logo/menu-logo.component';
import { MapEditorComponent } from './map-editor/map-editor.component';
import { SpriteEditorComponent } from './sprite-editor/sprite-editor.component';
import { GameComponent } from './game/game.component';
import { TileComponent } from './map-editor/tile/tile.component';
import { TileListComponent } from './map-editor/tile-list/tile-list.component';
import { MapComponent } from './map-editor/map/map.component';
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuItemComponent,
    MenuLogoComponent,
    MapEditorComponent,
    SpriteEditorComponent,
    GameComponent,
    TileComponent,
    TileListComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
