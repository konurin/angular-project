import {Component, OnInit, DoCheck} from '@angular/core';
import {AuthGuard} from "../../dashboard/services/guard.service";
import {AuthenticationService} from "../../auth/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, DoCheck {
  public loginStatus : number;
  constructor(
    private AuthGuard: AuthGuard,
    private AuthenticationService: AuthenticationService,
    private router: Router,
  ) {

  }

  userLogged: boolean;

  ngOnInit() {
    this.userLogged = (this.AuthGuard.canActivate() ? true : false);
  }

  ngDoCheck() {

  }

  logout() {
    this.AuthenticationService.logout();
    this.router.navigate(['']);
  }

}
