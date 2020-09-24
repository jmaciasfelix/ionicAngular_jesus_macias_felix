import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";
import { IonicModule } from "@ionic/angular";

const EXPORTED_DECLARATIONS = [];
const EXPORTED_IMPORTS = [TranslateModule];

@NgModule({
  declarations: [...EXPORTED_DECLARATIONS],
  exports: [...EXPORTED_DECLARATIONS, ...EXPORTED_IMPORTS],
  imports: [CommonModule, IonicModule, ...EXPORTED_IMPORTS],
})
export class SharedModule {}
