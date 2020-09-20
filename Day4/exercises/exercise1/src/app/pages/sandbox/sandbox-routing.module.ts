//angular
import { NgModule } from "@angular/core";
//router
import { Routes, RouterModule } from "@angular/router";
//pages
import { SandboxPage } from "./sandbox.page";

const routes: Routes = [
  {
    path: "",
    component: SandboxPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SandboxPageRoutingModule {}
