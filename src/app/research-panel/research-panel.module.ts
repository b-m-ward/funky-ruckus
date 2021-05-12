import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResearchPanelComponent } from './research-panel/research-panel.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ResearchPanelComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ResearchPanelComponent
  ]
})
export class ResearchPanelModule { }
