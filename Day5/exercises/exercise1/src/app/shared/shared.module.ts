import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingFeedbackComponent } from './components/loading-feedback/loading-feedback.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [LoadingFeedbackComponent],
  exports: [LoadingFeedbackComponent],
  imports: [CommonModule, IonicModule]
})
export class SharedModule {}
