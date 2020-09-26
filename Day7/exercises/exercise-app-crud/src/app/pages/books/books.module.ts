import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BooksPageRoutingModule } from './books-routing.module';

import { BooksPage } from './books.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, BooksPageRoutingModule, SharedModule],
  declarations: [BooksPage]
})
export class BooksPageModule {}
