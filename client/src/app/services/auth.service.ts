import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';


@Injectable()
export class AuthService {
  isLoggedIn = false;
  redirectUrl: string;
  constructor() { }

  login() {
    return this.isLoggedIn = true;
  }
  logout(): void {
    this.isLoggedIn = false;
  }

}
