//angular
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
//ionic
import { IonicModule } from "@ionic/angular";
//pages
import { SandboxPage } from "./sandbox.page";
//components
import { ExpandableContentModule, RatingModule } from "src/app/components";
//routing
import { SandboxPageRoutingModule } from "./sandbox-routing.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SandboxPageRoutingModule,
    ExpandableContentModule,
    RatingModule,
  ],
  declarations: [SandboxPage],
  exports: [SandboxPage],
})
export class SandboxPageModule {}
