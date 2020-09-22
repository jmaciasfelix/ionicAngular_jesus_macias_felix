import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingFeedbackComponent } from './components/loading-feedback/loading-feedback.component';
import { IonicModule } from '@ionic/angular';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [LoadingFeedbackComponent, SpinnerComponent],
  exports: [LoadingFeedbackComponent, SpinnerComponent],
  imports: [CommonModule, IonicModule]
})
export class SharedModule {}
