import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GymProgressionPageRoutingModule } from './gym-progression-routing.module';

import { GymProgressionPage } from './gym-progression.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GymProgressionPageRoutingModule
  ],
  declarations: [GymProgressionPage]
})
export class GymProgressionPageModule {}
