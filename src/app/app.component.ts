import { Component } from '@angular/core';
import { HeaderComponent } from './header';
import { CardComponent } from "./card/card.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
