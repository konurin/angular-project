import {Component, OnInit} from '@angular/core';
import {AuthGuard} from "../../../dashboard/services/guard.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private AuthGuard: AuthGuard, private router: Router) {
  }

  ngOnInit() {
    if (this.AuthGuard.canActivate()) {
      this.router.navigate(['/dashboard']);
    }
  }

}
