// angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// pages
import { CarDetailsPage } from './car-details.page';

const routes: Routes = [{
  path: '',
  component: CarDetailsPage
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarDetailsRoutingModule { }
