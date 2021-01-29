import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfinitScrollPageRoutingModule } from './infinit-scroll-routing.module';

import { InfinitScrollPage } from './infinit-scroll.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfinitScrollPageRoutingModule
  ],
  declarations: [InfinitScrollPage]
})
export class InfinitScrollPageModule {}
