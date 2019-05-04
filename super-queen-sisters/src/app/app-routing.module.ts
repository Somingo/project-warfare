import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {GameComponent} from "./game/game.component";
import {MapEditorComponent} from "./map-editor/map-editor.component";
import {SpriteEditorComponent} from "./sprite-editor/sprite-editor.component";

const routes: Routes = [
  {path: 'game', component: GameComponent},
  {path: 'mapEditor', component: MapEditorComponent},
  {path: 'spriteEditor', component: SpriteEditorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
