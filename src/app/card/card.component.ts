import {
  Component,
  EventEmitter,
  input,
  Input,
  Output,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  cardHeader = input<string>('Heading');
  @Input({ required: true }) cardDetail: string = 'Card Detail';

  @Output() select = new EventEmitter<number>();

  cardButtonValue = signal(0);

  cardDetails = () => {
    return `${this.cardDetail} from getter`;
  };

  onClickHandler1 = (): void => {
    this.cardButtonValue.set(this.cardButtonValue() + 1);
  };

  onClickHandler2 = (): void => {
    this.select.emit(this.cardButtonValue());
  };
}
