//angular
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
//ionic
import { IonicModule } from "@ionic/angular";
//translate
import { TranslateModule } from "@ngx-translate/core";

const EXPORTED_DECLARATIONS = []; // Example: LoadingComponent
const EXPORTED_IMPORTS = [TranslateModule]; // Example: TranslateModule

@NgModule({
  declarations: [...EXPORTED_DECLARATIONS],
  imports: [CommonModule, IonicModule, ...EXPORTED_IMPORTS],
  exports: [...EXPORTED_DECLARATIONS, ...EXPORTED_IMPORTS],
})
export class SharedModule {}
