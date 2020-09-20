// angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// pages
import { CarsListPage } from './cars-list.page';

const routes: Routes = [{
  path: '',
  component: CarsListPage
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsListRoutingModule { }
