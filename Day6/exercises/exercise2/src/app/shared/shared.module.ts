import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from './pipes/truncate.pipe';

const EXPORTED_DECLARATIONS = [TruncatePipe];

@NgModule({
  declarations: [...EXPORTED_DECLARATIONS],
  exports: [...EXPORTED_DECLARATIONS],
  imports: [CommonModule]
})
export class SharedModule {}
