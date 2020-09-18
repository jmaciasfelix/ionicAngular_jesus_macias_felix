// angular
import { NgModule } from '@angular/core';

// ionic
import { IonicModule } from '@ionic/angular';

// routing
import { CarDetailsRoutingModule } from './car-details-routing.module';

// component
import { CarDetailsPage } from './car-details.page';

@NgModule({
  declarations: [CarDetailsPage],
  imports: [
    CarDetailsRoutingModule,
    IonicModule
  ]
})
export class CarDetailsPageModule { }
