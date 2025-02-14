import { Injectable } from '@angular/core';

import type { User } from './user-details.model';

@Injectable({ providedIn: 'root' })
export class UserDetailsService {
  userDetails: User[] = [];
  
  addUser(user: User) {
    this.userDetails.push(user);
  }
}
