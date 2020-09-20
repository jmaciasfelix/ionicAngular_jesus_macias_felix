// angular
import { NgModule } from '@angular/core';
// ionic
import { IonicModule } from '@ionic/angular';
// components
import { RatingComponent } from './rating.component';

@NgModule({
  declarations: [RatingComponent],
  imports: [IonicModule],
  exports: [RatingComponent]
})
export class RatingModule { }