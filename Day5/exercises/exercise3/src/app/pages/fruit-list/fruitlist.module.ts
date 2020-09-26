//angular
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
//ionic
import { IonicModule } from "@ionic/angular";
//pages
import { FruitListPage } from "./fruitlist.page";
//components
import { ExpandableContentModule } from "src/app/components";
//routing
import { FruitListPageRoutingModule } from "./fruitlist-routing.module";
import { HttpClientModule } from "@angular/common/http";
//module
import { LoadingFeedbackModule } from "src/app/components/loading-feedback/loading-feedback.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FruitListPageRoutingModule,
    ExpandableContentModule,
    HttpClientModule,
    LoadingFeedbackModule,
  ],
  declarations: [FruitListPage],
  exports: [FruitListPage],
})
export class FruitListPageModule {}
