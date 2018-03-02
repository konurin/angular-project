import {EventEmitter, Injectable} from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  authChange: EventEmitter<number> = new EventEmitter();
  constructor() { }

  canActivate() {
    this.authChange.emit(localStorage.getItem('currentUser') ? 1 : 0);
    return (localStorage.getItem('currentUser') ? true : false);
  }

  canActivateReturnNumber() {
    return this.authChange;
  }
}
