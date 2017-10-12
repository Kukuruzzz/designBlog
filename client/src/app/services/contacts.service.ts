import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Contact} from '../models/contact';

@Injectable()
export class ContactsService {
  private serverUrl = 'http://localhost:3000/contacts';
  constructor(private http: Http) {
  }

  getContacts(): Observable<Contact[]> {
    return this.http.get(this.serverUrl)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  getContact(id: any) {
    return this.http.get(this.serverUrl + id)
      .map(res => res.json());
  }
  addContact(body: Object): Observable<Contact[]> {
    // const bodyString = JSON.stringify(body);
    const headers = new Headers({ 'Content-type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(this.serverUrl, body, options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
  }
  updateContact(body: Object): Observable<Contact[]> {
    // const bodyString = JSON.stringify(body);
    const headers = new Headers({ 'Content-type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.put(`${this.serverUrl}/${body['id']}`, body, options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
  }
  removeContact(id: string): Observable<Contact[]> {
    return this.http.delete(`${this.serverUrl}/${id}`)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
  }
}

