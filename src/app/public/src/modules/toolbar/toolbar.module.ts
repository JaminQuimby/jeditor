import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolbarComponent } from './toolbar.component';

import { ToolbarAlignCenterModule } from './align-center/align-center.module';
import { ToolbarAlignLeftModule } from './align-left/align-left.module';
import { ToolbarAlignRightModule } from './align-right/align-right.module';
import { ToolbarBoldModule } from './bold/bold.module';
import { ToolbarItalicModule } from './italic/italic.module';
import { ToolbarRedoModule } from './redo/redo.module';
import { ToolbarRemoveFormatModule } from './remove-format/remove-format.module';
import { ToolbarUnderlineModule } from './underline/underline.module';
import { ToolbarUndoModule } from './undo/undo.module';
@NgModule({
  declarations: [
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    ToolbarAlignCenterModule,
    ToolbarAlignLeftModule,
    ToolbarAlignRightModule,
    ToolbarBoldModule,
    ToolbarItalicModule,
    ToolbarRedoModule,
    ToolbarRemoveFormatModule,
    ToolbarUnderlineModule,
    ToolbarUndoModule,
  ],
  exports: [
    ToolbarComponent
  ]
})
export class ToolbarModule { }
