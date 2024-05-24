import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() txt: string = '';
  @Output() action = new EventEmitter();

  onClick() {
    this.action.emit();
  }
}
