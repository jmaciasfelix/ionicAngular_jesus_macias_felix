import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { EmailsListPage } from './emails-list.page';

@NgModule({
  declarations: [
    EmailsListPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: EmailsListPage
      }
    ])
  ]
})
export class EmailsListPageModule {}
