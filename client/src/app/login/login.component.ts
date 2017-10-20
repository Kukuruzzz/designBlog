import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public authService: AuthService, public router: Router) { }

  login() {
    this.authService.login(); // gonna be subscribe() method
  }
  logout() {
    this.authService.logout();
  }
}
