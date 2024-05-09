import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoPaquetePage } from './nuevo-paquete.page';

const routes: Routes = [
  {
    path: '',
    component: NuevoPaquetePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevoPaquetePageRoutingModule {}
