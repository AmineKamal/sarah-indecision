import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RouletteHomePage } from './roulette-home.page';

const routes: Routes = [
  {
    path: '',
    component: RouletteHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RouletteHomePageRoutingModule {}
