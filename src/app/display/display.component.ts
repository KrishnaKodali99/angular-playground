import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display',
  imports: [],
  templateUrl: './display.component.html',
  styleUrl: './display.component.scss',
})
export class DisplayComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) count!: number;

  users: any[] = [
    {
      id: 1,
      name: 'User-1',
    },
    {
      id: 2,
      name: 'User-2',
    },
    {
      id: 3,
      name: 'User-3',
    },
  ];
}
