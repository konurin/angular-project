import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from "../../shared/models/user";
import {AuthenticationService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {AuthGuard} from "../../../dashboard/services/guard.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  loggedIn = false;
  loggedStatus: string;

  form = new FormGroup({
    email: new FormControl('', Validators.compose([
      Validators.minLength(3),
      Validators.maxLength(32),
      Validators.required,
      Validators.email
    ])),
    password: new FormControl('', Validators.compose([
      Validators.minLength(3),
      Validators.maxLength(32),
      Validators.required
    ]))
  });

  checkUsernameError(field: any): void {
    field.textError = "";
    if (field.hasError("required")) {
      field.textError = "This field required";
    } else if (field.hasError("minlength")) {
      field.textError = "This field must be more than " + field.errors.minlength.requiredLength + " characters";
    } else if (field.hasError("maxlength")) {
      field.textError = "This field must be less than " + field.errors.maxlength.requiredLength + " characters";
    } else if (field.hasError("email")) {
      field.textError = "This field must be email";
    }
  }

  setFormSubmitDisabledStatus(form: any): boolean {
    if (form.status === "VALID") {
      return false;
    } else {
      return true;
    }
  }

  checkUserAndLogin(email, password): void {
    if (this.form.status === "VALID") {
      this.loggedIn = true;

      this.authenticationService.login(email, password)
        .subscribe(
          result => {
            console.log(result);
            if (result === true) {
              this.router.navigate(['/dashboard']);
            }
          }, err => {
            let errCode = err.error.code;
            if (errCode.indexOf('incorrect_email')) {
              this.loggedStatus = "Incorrect Email";
            }
          }
        );
    }
  }

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private AuthGuard: AuthGuard
  ){
  }

  ngOnInit() {
    if (!this.AuthGuard.canActivate()) {
      this.router.navigate(['/login']);
    } else {
      this.router.navigate(['/dashboard']);
    }
  }


}
