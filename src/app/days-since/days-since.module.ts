import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DaysSincePageRoutingModule } from './days-since-routing.module';

import { DaysSincePage } from './days-since.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DaysSincePageRoutingModule
  ],
  declarations: [DaysSincePage]
})
export class DaysSincePageModule {}
