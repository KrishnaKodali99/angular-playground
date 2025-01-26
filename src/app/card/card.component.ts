import { Component, input, Input, signal } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  cardHeader = input<string>("Heading")
  @Input({required: true}) cardDetail: string = "Card Detail";

  cardButtonValue = signal(0);

  cardDetails = () => {
    return `${this.cardDetail} from getter`;
  };

  onClickHandler = (): void => {
    this.cardButtonValue.set(this.cardButtonValue() + 1)
  }
}
