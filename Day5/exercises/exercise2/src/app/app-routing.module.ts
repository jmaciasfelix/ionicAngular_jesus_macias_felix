//angular
import { NgModule } from "@angular/core";
//router
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
      import("./pages/home/home.module").then((module) => module.HomePageModule),
  },
  {
    path: "template-driven-form",
    loadChildren: () =>
      import("./pages/template-driven-form/template-driven-form.module").then(
        (module) => module.TemplateDrivenFormPageModule
      ),
  },
  {
    path: "reactive-form",
    loadChildren: () =>
      import("./pages/reactive-form/reactive-form.module").then(
        (module) => module.ReactiveFormPageModule
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
