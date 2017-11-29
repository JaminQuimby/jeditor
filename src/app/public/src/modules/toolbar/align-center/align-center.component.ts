import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'j-editor-toolbar-align-center',
  templateUrl: './align-center.component.html',
  styleUrls: ['./align-center.component.scss']
})

export class ToolbarAlignCenterComponent {
  @Output()
  public echo: EventEmitter<string> = new EventEmitter<string>();
  private readonly BUTTON_EVENT = 'justifycenter';

  constructor() { }

  public onClickEvent() {
    this.echo.emit(this.BUTTON_EVENT);
  }
}
