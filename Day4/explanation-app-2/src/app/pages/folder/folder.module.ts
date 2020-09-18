import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { FolderPage } from './folder.page';

@NgModule({
  declarations: [
    FolderPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: FolderPage
      }
    ])
  ]
})
export class FolderPageModule {}
