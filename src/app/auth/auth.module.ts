import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {AuthRoutingModule} from "./auth.routing";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from '@angular/common/http';
import {AuthenticationService} from './services/auth.service';
import {UserService} from './services/user.service';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  providers: [
    AuthenticationService,
    UserService
  ]
})
export class AuthModule {
}
