import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Http } from '@angular/http';
import { AppSettings } from '../app.config';
import 'rxjs/Rx';

export interface Credentials {
  email: string,
  password: string
};

@Injectable()
export class AuthService {

  constructor(private http: Http, private appSettings: AppSettings) { }

  login(credentials: Credentials) {
    return this.http
      .post(`${this.appSettings.API_URL}/authenticate`, credentials)
      .map(response => response.json());
  }

  loggedIn() {
    return tokenNotExpired('token');
  }

  logout() {
    localStorage.removeItem('token');
  }

}
