import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
 
})
export class InputComponent {
  @Input() fieldName: string = '';
  @Input() isdisabled: boolean = false;
  @Input() type: string ="";
 
  @Output() ejectData = new EventEmitter<string>();
  fieldData: string = '';

  ejectInput() {
    console.log('Emitting data:', this.fieldData);
    this.ejectData.emit(this.fieldData);
  }
  onInputChange(value: string, type: string) {
    // No need to emit here, just update fieldData
    this.fieldData = value;
    this.type = type
  }

  onBlur() {
    console.log('Emitting data:', this.fieldData);
    this.ejectData.emit(this.fieldData);
  }
 
}
