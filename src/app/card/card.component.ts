import {
  Component,
  EventEmitter,
  input,
  Input,
  Output,
  signal,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

import { InputComponent } from '../input';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  imports: [MatButtonModule, MatCardModule, InputComponent],
  styleUrl: './card.component.scss',
})
export class CardComponent {
  // Input as signals
  cardHeader = input<string>('Card Heading');

  // Input as property
  @Input({ required: true }) cardDetail!: string;

  @Output() select = new EventEmitter<{ name: string; count: number }>();

  constructor() {}

  cardButtonValue = signal(0);

  name: string = '';

  selected: boolean = false;

  get cardDetails(): string {
    return `${this.cardDetail} from getter`;
  };

  handleNameChange = (name: string): void => {
    this.name = name;
  };

  onClickHandler1 = (): void => {
    this.cardButtonValue.set(this.cardButtonValue() + 1);
  };

  onClickHandler2 = (): void => {
    this.selected = true;
    this.select.emit({ name: this.name, count: this.cardButtonValue() });
  };
}
