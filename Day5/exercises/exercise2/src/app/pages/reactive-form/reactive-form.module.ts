//angular
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
//ionic
import { IonicModule } from "@ionic/angular";
//pages
import { ReactiveFormPage } from "./reactive-form.page";
//shared
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: "",
        component: ReactiveFormPage,
      },
    ]),
    ReactiveFormsModule,
    SharedModule,
  ],
  declarations: [ReactiveFormPage],
})
export class ReactiveFormPageModule {}
