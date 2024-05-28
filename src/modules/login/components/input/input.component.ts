import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  @Input() fieldName: string = '';
  @Input() isdisabled: boolean = false;
  @Output() ejectData = new EventEmitter();
  fieldData: string = '';

  ejectInput() {
    console.log(this.fieldData);
    this.ejectData.emit(this.fieldData);
  }
}
