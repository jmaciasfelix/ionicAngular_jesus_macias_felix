//angular
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
//ionic
import { IonicModule } from "@ionic/angular";
//component
import { LoadingFeedbackComponent } from "./components/loading-feedback/loading-feedback.component";
import { SpinnerComponent } from "./components/spinner/spinner.component";

@NgModule({
  declarations: [LoadingFeedbackComponent, SpinnerComponent],
  exports: [LoadingFeedbackComponent, SpinnerComponent],
  imports: [CommonModule, IonicModule],
})
export class SharedModule {}
