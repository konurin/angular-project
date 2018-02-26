import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map'
import {AuthenticationService} from '../services/auth.service';
import {User} from '../shared/models/user';

@Injectable()
export class UserService {
  constructor(private http: HttpClient,
              private authenticationService: AuthenticationService) {
  }

  getUsers(): Observable<User[]> {

    const requestOptions = {
      headers: new HttpHeaders({'Authorization': 'Bearer ' + this.authenticationService.token})
    };

    // get users from api
    return this.http.get('/api/users', requestOptions)
      .map((response: Response) => response.json())
      .do(console.log);

  }
}
