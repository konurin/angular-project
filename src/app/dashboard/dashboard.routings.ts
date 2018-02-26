import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {MainComponent} from "./components/main/main.component";

const routes: Routes = [
  {path: 'dashboard', component: MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class DashboardRoutingModule {

}
