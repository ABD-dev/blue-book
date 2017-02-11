import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Http, RequestOptions } from '@angular/http';
import { AuthHttp, AuthConfig, AUTH_PROVIDERS, provideAuth } from 'angular2-jwt';
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

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
      headerName: 'Authorization',
      tokenName: 'token',
      tokenGetter: (() => localStorage.getItem('token')),
      globalHeaders: [{ 'Content-Type': 'application/json' }],
      noJwtError: true
    }), http, options);
}
