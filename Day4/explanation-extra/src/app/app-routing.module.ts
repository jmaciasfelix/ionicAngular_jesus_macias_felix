// angular
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'cars',
    loadChildren: () => import('./pages/cars-list/cars-list.module')
      .then(module => module.CarsListPageModule)
  },
  {
    path: 'cars/:index',
    loadChildren: () => import('./pages/car-details/car-details.module')
      .then(module => module.CarDetailsPageModule)
  },
  {
    path: '',
    redirectTo: 'cars',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
