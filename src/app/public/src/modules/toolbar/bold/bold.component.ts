import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'j-editor-toolbar-bold',
  templateUrl: './bold.component.html',
  styleUrls: ['./bold.component.scss']
})

export class ToolbarBoldComponent {
  @Output()
  public echo: EventEmitter<string> = new EventEmitter<string>();
  private readonly BUTTON_EVENT = 'bold';
  constructor() { }

  public onClickEvent() {
    this.echo.emit(this.BUTTON_EVENT);
  }
}
