import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ResearchPanelModule } from './research-panel/research-panel.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ResearchPanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
