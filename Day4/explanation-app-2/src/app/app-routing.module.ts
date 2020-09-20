import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'emails/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () =>
      import('./pages/folder/folder.module')
        .then( m => m.FolderPageModule)
  },
  {
    path: 'emails/:folder-id',
    loadChildren: () =>
      import('./pages/emails-list/emails-list.module')
        .then( m => m.EmailsListPageModule)
  },
  {
    path: 'emails/:folder-id/:email-id',
    loadChildren: () =>
      import('./pages/email-details/email-details.module')
        .then( m => m.EmailDetailsPageModule)
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
