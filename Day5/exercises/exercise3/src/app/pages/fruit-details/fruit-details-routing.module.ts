//angular
import { NgModule } from "@angular/core";
//router
import { Routes, RouterModule } from "@angular/router";
//pages
import { FruitDetailsPage } from "./fruit-details.page";

const routes: Routes = [
  {
    path: "",
    component: FruitDetailsPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FruitDetailsPageRoutingModule {}
