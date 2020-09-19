import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "home",
    loadChildren: () =>
      import("./pages/fruits-list/fruits-list.module").then(
        (m) => m.FruitsListPageModule
      ),
  },
  {
    path: "sandbox",
    loadChildren: () =>
      import("./pages/sandbox/sandbox.module").then(
        (module) => module.SandboxPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
