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
  constructor(public authService: AuthService, private router: Router) { }

  login(user: User) {
    this.authService.login(user)
      .subscribe(res => {
        if (res === true) {
          this.router.navigate([this.authService.redirectUrl]);
        }
      });
  }
}
