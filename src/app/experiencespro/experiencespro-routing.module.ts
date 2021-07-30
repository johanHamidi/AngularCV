import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ExperiencesproComponent} from "./experiencespro.component";

const routes: Routes = [
  {
    path: '',
    component: ExperiencesproComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExperiencesproRoutingModule {}
