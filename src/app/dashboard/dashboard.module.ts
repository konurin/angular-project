import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './components/main/main.component';
import {AuthGuard} from "./services/guard.service";
import {DashboardRoutingModule} from "./dashboard.routings";

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [
    MainComponent
  ],
  providers: [
    AuthGuard
  ]
})
export class DashboardModule {
}

