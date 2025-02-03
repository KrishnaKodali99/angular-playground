import {
  Component,
  EventEmitter,
  input,
  Input,
  Output,
  signal,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { InputComponent } from '../input';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  imports: [MatButtonModule, InputComponent],
  styleUrl: './card.component.scss',
})
export class CardComponent {
  // Input as signals
  cardHeader = input<string>('Heading');

  // Input as property
  @Input({ required: true }) cardDetail: string = 'Card Detail';

  @Output() select = new EventEmitter<{name: string, count: number}>();

  cardButtonValue = signal(0);

  name: string = "";

  selected: boolean = false;

  cardDetails = () => {
    return `${this.cardDetail} from getter`;
  };

  handleNameChange = (name: string) => {
    this.name = name;
  }

  onClickHandler1 = (): void => {
    this.cardButtonValue.set(this.cardButtonValue() + 1);
  };

  onClickHandler2 = (): void => {
    this.selected = true;
    this.select.emit({name: this.name, count: this.cardButtonValue()});
  };
}
