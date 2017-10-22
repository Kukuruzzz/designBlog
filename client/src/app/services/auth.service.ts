import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class AuthService {
  private serverAuthUrl = 'http://localhost:3000/login';

  isLoggedIn = false;
  redirectUrl: string;

  constructor(private http: Http) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  login(username: string, password: string): Observable<boolean> {
    const body = JSON.stringify({ username: username, password: password });
    const headers = new Headers({ 'Content-type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(this.serverAuthUrl, body, options)
      .map((res: Response) => {
        if (res) {
          this.isLoggedIn = true;
          localStorage.setItem('adminUserAccess', 'access is allowed');
          return true;
        } else {
          return false;
        }
      });
  }
  logout(): void {
    this.isLoggedIn = false;
    localStorage.removeItem('adminUserAccess');
  }
}
