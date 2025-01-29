import { Component } from '@angular/core';
import { HeaderComponent } from './header';
import { DisplayComponent } from './display';
import { CardComponent } from './card';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, CardComponent, DisplayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  count: number = 0;

  onSelect = (count: number) => {
    this.count = count;
  };

  get displayCount() {
    return this.count;
  }
}
