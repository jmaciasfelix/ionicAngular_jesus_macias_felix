//angular
import { NgModule } from '@angular/core';
//router
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sandbox/home',
    pathMatch: 'full'
  },
  {
    path: 'sandbox/:id',
    loadChildren: () => import('./pages/sandbox/sandbox.module').then( module => module.SandboxPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
