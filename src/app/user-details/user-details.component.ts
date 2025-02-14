import { Component, Input } from '@angular/core';

import { UserDetailsService } from './user-details.service';

@Component({
  selector: 'app-user-details',
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss',
})
export class UserDetailsComponent {
  constructor(private userDetailsService: UserDetailsService) {}

  get userDetails() {
    return this.userDetailsService.userDetails;
  }
}
