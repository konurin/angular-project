import {Component, DoCheck } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import {User} from "../../shared/models/user";

export const USERS: User[] = [
  {email: "vk@unicsoft.net", password: "1qwerty"},
  {email: "anton", password: "2qwerty"},
  {email: "ivan", password: "3qwerty"},
];

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements DoCheck {
  users = USERS;
  fieldError: string;
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

  checkUsernameError(field: any) :void {
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

  setFormSubmitDisabledStatus(form:any):boolean {
    if (form.status === "VALID") {
      return false;
    } else {
      return true;
    }
  }

  checkUserAndLogin(email, password):void {
    if (this.form.status === "VALID") {
      this.loggedIn = true;
      console.log("email: " + email);
      console.log("password: " + password);

      if (this.users.find(user => user.email === email) && this.users.find(user => user.password === password)) {
        this.loggedStatus = "success";
      } else {
        this.loggedStatus = "failure";
      }
    }
  }

  constructor() { }

  ngDoCheck() {

  }

}
