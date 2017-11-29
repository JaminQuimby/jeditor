import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CanvasComponent } from './canvas.component';
import { ToolbarModule } from '../toolbar';
@NgModule({
  declarations: [
    CanvasComponent
  ],
  imports: [
    CommonModule,
    ToolbarModule
  ],
  exports: [
    CanvasComponent
  ]
})
export class CanvasModule { }
