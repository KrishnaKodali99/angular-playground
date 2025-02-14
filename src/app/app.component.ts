import { Component, inject } from '@angular/core';

import { FormComponent } from './form/form.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserDetailsService } from './user-details/user-details.service';

import type { User } from './user-details/user-details.model';

@Component({
  selector: 'app-root',
  imports: [FormComponent, UserDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private userDetailsService = inject(UserDetailsService);

  onSubmit = (userData: User) => {
    this.userDetailsService.addUser(userData);
  };
}
