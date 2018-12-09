import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ScoreboardComponent } from '../../projects/scoreboard/src/lib/scoreboard.component';
import { TeamTileComponent } from '../../projects/team-tile/src/lib/team-tile.component';

@NgModule({
  declarations: [
    AppComponent,
    ScoreboardComponent,
    TeamTileComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
