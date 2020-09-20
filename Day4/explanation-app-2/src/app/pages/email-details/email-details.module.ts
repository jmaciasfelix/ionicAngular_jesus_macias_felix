import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmailDetailsPage } from './email-details.page';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    EmailDetailsPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: EmailDetailsPage
      }
    ])
  ]
})
export class EmailDetailsPageModule {}
