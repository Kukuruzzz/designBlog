import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: Object = {};
  constructor(public authService: AuthService, public router: Router) { }

  login(user: User) {
    this.authService.login(user.username, user.password)
      .subscribe(() => {
        if (this.authService.isLoggedIn) {
          const redirect = this.authService.redirectUrl ?
            this.authService.redirectUrl : '/admin/contacts';
          this.router.navigate([redirect]);
        }
      });
  }
  logout() {
    this.authService.logout();
  }
}
