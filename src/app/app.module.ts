import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PageComponent} from './components/page/page.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {HomeComponent} from './components/home/home.component';
import {AppRoutingModule} from "./app.routing";
import {AuthModule} from "./auth/auth.module";
import {DashboardModule} from "./dashboard/dashboard.module";


@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
