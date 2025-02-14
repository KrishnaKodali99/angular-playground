import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { type User } from '../user-details/user-details.model';

@Component({
  selector: 'app-form',
  imports: [FormsModule, MatButtonModule, MatCardModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  name!: string;
  email!: string;

  @Output() formSubmit = new EventEmitter<User>();

  onSubmit() {
    this.formSubmit.emit({ name: this.name, email: this.email });
  }
}
