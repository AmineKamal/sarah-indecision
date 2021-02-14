import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GymProgressionPage } from './gym-progression.page';

const routes: Routes = [
  {
    path: '',
    component: GymProgressionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GymProgressionPageRoutingModule {}
