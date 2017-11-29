import { Component } from '@angular/core';

@Component({
  selector: 'j-editor-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent {
  constructor() { }

  public formatDoc(command: string, value: string) {
    let canvas = document.getElementById('j-editor-canvas');
    document.execCommand(command, false, value); canvas.focus();
  }

}
