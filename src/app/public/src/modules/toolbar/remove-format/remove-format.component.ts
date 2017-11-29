import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'j-editor-toolbar-remove-format',
  templateUrl: './remove-format.component.html',
  styleUrls: ['./remove-format.component.scss']
})

export class ToolbarRemoveFormatComponent {
  @Output()
  public echo: EventEmitter<string> = new EventEmitter<string>();
  private readonly BUTTON_EVENT = 'removeFormat';

  constructor() { }

  public onClickEvent() {
    this.echo.emit(this.BUTTON_EVENT);
  }
}
