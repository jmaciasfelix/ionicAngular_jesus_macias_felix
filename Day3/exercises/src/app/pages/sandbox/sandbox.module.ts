// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

// ionic
import { IonicModule } from '@ionic/angular';

// page
import { SandboxPage } from './sandbox.page';

const routes: Routes = [
  {
    path: '',
    component: SandboxPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SandboxPage]
})
export class SandboxPageModule {}
