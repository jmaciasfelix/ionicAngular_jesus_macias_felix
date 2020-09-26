import { CommonModule } from "@angular/common";
// angular
import { NgModule } from "@angular/core";
// ionic
import { IonicModule } from "@ionic/angular";
// components
import { LoadingFeedbackComponent } from "./loading-feedback.component";

@NgModule({
  declarations: [LoadingFeedbackComponent],
  imports: [CommonModule, IonicModule],
  exports: [LoadingFeedbackComponent],
})
export class LoadingFeedbackModule {}
