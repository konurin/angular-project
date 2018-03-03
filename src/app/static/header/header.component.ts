import {Component, OnInit} from '@angular/core';
import {AuthGuard} from "../../dashboard/services/guard.service";
import {AuthenticationService} from "../../auth/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userLogged: boolean = false;
  subscription: any;
  constructor(private AuthGuard: AuthGuard,
              private AuthenticationService: AuthenticationService,
              private router: Router
  ) {

  }

  ngOnInit() {
    this.userLogged = this.AuthGuard.canActivate();
    this.subscription = this.AuthGuard.canActivateReturnNumber()
      .subscribe(item => this.setLoggedIn(item));
  }

  logout() {
    this.AuthenticationService.logout();
    this.router.navigate(['/']);
    this.userLogged = this.AuthGuard.canActivate();
  }

  setLoggedIn(item) {
    this.userLogged = item;
  }

}
