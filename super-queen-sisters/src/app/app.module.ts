import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MenuComponent} from './components/menu/menu.component';
import {MenuItemComponent} from './components/menu/menu-item/menu-item.component';
import {MenuLogoComponent} from './components/menu/menu-logo/menu-logo.component';
import {MapEditorComponent} from './map-editor/map-editor.component';
import {SpriteEditorComponent} from './sprite-editor/sprite-editor.component';
import {GameComponent} from './game/game.component';
import {TileComponent} from './map-editor/tile/tile.component';
import {TileListComponent} from './map-editor/tile-list/tile-list.component';
import {MapComponent} from './map-editor/map/map.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ToolBarComponent} from './components/tool-bar/tool-bar.component';
import {ToolBarButtonComponent} from './components/tool-bar/tool-bar-button/tool-bar-button.component';
import {ToolBarInputComponent} from './components/tool-bar/tool-bar-input/tool-bar-input.component';
import {ToolBarSeparatorComponent} from './components/tool-bar/tool-bar-separator/tool-bar-separator.component';

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
        MapComponent,
        ToolBarComponent,
        ToolBarButtonComponent,
        ToolBarInputComponent,
        ToolBarSeparatorComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CommonModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
