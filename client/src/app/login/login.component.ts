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
  errorMessage = '';
  user: Object = {};
  constructor(public authService: AuthService, public router: Router) { }

  login(user: User) {
    this.authService.login(user.username, user.password)
      .subscribe(res => {
        if (res === true) {
          this.user = null;
          this.router.navigate(['/']);
        } else {
          this.errorMessage = 'Username or password incorrect';
        }
      });
  }
  logout() {
    this.authService.logout();
  }
}
