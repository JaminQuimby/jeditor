import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolbarItalicComponent } from './italic.component';

@NgModule({
  declarations: [
    ToolbarItalicComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ToolbarItalicComponent
  ]
})
export class ToolbarItalicModule { }
