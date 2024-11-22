import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedComponentsPage } from './shared-components.page';

const routes: Routes = [
  {
    path: '',
    component: SharedComponentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SharedComponentsPageRoutingModule {}
