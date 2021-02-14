import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RouletteHomePageRoutingModule } from './roulette-home-routing.module';

import { RouletteHomePage } from './roulette-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouletteHomePageRoutingModule
  ],
  declarations: [RouletteHomePage]
})
export class RouletteHomePageModule {}
