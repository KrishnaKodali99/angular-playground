import {
  Component,
  EventEmitter,
  input,
  Input,
  Output,
  signal,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  imports: [MatButtonModule],
  styleUrl: './card.component.scss',
})
export class CardComponent {
  // Input as signals
  cardHeader = input<string>('Heading');

  // Input as property
  @Input({ required: true }) cardDetail: string = 'Card Detail';

  @Output() select = new EventEmitter<number>();

  cardButtonValue = signal(0);

  selected?: boolean = false;

  cardDetails = () => {
    return `${this.cardDetail} from getter`;
  };

  onClickHandler1 = (): void => {
    this.cardButtonValue.set(this.cardButtonValue() + 1);
  };

  onClickHandler2 = (): void => {
    this.selected = true;
    this.select.emit(this.cardButtonValue());
  };
}
