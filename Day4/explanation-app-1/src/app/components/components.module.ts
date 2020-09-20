import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { FruitCardComponent } from './fruit-card/fruit-card.component';

@NgModule({
  declarations: [
    FruitCardComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    FruitCardComponent
  ]
})
export class ComponentsModule { }
