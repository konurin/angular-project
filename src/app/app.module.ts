import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './static/header/header.component';
import {FooterComponent} from './static/footer/footer.component';
import {HomeComponent} from './static/home/home.component';
import {AppRoutingModule} from "./app.routing";
import {AuthModule} from "./auth/auth.module";
import {DashboardModule} from "./dashboard/dashboard.module";
import {PostsComponent} from './posts/posts.component';
import {PostComponent} from './posts/post/post.component';
import {PostsService} from "./posts/services/posts.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PostsComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    DashboardModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
