import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { User } from '../models/user';


@Injectable()
export class AuthService {
  private serverAuthUrl = 'http://localhost:3000/login';
  public token: string;
  redirectUrl: string;

  constructor(private http: Http) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  login(user: User): Observable<boolean> {
    const body = JSON.stringify({ username: user.username, password: user.password });
    const headers = new Headers({ 'Content-type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(this.serverAuthUrl, body, options)
      .map((res: Response) => {
        const token = res.json() && res.json().token;
        if (token) {
          this.token = token;
          localStorage.setItem('currentUser', JSON.stringify({ username: user.username, token: token }));
          return true;
        } else {
          return false;
        }
      });
  }
  logout(): void {
    this.token = null;
    localStorage.removeItem('currentUser');
  }
}
