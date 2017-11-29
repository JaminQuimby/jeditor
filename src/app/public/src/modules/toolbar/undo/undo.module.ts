import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolbarUndoComponent } from './undo.component';

@NgModule({
  declarations: [
    ToolbarUndoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ToolbarUndoComponent
  ]
})
export class ToolbarUndoModule { }
