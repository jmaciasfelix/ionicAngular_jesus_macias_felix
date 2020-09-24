import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

const EXPORTED_DECLARATIONS = []; // Example: LoadingComponent
const EXPORTED_IMPORTS = []; // Example: TranslateModule

@NgModule({
  declarations: [...EXPORTED_DECLARATIONS],
  imports: [CommonModule, IonicModule, ...EXPORTED_IMPORTS],
  exports: [...EXPORTED_DECLARATIONS, ...EXPORTED_IMPORTS]
})
export class SharedModule {}
