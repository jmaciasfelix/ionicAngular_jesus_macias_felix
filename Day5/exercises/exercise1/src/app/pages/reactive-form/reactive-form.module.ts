import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { ReactiveFormPage } from './reactive-form.page';
import { HomePageModule } from '../home/home.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ReactiveFormPage
      }
    ]),
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [ReactiveFormPage]
})
export class ReactiveFormPageModule {}
