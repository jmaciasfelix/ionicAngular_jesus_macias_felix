//angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

//ionic
import { IonicModule } from '@ionic/angular';

//pages
import { SurveyDetailsPage } from './survey-details.page';

//modules
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: SurveyDetailsPage
      }
    ]),
    SharedModule
  ],
  declarations: [SurveyDetailsPage]
})
export class SurveyDetailsPageModule {}
