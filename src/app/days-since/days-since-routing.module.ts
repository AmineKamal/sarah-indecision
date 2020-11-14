import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DaysSincePage } from './days-since.page';

const routes: Routes = [
  {
    path: '',
    component: DaysSincePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DaysSincePageRoutingModule {}
