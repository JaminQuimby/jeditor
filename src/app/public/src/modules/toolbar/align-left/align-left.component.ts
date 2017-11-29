import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'j-editor-toolbar-align-left',
  templateUrl: './align-left.component.html',
  styleUrls: ['./align-left.component.scss']
})

export class ToolbarAlignLeftComponent {
  @Output()
  public echo: EventEmitter<string> = new EventEmitter<string>();
  private readonly BUTTON_EVENT = 'justifyleft';

  constructor() { }

  public onClickEvent() {
    this.echo.emit(this.BUTTON_EVENT);
  }
}
