//angular
import { NgModule } from "@angular/core";
//router
import { Routes, RouterModule } from "@angular/router";
//pages
import { FruitListPage } from "./fruitlist.page";

const routes: Routes = [
  {
    path: "",
    component: FruitListPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FruitListPageRoutingModule {}
