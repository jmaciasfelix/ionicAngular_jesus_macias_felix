// angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

// modules
import { CarCardModule } from '../../components';

// routing
import { CarsListRoutingModule } from './cars-list-routing.module';

// pages
import { CarsListPage } from './cars-list.page';

@NgModule({
  declarations: [CarsListPage],
  imports: [
    CarCardModule,
    CommonModule,
    IonicModule,
    CarsListRoutingModule
  ]
})
export class CarsListPageModule { }
