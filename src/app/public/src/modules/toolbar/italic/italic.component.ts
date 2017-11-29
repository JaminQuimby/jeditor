import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'j-editor-toolbar-italic',
  templateUrl: './italic.component.html',
  styleUrls: ['./italic.component.scss']
})

export class ToolbarItalicComponent {
  @Output()
  public echo: EventEmitter<string> = new EventEmitter<string>();
  private readonly BUTTON_EVENT = 'italic';

  constructor() { }

  public onClickEvent() {
    this.echo.emit(this.BUTTON_EVENT);
  }
}
