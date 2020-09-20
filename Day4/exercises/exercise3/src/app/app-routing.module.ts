//angular
import { NgModule } from '@angular/core';
//router
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./pages/fruit-list/fruitlist.module').then( module => module.FruitListPageModule)
  },
  {
    path: 'fruit/:name',
    loadChildren: () => import('./pages/fruit-details/fruit-details.module').then( m => m.FruitDetailsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
