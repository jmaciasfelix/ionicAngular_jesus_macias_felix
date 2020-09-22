import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module')
        .then(m => m.HomePageModule)
  },
  {
    path: 'template-driven-form',
    loadChildren: () =>
      import('./pages/template-driven-form/template-driven-form.module')
        .then(m => m.TemplateDrivenFormPageModule)
  },
  {
    path: 'reactive-form',
    loadChildren: () =>
      import('./pages/reactive-form/reactive-form.module')
        .then(m => m.ReactiveFormPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
