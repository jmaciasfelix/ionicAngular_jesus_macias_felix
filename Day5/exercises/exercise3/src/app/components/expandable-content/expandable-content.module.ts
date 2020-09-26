// angular
import { NgModule } from "@angular/core";
// ionic
import { IonicModule } from "@ionic/angular";
// components
import { ExpandableContentComponent } from "./expandable-content.component";

@NgModule({
  declarations: [ExpandableContentComponent],
  imports: [IonicModule],
  exports: [ExpandableContentComponent],
})
export class ExpandableContentModule {}
