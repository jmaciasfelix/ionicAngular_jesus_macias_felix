// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

//ionic
import { IonicModule } from '@ionic/angular';

//page
import { FruitsListPage } from './fruits-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: FruitsListPage
      }
    ])
  ],
  declarations: [FruitsListPage]
})
export class FruitsListPageModule {}
