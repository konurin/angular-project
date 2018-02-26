import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
  public token: string;

  constructor(private http: HttpClient) {
    // set token if saved in local storage
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  login(username: string, password: string): Observable<boolean> {
    return this.http.post(
      'yoursite/wp-json/jwt-auth/v1/token',
      {username: username, password: password}
      ).map((response: Response) => {
        let token: string;
        if (response['token']) {
          // set token property
          this.token = response['token'];

          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify({username: username, token: this.token}));

          // return true to indicate successful login
          return true;
        } else {
          return false;
        }
      });
  }

  logout(): void {
    // clear token remove user from local storage to log user out
    this.token = null;
    localStorage.removeItem('currentUser');
  }
}
