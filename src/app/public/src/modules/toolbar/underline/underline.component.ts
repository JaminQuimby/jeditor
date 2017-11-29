import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'j-editor-toolbar-underline',
  templateUrl: './underline.component.html',
  styleUrls: ['./underline.component.scss']
})

export class ToolbarUnderlineComponent {
  @Output()
  public echo: EventEmitter<string> = new EventEmitter<string>();
  private readonly BUTTON_EVENT = 'underline';

  constructor() { }

  public onClickEvent() {
    this.echo.emit(this.BUTTON_EVENT);
  }
}
