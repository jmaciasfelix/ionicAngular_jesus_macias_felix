import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'fruits-list',
    pathMatch: 'full'
  },
  {
    path: 'fruits-list',
    loadChildren: () =>
      import('./pages/fruits-list/fruits-list.module')
        .then(m => m.FruitsListPageModule)
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
