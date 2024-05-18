import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatePaquetePage } from './update-paquete.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatePaquetePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatePaquetePageRoutingModule {}
