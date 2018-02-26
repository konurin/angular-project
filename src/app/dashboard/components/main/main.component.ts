import {Component, OnInit} from '@angular/core';
import {AuthGuard} from "../../services/guard.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    private AuthGuard: AuthGuard,
    private router: Router
  ) {
  }

  ngOnInit() {
    if (!this.AuthGuard.canActivate()) {
      this.router.navigate(['/login']);
    }
  }

}
