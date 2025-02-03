import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

type InputType = 'text' | 'email' | 'number' | 'password';

@Component({
  selector: 'app-input',
  imports: [FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) type!: InputType;
  @Input() name?: string;
  @Input() placeholder?: string;
  
  @Output() enteredValueChange = new EventEmitter<string>();

  enteredValue: string = '';

  onValueChange(): void {
    this.enteredValueChange.emit(this.enteredValue);
  };
}
