//angular
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
//ionic
import { IonicModule } from "@ionic/angular";
///page
import { TemplateDrivenFormPage } from "./template-driven-form.page";
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: "",
        component: TemplateDrivenFormPage,
      },
    ]),
    TranslateModule
  ],
  declarations: [TemplateDrivenFormPage],
})
export class TemplateDrivenFormPageModule {}
