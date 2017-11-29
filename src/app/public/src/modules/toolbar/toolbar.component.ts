import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'j-editor-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})

export class ToolbarComponent {

  @Output()
  public tool: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  public useTool(tool: string) {
    this.tool.emit(tool);
  }

}
