//angular
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
//ionic
import { IonicModule } from "@ionic/angular";
//router
import { FruitDetailsPageRoutingModule } from "./fruit-details-routing.module";
//pages
import { FruitDetailsPage } from "./fruit-details.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FruitDetailsPageRoutingModule,
  ],
  declarations: [FruitDetailsPage],
})
export class FruitDetailsPageModule {}
