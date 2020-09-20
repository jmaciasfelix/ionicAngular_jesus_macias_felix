// angular
import { NgModule } from '@angular/core';

// ionic
import { IonicModule } from '@ionic/angular';

// components
import { CarCardComponent } from './car-card.component';

@NgModule({
  declarations: [CarCardComponent],
  imports: [IonicModule],
  exports: [CarCardComponent]
})
export class CarCardModule { }
