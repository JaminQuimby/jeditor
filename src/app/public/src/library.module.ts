import { NgModule } from '@angular/core';

import { CanvasModule } from './modules/canvas';
import { ToolbarModule } from './modules/toolbar';
export * from './modules/shared';

@NgModule({
  exports: [
    CanvasModule,
    ToolbarModule
  ]
})
export class LibraryModule { }
