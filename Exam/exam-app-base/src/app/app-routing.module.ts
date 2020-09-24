import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/utils/auth.guard';
import { NoAuthGuard } from './shared/utils/no-auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'surveys-list',
    pathMatch: 'full'
  },
  {
    path: 'login',
    canActivate: [NoAuthGuard], // Only NO auth users can enter here!
    loadChildren: () => import('./pages/login/login.module').then((m) => m.LoginPageModule)
  },
  {
    path: 'surveys-list',
    canActivate: [AuthGuard], // Only auth users can enter here!
    loadChildren: () => import('./pages/surveys-list/surveys-list.module').then((m) => m.SurveysListPageModule)
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
export class AppRoutingModule {}
